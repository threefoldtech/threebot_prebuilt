from Jumpscale import j
from os.path import dirname, abspath, join


import re
import unicodedata

__version__ = "0.0.1"


# TODO: improve and move to jsx
def slugify(string):

    """
    Slugify a unicode string.
    Example:
        >>> slugify(u"Héllø Wörld")
        u"hello-world"
    """

    return re.sub(
        r"[-\s]+",
        "-",
        re.sub(r"[^\w\s-]", "", unicodedata.normalize("NFKD", string).encode("ascii", "ignore").decode())
        .strip()
        .lower(),
    )


# TODO: improve and move to jsx
def remove_date(filename):
    return re.sub("(\d+\-)+", "", filename)


schema_blogmetadata = """

@url = jumpscale.blog.metadata

blog_name = "" (S)
blog_title = "JSX blog" (S)
blog_description = "JSX blog description" (S)
author_name = "" (S)
author_email = "" (S)
author_image_filename = ""
base_url = "" (S)
url = "" (S)
posts_dir = "posts"
github_username = "" (S)
github_repo_url = "" (S)
"""
schema_blogpost = """

@url = jumpscale.blog.post

title = "" (S)
slug = "" (S)
content = "" (S)
tags = (LS)
published_at = "" (S)
"""

schema_blog = """
@url = jumpscale.blog

git_repo_url = "" (S)
metadata = (O) !jumpscale.blog.metadata
posts =  (LO) !jumpscale.blog.post

"""


class Package(j.baseclasses.threebot_package):
    def _init(self, **kwargs):
        if "branch" in kwargs.keys():
            self.branch = kwargs["branch"]
        else:
            self.branch = "*"

    def prepare(self, blog_name, repo_url):
        """
        is called at install time
        :return:
        """
        dest = j.clients.git.pullGitRepo(repo_url)

        # JSX> j.sal.fs.listDirsInDir(dest)
        # ['/sandbox/code/gitlab/xmonader/sample-blog-jsx/.git', '/sandbox/code/gitlab/xmonader/sample-blog-jsx/posts']
        # JSX> j.sal.fs.listFilesInDir(dest)
        # ['/sandbox/code/gitlab/xmonader/sample-blog-jsx/metadata.yml']

        metadata = j.data.bcdb.system.model_get(schema=schema_blogmetadata)
        post_model = j.data.bcdb.system.model_get(schema=schema_blogpost)
        blog_model = j.data.bcdb.system.model_get(schema=schema_blog)

        dirs = j.sal.fs.listDirsInDir(dest)
        files = j.sal.fs.listFilesInDir(dest)
        metafiles = [f for f in files if j.sal.fs.getBaseName(f) == "metadata.yml"]
        if metafiles:
            metafile = metafiles[0]
        else:
            raise j.exceptions.RuntimeError("no metadata.yml file found in the rep.")

        meta = j.data.serializers.yaml.load(metafile)
        found = blog_model.find(git_repo_url=repo_url)

        if not found:
            blog = blog_model.new()
        else:
            blog = found[0]

        posts_dir_path = j.sal.fs.joinPaths(dest, meta["posts_dir"])

        blog.metadata.blog_title = meta.get("blog_title", "blog title")
        blog.metadata.blog_description = meta.get("blog_description", "blog desc")
        blog.metadata.author_name = meta["author_name"]
        blog.metadata.author_email = meta["author_email"]
        blog.metadata.author_image_filepath = j.sal.fs.joinPaths(dest, meta["author_image_filename"])
        blog.metadata.posts_dir = posts_dir_path
        blog.metadata.github_username = meta["github_username"]
        blog.metadata.posts_per_page = int(meta.get("posts_per_page", "3"))
        blog.metadata.github_repo_url = repo_url
        blog.metadata.blog_name = blog_name
        blog.posts = []

        posts = j.sal.fs.listFilesInDir(posts_dir_path)
        for post in posts:
            print("post")
            basename = j.sal.fs.getBaseName(post)
            content = j.sal.fs.readFile(post)
            parsed = j.data.markdown.document_get(content)
            meta = parsed.meta
            post_obj = post_model.new()
            post_title = remove_date(basename)
            post_obj.title = meta.get("title", [post_title])[0]
            post_obj.slug = slugify(post_title)
            post_obj.content = content
            tags = meta.get("tags", [""])[0]
            tags = [t.strip() for t in tags.split(",")]
            post_obj.tags = tags
            post_obj.save()
            blog.posts.append(post_obj)

        blog.save()

        self.gedis_server.actors_add(j.sal.fs.joinPaths(self.package_root, "actors"))

        server = j.servers.openresty.get("blog")
        server.install(reset=False)
        server.configure()
        website = server.websites.get("blog")
        website.ssl = False
        website.port = 8084
        locations = website.locations.get("blog")

        website_location = locations.locations_static.new()
        website_location.name = "blog"
        website_location.path_url = f"/{blog_name}"
        website_location.use_jumpscale_weblibs = False
        fullpath = j.sal.fs.joinPaths(self.package_root, "html/")
        website_location.path_location = fullpath

        website_location_assets = locations.locations_static.new()
        website_location_assets.name = "assets"
        website_location_assets.path_url = "/"
        website_location_assets.use_jumpscale_weblibs = True
        fullpath = j.sal.fs.joinPaths(self.package_root, "html/")
        website_location_assets.path_location = fullpath

        locations.configure()
        website.configure()

    def start(self):
        """
        called when the 3bot starts
        :return:
        """
        server = j.servers.openresty.get("blog")
        server.start()

    def stop(self):
        """
        called when the 3bot stops
        :return:
        """
        pass

    def uninstall(self):
        """
        called when the package is no longer needed and will be removed from the threebot
        :return:
        """
        # TODO: clean up bcdb ?
        pass
