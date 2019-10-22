from Jumpscale import j


class Package(j.baseclasses.threebot_package):
    def prepare(self):
        """
        is called at install time
        :return:
        """
        pass

    def start(self):
        """
        called when the 3bot starts
        :return:
        """

        server = self.openresty
        server.configure()

        app = j.threebot.package.chat.get_app()
        rack = j.servers.rack.get()

        rack.bottle_server_add(name="chatapp", port=8522, app=app)

        for port in (443, 80):
            website = server.get_from_port(port=port)
            locations = website.locations.get("main_chat")

            website_location = locations.locations_static.new()
            website_location.name = "chatstatic"
            website_location.path_url = "/chatstatic"
            website_location.path_location = f"{self._dirpath}/static"
            website_location.use_jumpscale_weblibs = True

            proxy_location = locations.locations_proxy.new()
            proxy_location.name = "chat"
            proxy_location.path_url = "/chat"
            proxy_location.ipaddr_dest = "0.0.0.0"
            proxy_location.port_dest = 8522
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
