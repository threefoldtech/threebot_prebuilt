from Jumpscale import j


class Package(j.baseclasses.threebot_package):
    def prepare(self):
        """

        ports & paths used for threebotserver
        see: /sandbox/code/github/threefoldtech/jumpscaleX_core/docs/3Bot/web_environment.md

        will start bottle server web interface which include (gedis http interface, gedis websocket interface and
        bcdbfs web server)

        endpoints:
        "/web/gedis/http"       >    gedis htto interface
        "/web/gedis/websocket"  >    gedis websocket interface
        "/web/bcdbfs"           >    bcdbfs web server
        """

        # bottle_port_original = 4442
        # bottle_server_new = 8904
        # websocket_port_original = 4444
        # websocket_port_new = 4445
        # gedis_port_http = 8903
        self.openresty.configure()

        # get our main webserver
        for port in (443, 80):
            website = self.openresty.get_from_port(port)

            # start bottle server
            app = j.servers.bottle_web.get_app()
            self.rack_server.bottle_server_add(name="bottle_web_interface", port=9999, app=app, websocket=True)

            # PROXY for gedis HTTP
            proxy_location = website.locations.get().locations_proxy.new()
            proxy_location.name = "webinterface"
            proxy_location.path_url = "/web/"
            proxy_location.ipaddr_dest = "127.0.0.1"
            proxy_location.port_dest = 9999
            proxy_location.path_dest = "/"
            proxy_location.type = "http"
            proxy_location.scheme = "http"

            url = "https://github.com/threefoldtech/jumpscale_weblibs"
            weblibs_path = j.clients.git.getContentPathFromURLorPath(url, pull=False)
            weblibs_location = website.locations.get().locations_static.new()
            weblibs_location.name = "weblibs"
            weblibs_location.path_url = "/weblibs"
            weblibs_location.path_location = f"{weblibs_path}/static"

            website.configure()

    def start(self):
        self.prepare()

    def stop(self):
        pass

    def uninstall(self):
        """
        Remove Dependencies
        """
        j.builders.runtimes.python3.pip_package_uninstall("filetype")
