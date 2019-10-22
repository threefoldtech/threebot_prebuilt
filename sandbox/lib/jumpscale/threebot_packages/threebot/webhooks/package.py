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
        website = server.get_from_port(port=443)
        locations = website.locations.get("main_webhooks")

        app = j.threebot.package.webhooks.get_app()

        self.rack_server.bottle_server_add(name="webhooks", port=8530, app=app)

        proxy_location = locations.locations_proxy.new()
        proxy_location.name = "webhooks"
        proxy_location.path_url = "/webhooks"
        proxy_location.ipaddr_dest = "0.0.0.0"
        proxy_location.port_dest = 8530
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
