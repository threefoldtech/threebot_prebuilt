from Jumpscale import j


class Package(j.baseclasses.threebot_package):
    def start(self):
        for pkg in ["interface", "contacts", "appstore", "mail"]:
            package = j.tools.threebot_packages.get(
                pkg,
                path="/sandbox/code/github/threefoldtech/jumpscaleX_threebot/ThreeBotPackages/threebot/{}/".format(pkg),
            )
            package.prepare()
            package.save()
            package.start()

        # this is some temporary stuff for jimber demo; holy promise to @xmonader to delete after
        server = self.openresty
        website = server.get_from_port(80)
        locations = website.locations.get("interface_location")

        proxy_location = website.locations.get().locations_proxy.new()
        proxy_location.name = "gedishttp"
        proxy_location.path_url = "/api/actors/"
        proxy_location.ipaddr_dest = "127.0.0.1"
        proxy_location.port_dest = 8903
        proxy_location.path_dest = "/"
        proxy_location.type = "http"
        proxy_location.scheme = "http"
        locations.configure()
        website.configure()
        website.save()

    def _init(self, **kwargs):
        if "branch" in kwargs.keys():
            self.branch = kwargs["branch"]
        else:
            self.branch = "master"

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
