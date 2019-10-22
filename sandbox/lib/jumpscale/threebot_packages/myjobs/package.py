from Jumpscale import j


class Package(j.baseclasses.threebot_package):
    def prepare(self):
        """
        is called at install time
        :return:
        """
        j.servers.myjobs.workers_tmux_start()

    def start(self):
        server = self.openresty
        server.install(reset=False)
        server.configure()

        website = server.get_from_port(443)
        locations = website.locations.get("myjobs_locations")

        website_location = locations.locations_spa.new()
        website_location.name = "myjobs"
        website_location.path_url = "/myjobs"
        website_location.use_jumpscale_weblibs = False
        fullpath = j.sal.fs.joinPaths(self.package_root, "html/")
        website_location.path_location = fullpath

        locations.configure()
        website.configure()
