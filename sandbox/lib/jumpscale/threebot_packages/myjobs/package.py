from Jumpscale import j
from os.path import dirname, abspath, join


class Package(j.baseclasses.threebot_package):
    def _init(self, **kwargs):
        if "branch" in kwargs.keys():
            self.branch = kwargs["branch"]
        else:
            self.branch = "*"

    def prepare(self):
        """
        is called at install time
        :return:
        """
        j.servers.myjobs.workers_tmux_start()
        self.gedis_server.actors_add(j.sal.fs.joinPaths(self.package_root, "actors"))

        server = j.servers.openresty.get("myjobs")
        server.install(reset=False)
        server.configure()
        website = server.websites.get("myjobs")
        website.ssl = False
        website.port = 8080
        locations = website.locations.get("myjobs")

        website_location = locations.locations_static.new()
        website_location.name = "myjobs"
        website_location.path_url = "/"
        website_location.use_jumpscale_weblibs = True
        fullpath = j.sal.fs.joinPaths(self.package_root, "html/")
        website_location.path_location = fullpath
        locations.configure()
        website.configure()

    def start(self):
        """
        called when the 3bot starts
        :return:
        """
        server = j.servers.openresty.get("myjobs")
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
