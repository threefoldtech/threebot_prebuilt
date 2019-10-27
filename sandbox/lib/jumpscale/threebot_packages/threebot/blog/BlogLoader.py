from Jumpscale import j

from JumpscaleLibs.data.markdown.mistune import markdown
from os.path import dirname, abspath, join, splitext
import re
import unicodedata


def get_excerpt(content, maxlen=400):

    html = markdown(content)
    from bs4 import BeautifulSoup

    text = "".join(BeautifulSoup(html).findAll(text=True))
    return text[:maxlen]


class BlogLoader(j.baseclasses.object):
    # VonSub: repo_url = "https://github.com/VonSub/blog"
    # xmon: XMON_BLOG = "git@gitlab.com:xmonader/sample-blog-jsx.git"
    __jslocation__ = "j.tools.blog_loader"

    def _init(self, blog=None, meta=None, dest=None, blog_name=None, repo_url=None, post_model=None, *args, **kwargs):
        j.builders.runtimes.python3.pip_package_install("beautifulsoup4")
        self.blog = blog
        self.meta = meta
        self.dest = dest
        self.blog_name = blog_name
        self.repo_url = repo_url
        self.post_model = post_model

    def _remove_date(self, filename):
        return re.sub(r"(\d+\-)+", "", filename)

    def _published_date(self, filename):
        found = re.findall(r"^(\d+\-\d+\-\d+)", filename)
        if found:
            return found[0]
        else:
            today = j.data.time.epoch
            return j.data.time.epoch2pythonDate(today).isoformat().replace("/", "-")

    def _slugify(self, string):
        """
        Slugify a unicode string.
        Example:
            >>> _slugify(u"Héllø Wörld")
            u"hello-world"
        """
        string = self._remove_date(string)
        return re.sub(
            r"[-\s]+",
            "-",
            re.sub(r"[^\w\s-]", "", unicodedata.normalize("NFKD", string).encode("ascii", "ignore").decode())
            .strip()
            .lower(),
        )

    # populate posts
    def _create_blog(self):
        self.posts_dir_path = j.sal.fs.joinPaths(self.dest, self.meta.get("posts_dir", "posts"))
        self.blog.metadata.blog_title = self.meta.get("blog_title", "blog title")
        self.blog.metadata.blog_description = self.meta.get("blog_description", "blog desc")
        self.blog.metadata.author_name = self.meta["author_name"]
        self.blog.metadata.author_email = self.meta["author_email"]
        self.blog.metadata.author_image = self.meta["author_image_filename"]
        self.blog.metadata.posts_dir = self.posts_dir_path
        self.blog.metadata.allow_disqus = self.meta.get("allow_disqus", True)
        self.blog.metadata.allow_navbar = self.meta.get("allow_navbar", True)
        self.blog.metadata.allow_footer = self.meta.get("allow_footer", True)

        sidebar_links = self.blog.metadata.sidebar_links
        sidebar_social_links = self.blog.metadata.sidebar_social_links
        sidebar_navlinks = self.blog.metadata.nav_links

        for link_obj in self.meta.get("sidebar_links", []):
            if link_obj not in sidebar_links:
                sidebar_links.append(link_obj)
        for link_obj in self.meta.get("sidebar_social_links", []):
            if link_obj not in sidebar_social_links:
                sidebar_social_links.append(link_obj)
        for link_obj in self.meta.get("nav_links", []):
            if link_obj not in sidebar_navlinks:
                sidebar_navlinks.append(link_obj)

        self.blog.metadata.github_username = self.meta["github_username"]
        self.blog.metadata.posts_per_page = int(self.meta.get("posts_per_page", "3"))
        self.blog.metadata.github_repo_url = self.repo_url
        self.blog.metadata.blog_name = self.blog_name
        self.blog.posts = []
        self.blog.save()

    def _create_posts(self):
        self.posts_dir_path = j.sal.fs.joinPaths(self.dest, self.meta.get("posts_dir", "posts"))
        posts = j.sal.fs.listFilesInDir(self.posts_dir_path)
        for post in posts:
            basename = j.sal.fs.getBaseName(post)
            basename = splitext(basename)[0]
            content = j.sal.fs.readFile(post)
            parsed = j.data.markdown.document_get(content)
            meta = parsed.meta

            post_title = self._remove_date(basename)

            the_title = post_title
            if "title" in meta:
                the_title = meta["title"][0]
            get_post = self.post_model.find(title=the_title)

            if get_post:
                post_obj = get_post[0]
            else:
                post_obj = self.post_model.new()

            post_obj.title = the_title
            post_obj.slug = self._slugify(post_title)
            post_obj.content_with_meta = content
            post_obj.content = parsed.strip_meta(content)
            if len(meta.get("tags", [])) > 0:
                tags = meta.get("tags", [])[0]
                tags = [t.strip() for t in tags.split(",")]
                post_obj.tags = tags
            the_author_name = (
                meta.get("author")[0]
                if meta.get("author")
                else meta.get("author_name", [self.blog.metadata.author_name])[0]
            )
            the_author_email = meta.get("author_email", [self.blog.metadata.author_email])[0]
            the_author_image = meta.get("author_image", [self.blog.metadata.author_image])[0]
            the_author_published_at = (
                meta.get("published_at")[0] if meta.get("published_at") else self._published_date(basename)
            )

            post_obj.author_name = the_author_name
            post_obj.author_email = the_author_email
            post_obj.author_image = the_author_image
            post_obj.post_image = meta.get("post_image", [""])[0]
            post_obj.published_at = the_author_published_at
            post_obj.excerpt = meta.get("excerpt", [get_excerpt(post_obj.content)])[0]

            post_obj.save()
            # print("POST INFO: ", post_obj)
            self.blog.posts.append(post_obj)
            self.blog.save()

    def _create_pages(self):

        pages_dir_path = j.sal.fs.joinPaths(self.dest, self.meta.get("pages_dir", "pages"))
        if not j.sal.fs.exists(pages_dir_path):
            return
        pages = j.sal.fs.listFilesInDir(pages_dir_path)
        for post in pages:
            basename = j.sal.fs.getBaseName(post)
            basename = splitext(basename)[0]
            content = j.sal.fs.readFile(post)
            parsed = j.data.markdown.document_get(content)
            meta = parsed.meta

            post_title = self._remove_date(basename)

            the_title = post_title
            if "title" in meta:
                the_title = meta["title"][0]

            get_post = self.post_model.find(title=the_title)
            if get_post:
                post_obj = get_post[0]
            else:
                post_obj = self.post_model.new()

            post_obj.title = meta.get("title", [the_title])[0]
            post_obj.slug = self._slugify(post_title)
            post_obj.content_with_meta = content
            post_obj.content = parsed.strip_meta(content)
            tags = meta.get("tags", [])[0]
            tags = [t.strip() for t in tags.split(",")]
            post_obj.tags = tags
            post_obj.save()
            print("POST INFO: ", post_obj)
            if not post_obj in self.blog.pages:
                self.blog.pages.append(post_obj)
                self.blog.save()

    def _load_blog(self):

        self.dest = j.clients.git.pullGitRepo(self.repo_url)
        bcdb = j.data.bcdb.system
        bcdb.models_add(
            path="/sandbox/code/github/threefoldtech/jumpscaleX_threebot/ThreeBotPackages/threebot/blog/models"
        )
        self.post_model = bcdb.model_get(url="jumpscale.blog.post")

        blog_model = bcdb.model_get(url="jumpscale.blog")

        # dirs = j.sal.fs.listDirsInDir(dest)
        files = j.sal.fs.listFilesInDir(self.dest)
        metafiles = [f for f in files if j.sal.fs.getBaseName(f) == "metadata.yml"]
        if metafiles:
            metafile = metafiles[0]
        else:
            raise j.exceptions.RuntimeError("no metadata.yml file found in the repo.")
        self.meta = j.data.serializers.yaml.load(metafile)

        found = blog_model.find(name=self.blog_name)
        if not found:
            self.blog = blog_model.new()
            self.blog.name = self.blog_name
        else:
            self.blog = found[0]

        # population
        blogobj = j.tools.blog_loader
        blogobj.blog = self.blog
        blogobj.meta = self.meta
        blogobj.dest = self.dest
        blogobj.post_model = self.post_model
        blogobj.blog_name = self.blog_name
        blogobj.repo_url = self.repo_url
        blogobj._create_blog()
        blogobj._create_posts()
        blogobj._create_pages()
        self._log_info(f"blog {self.blog_name} loaded")

    def add_blog(self, blog_name, repo_url):
        # set locations
        self.blog_name = blog_name
        self.repo_url = repo_url
        self._load_blog()

