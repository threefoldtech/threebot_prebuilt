from Jumpscale import j
import os

__version__ = "0.0.1"


class Package(j.baseclasses.threebot_package):
    def _init(self, **kwargs):
        self.branch = kwargs["package"].branch or "master"
        os.environ["dev"] = "0"
        self.DEV = os.environ.get("dev")

    def prepare(self):
        j.builders.runtimes.nodejs.install()
        prepare_cmd = f"""
        cd {self._dirpath}
        pushd sapper-blog
        export dev={self.DEV}
        npm install
        npm run export
        popd
        mkdir -p html/
        cp sapper-blog/__sapper__/export/blog/* html/ -R
        """
        j.sal.process.execute(prepare_cmd)

    def start(self):
        """
        called when the 3bot starts
        :return:
        """
        server = self.openresty
        server.install(reset=False)
        server.configure()
        website = server.get_from_port(443)

        locations = website.locations.get("blogs_locations")
        # adding blogs static assests
        blog_model = self.bcdb.model_get(url="jumpscale.blog")
        for blog in blog_model.find():
            if blog.name:
                blog_name = blog.name
                website_location = locations.locations_static.new()
                website_location.name = "blogs"
                website_location.name = f"blog_{blog_name}_assets"
                website_location.path_url = f"/blog_{blog_name}/assets"
                assets_path = blog.metadata.posts_dir.split("/")[1:6]
                fullpath = j.sal.fs.joinPaths("/", "/".join(assets_path), "assets")
                website_location.path_location = fullpath

        # blog spa
        website_location = locations.locations_spa.new()
        website_location.name = "blog"
        website_location.path_url = "/blog"
        website_location.use_jumpscale_weblibs = False
        fullpath = j.sal.fs.joinPaths(self.package_root, "html/")
        website_location.path_location = fullpath

        locations.configure()
        website.configure()
