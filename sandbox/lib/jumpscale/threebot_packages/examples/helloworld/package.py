from Jumpscale import j


class Package(j.baseclasses.threebot_package):
    @property
    def bcdb(self):
        return self._package.threebot_server.bcdb_get("helloworld")

    def prepare(self):
        """
        Dependencies
        """
        j.builders.runtimes.python3.pip_package_install("filetype")

        website = self.openresty.websites.get("helloworld")
        website.ssl = False
        website.port = 8081

        locations = website.locations.get("helloworld")

        # TODO, needs to load the bottle app & connect it to the right port at back = 9201

        # create location `/actors` to on your website `8084` to forward
        # requests to `9201` where the bottle server is running
        proxy_location = locations.locations_proxy.new()
        proxy_location.name = "gedishttp"
        proxy_location.path_url = "/actors"
        proxy_location.ipaddr_dest = "0.0.0.0"
        proxy_location.port_dest = 9201
        proxy_location.scheme = "http"

        website_location = locations.locations_static.new()
        website_location.name = "static"
        website_location.path_url = "/"
        fullpath = j.sal.fs.joinPaths(self.package_root, "static/")
        website_location.path_location = fullpath

        locations.configure()
        website.configure()

    def start(self):
        pass

    def stop(self):
        pass

    def uninstall(self):
        """
        Remove Dependencies
        """
        j.builders.runtimes.python3.pip_package_uninstall("filetype")
