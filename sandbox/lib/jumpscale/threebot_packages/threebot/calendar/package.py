import sys
import os

from Jumpscale import j


class Package(j.baseclasses.threebot_package):
    @property
    def bcdb(self):
        return self._package.threebot_server.bcdb_get("caldav")

    def start(self):
        """
        called when the 3bot starts
        :return:
        """
        # TODO: ADD REVERSE PROXY
        sys.path.append(os.path.dirname(__file__))
        import radicale
        import logging

        # radicale.log.logger.setLevel(logging.DEBUG)
        from radicale import application

        rack = self.threebot_server.rack_server

        rack.bottle_server_add(name="calendar", port=8851, app=application, strip_slash=False)
        website = self.openresty.get_from_port(443)

        locations = website.locations.get("calendar")
        proxy_location = locations.locations_proxy.new()
        proxy_location.name = "calendar"
        proxy_location.path_url = "/calendar/"
        proxy_location.ipaddr_dest = "0.0.0.0"
        proxy_location.port_dest = 8851
        proxy_location.path_dest = "/"
        proxy_location.scheme = "http"

        website_location = locations.locations_static.new()
        website_location.name = "static"
        website_location.path_url = "/static/"
        website_location.path_location = f"{self._dirpath}/static"

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
        j.builders.runtimes.python3.pip_package_uninstall("filetype")
