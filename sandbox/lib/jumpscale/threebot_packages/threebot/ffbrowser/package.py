from Jumpscale import j


class Package(j.baseclasses.threebot_package):
    def _init(self, *args, **kwargs):
        pass

    @property
    def bcdb(self):
        # return self.threebot_server.bcdb_get("ffbrowser")
        pass

    def prepare(self):
        """
        Dependencies
        """
        pass

    def start(self):
        server = self.openresty
        server.install(reset=False)
        server.configure()

        website = server.get_from_port(80)
        locations = website.locations.get("locations")

        # import pdb; pdb.set_trace()

        # Serve static files
        website_location = locations.locations_static.new()
        website_location.name = "ffbrowser"
        website_location.path_url = "/ffbrowser"
        fullpath = j.sal.fs.joinPaths(self.package_root, "html")
        website_location.path_location = fullpath

        locations.configure()
        website.configure()

    def stop(self):
        pass

    def uninstall(self):
        """
        Remove Dependencies
        """
