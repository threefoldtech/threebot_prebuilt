from urllib.parse import urlparse
from Jumpscale import j
from .Doc import Doc
from .Link import Linker, MarkdownLinkParser

JSBASE = j.baseclasses.object

import copy

import sys


class DocSite(j.baseclasses.object):
    """
    """

    def __init__(self, path, name="", sonic_client=None):
        JSBASE.__init__(self)
        self._j = j

        self.docgen = j.tools.markdowndocs
        # init initial arguments

        self.path = path
        if not j.sal.fs.exists(path):
            raise j.exceptions.Base("Cannot find path:%s" % path)

        self.sonic_client = sonic_client
        self.name = name.lower()

        self.name = j.core.text.strip_to_ascii_dense(self.name)
        if self.name == "":
            raise j.exceptions.Base("name cannot be empty")

        self.defs = {}
        self.htmlpages = {}
        self.content_default = {}  # key is relative path in docsite where default content found

        # need to empty again, because was used in config
        self.data_default = {}  # key is relative path in docsite where default content found

        self._docs = {}
        self._files = {}
        self._sidebars = {}

        self._errors = []

        self.links_verify = False

        self.error_file_path = self.path + "/errors.md"

        self.outpath = j.core.tools.text_replace("/docsites/{NAME}", args={"NAME": self.name})

        self._log_level = 1

        self._git = None
        self._loaded = False

        self._log_info("found:%s" % self)

    def _clean(self, name):
        assert j.data.types.string.check(name)
        #     if len(name)==1:
        #         name=name[0]
        #     else:
        #         name="/".join(name) #not sure this is correct
        return j.core.text.convert_to_snake_case(name)

    @property
    def git(self):
        if self._git is None:
            gitpath = j.clients.git.findGitPath(self.path, die=False)
            if not gitpath:
                return
            if gitpath not in self.docgen._git_repos:
                self._git = j.tools.markdowndocs._git_get(gitpath)
                self.docgen._git_repos[gitpath] = self.git
        return self._git
        # MARKER FOR INCLUDE TO STOP  (HIDE)

    @property
    def host(self):
        return urlparse(self.metadata["repo"]).hostname

    @property
    def account(self):
        return self.git and self.git.account

    @property
    def repo(self):
        return self.git and self.git.name

    @property
    def branch(self):
        return self.git and self.git.branchName

    def is_different_source(self, custom_link):
        """check if account, repo or branch are differnt from current docsite

        :param custom_link: instanc of CustomLink
        :type custom_link: CustomLink
        :return: True if different, False if the same
        :rtype: bool
        """
        return (
            custom_link.account
            and custom_link.account != self.account
            or custom_link.repo
            and custom_link.repo != self.repo
            or custom_link.branch
            and custom_link.branch != self.branch
        )

    def get_real_source(self, custom_link, host=None):
        """
        get the source of the data (only works for github and local paths for now)

        :param custom_link: custom link
        :type custom_link: CustomLink
        :param host: host, defaults to githib.com
        :type host: str
        :return: a path or a full link
        :rtype: str
        """
        if custom_link.is_url or not self.git:
            # as-is
            return custom_link.path

        account = custom_link.account or self.account
        repo = custom_link.repo or self.repo
        if not host:
            host = "github.com"

        linker = Linker(host, account, repo)

        if custom_link.reference:
            return linker.issue(custom_link.reference)

        same_repo = account == self.account and repo == self.repo
        if same_repo:
            # the same docsite, the same internal link
            # also, custom link branch is ignored here
            return custom_link.path

        branch = custom_link.branch
        return linker.tree(custom_link.path, branch=branch)

    def get_real_link(self, custom_link, host=None):
        """
        get real link of custom link as a url
        """
        repo = self.get_real_source(custom_link, host)
        if not MarkdownLinkParser(repo).is_url:
            # not an external url, it's a relative link inside this docsite, keep as is
            return custom_link.path
        else:
            # the real source is a url outside this docsite
            # get a new link and docsite
            host = j.clients.git.getGitRepoArgs(repo)[0]
            new_link = Linker.to_custom_link(repo, host)
            # to match any path, start with root `/`
            url = Linker(host, new_link.account, new_link.repo).tree("/")
            docsite = j.tools.markdowndocs.load(url, name=new_link.repo)
            custom_link = new_link

        try:
            included_doc = docsite.doc_get(custom_link.path)
            full_path = included_doc.path
        except j.exceptions.Base:
            full_path = docsite.file_get(custom_link.path)

        path = full_path.replace(j.clients.git.findGitPath(full_path), "")
        return Linker(custom_link.host, custom_link.account, custom_link.repo).tree(path, branch=custom_link.branch)

    @property
    def urls(self):
        urls = [item for item in self.docs.keys()]
        urls.sort()
        return urls

    @property
    def docs(self):
        if self._docs == {}:
            self.load()
        return self._docs

    @property
    def files(self):
        if self._files == {}:
            self.load()
        return self._files

    def _processData(self, path):
        ext = j.sal.fs.getFileExtension(path).lower()
        if ext == "":
            # try yaml & toml
            self._processData(path + ".toml")
            self._processData(path + ".yaml")
            return

        if not j.sal.fs.exists(path):
            return {}

        if ext == "toml":
            data = j.data.serializers.toml.load(path)
        elif ext == "yaml":
            data = j.data.serializers.yaml.load(path)
        else:
            raise j.exceptions.Input(message="only toml & yaml supported")

        if not j.data.types.dict.check(data):
            raise j.exceptions.Input(message="cannot process toml/yaml on path:%s, needs to be dict." % path)

        # dont know why we do this? something todo probably with mustache and dots?
        keys = [str(key) for key in data.keys()]
        for key in keys:
            if key.find(".") != -1:
                data[key.replace(".", "_")] = data[key]
                data.pop(key)

        fulldirpath = j.sal.fs.getDirName(path)
        rdirpath = j.sal.fs.pathRemoveDirPart(fulldirpath, self.path)
        rdirpath = rdirpath.strip("/").strip().strip("/")
        self.data_default[rdirpath] = data

    def load(self, reset=False):
        """
        walk in right order over all files which we want to potentially use (include)
        and remember their paths

        if duplicate only the first found will be used

        """
        if reset == False and self._loaded:
            return

        self._files = {}
        self._docs = {}
        self._sidebars = {}

        path = self.path
        if not j.sal.fs.exists(path=path):
            raise j.exceptions.NotFound("Cannot find source path in load:'%s'" % path)

        j.sal.fs.remove(self.path + "/errors.md")

        def callbackForMatchDir(path, arg):
            base = j.sal.fs.getBaseName(path).lower()
            if base.startswith("."):
                return False
            if base.startswith("_"):
                return False
            return True

        def callbackForMatchFile(path, arg):
            base = j.sal.fs.getBaseName(path).lower()
            if base == "_sidebar.md":
                return True
            if base.startswith("_"):
                return False
            ext = j.sal.fs.getFileExtension(path)
            if ext == "md" and base[:-3] in ["summary", "default"]:
                return False
            return True

        def callbackFunctionDir(path, arg):
            # will see if ther eis data.toml or data.yaml & load in data structure in this obj
            self._processData(path + "/data")
            dpath = path + "/default.md"
            if j.sal.fs.exists(dpath, followlinks=True):
                C = j.sal.fs.readFile(dpath)
                rdirpath = j.sal.fs.pathRemoveDirPart(path, self.path)
                rdirpath = rdirpath.strip("/").strip().strip("/")
                self.content_default[rdirpath] = C
            return True

        def callbackFunctionFile(path, arg):
            if path.find("error.md") != -1:
                return
            self._log_debug("file:%s" % path)
            ext = j.sal.fs.getFileExtension(path).lower()
            base = j.sal.fs.getBaseName(path)
            if ext == "md":
                self._log_debug("found md:%s" % path)
                base = base[:-3]  # remove extension
                doc = Doc(path, base, docsite=self, sonic_client=self.sonic_client)
                # if base not in self.docs:
                #     self.docs[base.lower()] = doc
                self._docs[doc.name_dot_lower] = doc
            elif ext in ["html", "htm"]:
                self._log_debug("found html:%s" % path)
                l = len(ext) + 1
                base = base[:-l]  # remove extension
                doc = Doc(path, base, docsite=self, sonic_client=self.sonic_client)
                # if base not in self.htmlpages:
                #     self.htmlpages[base.lower()] = doc
                self.htmlpages[doc.name_dot_lower] = doc
            else:
                self.file_add(path)
                # else:
                #     self._log_debug("found other:%s"%path)
                #     l = len(ext)+1
                #     base = base[:-l]  # remove extension
                #     doc = DocBase(path, base, docsite=self)
                #     if base not in self.others:
                #         self.others[base.lower()] = doc
                #     self.others[doc.name_dot_lower] = doc

        callbackFunctionDir(self.path, "")  # to make sure we use first data.yaml in root

        j.sal.fswalker.walkFunctional(
            self.path,
            callbackFunctionFile=callbackFunctionFile,
            callbackFunctionDir=callbackFunctionDir,
            arg="",
            callbackForMatchDir=callbackForMatchDir,
            callbackForMatchFile=callbackForMatchFile,
        )

        self._loaded = True

    def file_add(self, path, duplication_test=False):
        ext = j.sal.fs.getFileExtension(path).lower()
        base = j.sal.fs.getBaseName(path)
        if ext in [
            "png",
            "jpg",
            "jpeg",
            "pdf",
            "docx",
            "doc",
            "xlsx",
            "xls",
            "ppt",
            "pptx",
            "mp4",
            "css",
            "js",
            "mov",
            "py",
            "svg",
            "json",
        ]:
            self._log_debug("found file:%s" % path)
            base = self._clean(base)
            if duplication_test and base in self._files:
                raise j.exceptions.Input(message="duplication file in %s,%s" % (self, path))
            self._files[base] = path

    def error_raise(self, errormsg, doc=None):
        if doc is not None:
            errormsg2 = "## ERROR: %s\n\n- in doc: %s\n\n%s\n\n\n" % (doc.name, doc, errormsg)
            key = j.data.hash.md5_string("%s_%s" % (doc.name, errormsg))
            if not key in self._errors:
                errormsg3 = "```\n%s\n```\n" % errormsg2
                j.sal.bcdbfs.file_write(self.error_file_path, errormsg3, append=True)
                self._log_error(errormsg2)
                doc.errors.append(errormsg)
        else:
            self._log_error("DEBUG NOW raise error")
            raise j.exceptions.Base("stop debug here")

    def file_get(self, name, die=True):
        """
        returns path to the file
        """
        self.load()
        name = self._clean(name)

        if name in self.files:
            return self.files[name]

        name = name.replace(j.sal.fs.getFileExtension(name), "")
        for path in self.files.values():
            partial_path = path.lower().replace(j.sal.fs.getFileExtension(path), "")
            if partial_path.endswith(name):
                return path

        if die:
            raise j.exceptions.Input(message="Did not find file:%s in %s" % (name, self))
        return None

    def html_get(self, name, cat="", die=True):
        doc = self.doc_get(name=name, cat=cat, die=die)
        return doc.html_get()

    def doc_get(self, name, cat="", die=True):

        if j.data.types.list.check(name):
            name = "/".join(name)

        name = name.replace("/", ".").strip(".")

        self.load()
        name = self._clean(name)

        name = name.strip("/")
        name = name.lower()

        if name.endswith(".md"):
            name = name[:-3]  # remove .md

        if "/" in name:
            name = name.replace("/", ".")

        name = name.strip(".")  # lets make sure its clean again

        # let caching work
        if name in self.docs:
            if self.docs[name] is None and die:
                raise j.exceptions.Input(message="Cannot find doc with name:%s" % name)
            return self.docs[name]

        # build candidates to search
        candidates = [name]
        if name.endswith("readme"):
            candidates.append(name[:-6] + "index")
        else:
            candidates.append(name + ".readme")

        if name.endswith("index"):
            nr, res = self._doc_get(name[:-5] + "readme", cat=cat)
            if nr == 1:
                return 1, res
            name = name[:-6]
        else:
            candidates.append(name + ".index")

        # look for $fulldirname.$dirname as name of doc
        if "." in name:
            name0 = name + "." + name.split(".")[-1]
            candidates.append(name0)

        for cand in candidates:
            nr, res = self._doc_get(cand, cat=cat)
            if nr == 1:
                self.docs[name] = res  # remember for caching
                return self.docs[name]
            if nr > 1:
                self.docs[name] = None  # means is not there
                break

        if die:
            raise j.exceptions.Input(message="Cannot find doc with name:%s (nr docs found:%s)" % (name, nr))
        else:
            return None

    def _doc_get(self, name, cat=""):

        if name.lower().startswith("_sidebar_parent"):
            return 1, ""

        if name in self.docs:
            if cat is "":
                return 1, self.docs[name]
            else:
                if self.docs[name] == cat:
                    return 1, self.docs[name]

        else:

            res = []
            for key, item in self.docs.items():
                if item is None or item == "":
                    continue
                if item.name_dot_lower.endswith(name):
                    res.append(key)
            if len(res) > 0:
                return len(res), self.docs[res[0]]
            else:
                return 0, None

    def sidebar_get(self, url, reset=False):
        """
        will calculate the sidebar, if not in url will return None
        """
        self.load(reset=reset)
        if j.data.types.list.check(url):
            url = "/".join(url)
        self._log_debug("sidebar_get:%s" % url)
        if url in self._sidebars:
            return self._sidebars[url]

        url_original = copy.copy(url)
        url = url.strip("/")
        url = url.lower()

        if url.endswith(".md"):
            url = url[:-3]

        url = url.replace("/", ".")
        url = url.strip(".")

        url = self._clean(url)

        if url == "":
            self._sidebars[url_original] = None
            return None

        if "_sidebar" not in url:
            self._sidebars[url_original] = None
            return None  # did not find sidebar just return None

        if url in self.docs:
            self._sidebars[url_original] = self._sidebar_process(self.docs[url].markdown, url_original=url_original)
            return self._sidebars[url_original]

        # did not find the usual location, lets see if we can find the doc allone
        url0 = url.replace("_sidebar", "").strip().strip(".").strip()
        if "." in url0:  # means we can
            name = url0.split(".")[-1]
            doc = self.doc_get(name, die=False)
            if doc:
                # we found the doc, so can return the right sidebar
                possiblepath = doc.path_dir_rel.replace("/", ".").strip(".") + "._sidebar"
                if not possiblepath == url:
                    return self.get(possiblepath)

        # lets look at parent
        print("need to find parent for sidebar")

        if url0 == "":
            print("url0 is empty for sidebar")
            raise j.exceptions.Base("cannot be empty")

        newurl = ".".join(url0.split(".")[:-1]) + "._sidebar"
        newurl = newurl.strip(".")
        return self.sidebar_get(newurl)

    def _sidebar_process(self, c, url_original):
        def clean(c):
            out = ""
            state = "start"
            for line in c.split("\n"):
                lines = line.strip()
                if lines.startswith("*"):
                    lines = lines[1:]
                if lines.startswith("-"):
                    lines = lines[1:]
                if lines.startswith("+"):
                    lines = lines[1:]
                lines = lines.strip()
                if lines == "":
                    continue
                if line.find("(/)") is not -1:
                    continue
                if line.find("---") is not -1:
                    if state == "start":
                        continue
                    state = "next"
                out += line + "\n"
            return out

        c = clean(c)

        out = "* **[Wiki (home)](/)**\n"

        for line in c.split("\n"):
            if line.strip() == "":
                out += "\n\n"
                continue

            if "(" in line and ")" in line:
                url = line.split("(", 1)[1].split(")")[0]
            else:
                url = ""
            if "[" in line and "]" in line:
                descr = line.split("[", 1)[1].split("]")[0]
                pre = line.split("[")[0]
                pre = pre.replace("* ", "").replace("- ", "")
                if url == "":
                    url = descr
            else:
                descr = line
                pre = "<<"

            if url:
                doc = self.doc_get(url, die=False)
                if doc is None:
                    out += "    %s* NOTFOUND:%s" % (pre, url)
                else:
                    out += "    %s* [%s](/%s)\n" % (pre, descr, doc.name_dot_lower.replace(".", "/"))

            else:
                if not pre:
                    pre = "    "
                if pre is not "<<":
                    out += "    %s* %s\n" % (pre, descr)
                else:
                    out += "    %s\n" % (descr)

        res = self.doc_get("_sidebar_parent", die=False)
        if res:
            out += res.content
        else:
            # out+="----\n\n"
            out += "\n\n* **Wiki Sites.**\n"
            keys = [item for item in j.tools.markdowndocs.docsites.keys()]
            keys.sort()
            for key in keys:
                if key.startswith("www") or key.startswith("simple"):
                    continue
                if len(key) < 4:
                    continue
                out += "    * [%s](../%s/)\n" % (key, key)

        return out

    def verify(self):
        self.load(reset=True)
        keys = [item for item in self.docs.keys()]
        keys.sort()
        for key in keys:
            doc = self.doc_get(key, die=True)
            self._log_info("verify:%s" % doc)
            try:
                doc.markdown  # just to trigger the error checking
            except Exception as e:
                msg = "unknown error to get markdown for doc, error:\n%s" % e
                self.error_raise(msg, doc=doc)
            # doc.html
        return self.errors

    @property
    def errors(self):
        """
        return current found errors
        """
        errors = "DID NOT FIND ERRORSFILE, RUN js_doc verify in the doc directory"
        if j.sal.bcdbfs.dir_exists(self.error_file_path):
            errors = j.sal.bcdbfs.file_read(self.error_file_path)
        return errors

    def __repr__(self):
        return "docsite:%s" % (self.path)

    __str__ = __repr__

    def write_metadata(self, dest):
        # Create file with extra content to be loaded in docsites
        data = {"name": self.name, "repo": ""}

        if self.git:
            data["repo"] = "https://github.com/%s/%s" % (self.account, self.repo)

        data_json = j.data.serializers.json.dumps(data)
        j.sal.bcdbfs.file_write(dest + "/.data", data_json, append=False)
        j.sal.fs.createDir(dest)
        j.sal.fs.writeFile(dest + "/.data", data_json, append=False)

    @property
    def metadata(self):
        return j.data.serializers.json.loads(j.sal.fs.readFile(self.outpath + "/.data"))

    def write(self, reset=False):
        self.load()
        self.verify()

        if reset:
            j.sal.bcdbfs.rmdir(self.outpath)

        # dest = j.sal.fs.joinPaths(self.outpath, "content")
        dest = self.outpath
        j.sal.bcdbfs.dir_create(dest)

        # copy errors file into the generated docs to be able to serve it using /wiki/<WIKI_NAME>#/errors
        if j.sal.bcdbfs.exists(self.error_file_path):
            j.sal.bcdbfs.file_copy_form_bcdbfs(self.error_file_path, dest)

        # NO NEED (also the ignore does not work well)
        # j.sal.fs.copyDirTree(self.path, self.outpath, overwriteFiles=True, ignoredir=['.*'], ignorefiles=[
        #               "*.md", "*.toml", "_*", "*.yaml", ".*"], rsync=True, recursive=True, rsyncdelete=True)

        self.write_metadata(dest)

        keys = [item for item in self.docs.keys()]
        keys.sort()
        for key in keys:
            doc = self.doc_get(key, die=False)
            if doc:
                doc.write()

        # # find the defs, also process the aliases
        # for key, doc in self.docs.items():
        #     if "tags" in doc.data:
        #         tags = doc.data["tags"]
        #         if "def" in tags:
        #             name = doc.name.lower().replace("_", "").replace("-", "").replace(" ", "")
        #             self.defs[name] = doc
        #             if "alias" in doc.data:
        #                 for alias in doc.data["alias"]:
        #                     name = alias.lower().replace("_", "").replace("-", "").replace(" ", "")
        #                     self.defs[name] = doc

        # this block is repeated
        # for key, doc in self.docs.items():
        #     # doc.defs_process()
        #     if doc:
        #         doc.write()

        # if j.sal.fs.exists(j.sal.fs.joinPaths(self.path, "static"), followlinks=True):
        #     j.sal.fs.copyDirTree(j.sal.fs.joinPaths(self.path, "static"), j.sal.fs.joinPaths(self.outpath, "public"))

    # def file_add(self, path):
    #     if not j.sal.fs.exists(path, followlinks=True):
    #         raise j.exceptions.Input(message="Cannot find path:%s" % path)
    #     base = j.sal.fs.getBaseName(path).lower()
    #     self.files[base] = path

    # def files_copy(self, destination=None):
    #     if not destination:
    #         if self.hugo:
    #             destination = "static/files"
    #         else:
    #             destination = "files"
    #     dpath = j.sal.fs.joinPaths(self.outpath, destination)
    #     j.sal.fs.createDir(dpath)
    #     for name, path in self.files.items():
    #         j.sal.fs.copyFile(path, j.sal.fs.joinPaths(dpath, name))

    # def process(self):
    #     for key, doc in self.docs.items():
    #         doc.process()
    #     self._processed = True
