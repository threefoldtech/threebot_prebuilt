from Jumpscale import j


class Package(j.baseclasses.threebot_package):
    """
    this is the base package for wikis it will only install the required configs
    ** Note **: you must load this package before loading any wikis
    """

    def prepare(self):
        """
        is called at install time
        :return:
        """
        # add graphviz for dot macro
        if not j.core.tools.cmd_installed("dot"):
            if j.builders.tools.platform_is_ubuntu:
                j.sal.ubuntu.apt_install("graphviz")

    def start(self):
        """
        called when the 3bot starts
        :return:
        """
        server = self.openresty

        rack = j.servers.rack.get()
        app = j.threebot.package.wikis.get_app()
        rack.bottle_server_add(name="wikisapp", port=8521, app=app)

        port = 443
        website = server.get_from_port(port)
        locations = website.locations.get("main_wiki")

        website_location = locations.locations_static.new()
        website_location.name = "wikistatic"
        website_location.path_url = "/wikistatic"
        website_location.path_location = f"{self._dirpath}/static"
        website_location.use_jumpscale_weblibs = True

        proxy_location = locations.locations_proxy.new()
        proxy_location.name = "wikis"
        proxy_location.path_url = "/wiki"
        proxy_location.ipaddr_dest = "0.0.0.0"
        proxy_location.port_dest = 8521
        proxy_location.scheme = "http"

        locations.configure()
        website.configure()

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
