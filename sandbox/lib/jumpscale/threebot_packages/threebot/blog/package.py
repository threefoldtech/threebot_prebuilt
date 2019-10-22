from Jumpscale import j

__version__ = "0.0.1"


class Package(j.baseclasses.threebot_package):
    def _init(self, **kwargs):
        self.branch = kwargs["package"].branch or "master"

    def start(self):
        """
        called when the 3bot starts
        :return:
        """
        j.builders.runtimes.nodejs.install()

        server = self.openresty
        server.install(reset=False)
        server.configure()

        website = server.get_from_port(443)

        locations = website.locations.get("blogs_locations")

        proxy_location = locations.locations_proxy.new()
        proxy_location.name = "nodeapp"
        proxy_location.path_url = f"/blog"
        proxy_location.path_dest = f"/blog"

        proxy_location.ipaddr_dest = "0.0.0.0"
        proxy_location.port_dest = 3000
        proxy_location.scheme = "http"

        locations.configure()
        website.configure()
        self._start_blog_app()

    def _start_blog_app(self, reset=True):

        s = j.servers.startupcmd.get("blogs")
        s.cmd_start = f"""
        cd {self._dirpath}/sapper-blog
        export DEV=0
        npm install
        npm run build
        node __sapper__/build
        """
        s.executor = "tmux"
        s.interpreter = "bash"
        s.timeout = 10
        s.ports = [3000]

        s.start(reset=reset)
