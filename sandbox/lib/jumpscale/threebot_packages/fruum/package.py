from gevent import pywsgi
from geventwebsocket.handler import WebSocketHandler
import importlib.util
import os

from Jumpscale import j


class Package(j.baseclasses.threebot_package):
    def _init(self, **kwargs):
        self.db = self._package.threebot_server.bcdb_get("fruum")

    def prepare(self):
        """
        is called at install time
        :return:
        """
        j.builders.runtimes.python3.pip_package_install("python-socketio")

    def start(self):
        """
        called when the 3bot starts
        :return:
        """
        self.db.models_add(path=self.package_root + "/models")
        self.gedis_server.actors_add(self.package_root + "/actors", namespace="fruum")

        server = self.openresty
        server.install(reset=False)
        server.configure()

        website = server.websites.get("fruum")
        website.ssl = False
        website.port = 10000

        locations = website.locations.get("fruum")

        # START BOTTLE ACTORS ENDPOINT

        rack = j.servers.rack.get()
        app = j.servers.gedishttp.get_app()
        rack.bottle_server_add(name="gedishttp", port=9201, app=app)
        # create location `/actors` to on your website `8084` to forward
        # requests to `9201` where the bottle server is running
        proxy_location = locations.locations_proxy.new()
        proxy_location.name = "gedishttp"
        proxy_location.path_url = "/actors"
        proxy_location.ipaddr_dest = "0.0.0.0"
        proxy_location.port_dest = 9201
        proxy_location.scheme = "http"
        # END BOTTLE ACTORS ENDPOINT

        spec = importlib.util.spec_from_file_location("app", os.path.abspath(os.path.dirname(__file__)) + "/app.py")
        module = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(module)

        app = module.app
        appws = module.appws

        sio_server = pywsgi.WSGIServer(("", 10002), appws, handler_class=WebSocketHandler)
        rack.bottle_server_add(name="fruum", port=10001, app=app)
        rack.add(name="fruum_socketio", server=sio_server)

        proxy_location = locations.locations_proxy.new()
        proxy_location.name = "fruum_http"
        proxy_location.path_url = "/"
        proxy_location.ipaddr_dest = "0.0.0.0"
        proxy_location.port_dest = 10001
        proxy_location.scheme = "http"

        proxy_location = locations.locations_proxy.new()
        proxy_location.name = "socketio"
        proxy_location.path_url = "/socket.io"
        proxy_location.ipaddr_dest = "0.0.0.0"
        proxy_location.port_dest = 10002
        proxy_location.scheme = "http"
        proxy_location.type = "websocket"

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
        j.builders.runtimes.python3.pip_package_uninstall("python-socketio")
