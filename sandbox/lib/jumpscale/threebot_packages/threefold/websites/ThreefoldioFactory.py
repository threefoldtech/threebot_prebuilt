from Jumpscale import j


class WebsitesFactory(j.baseclasses.object, j.baseclasses.testtools):

    __jslocation__ = "j.threebot.package.threefold_io"

    def install(self, branch="development"):
        """
        install website packages
        """
        self.server = j.servers.threebot.get("threefold.io")

        # threefold.io
        threefold_io_package = j.tools.threebot_packages.get(
            "threefold.io",
            branch=branch,
            giturl=f"https://github.com/threefoldfoundation/www_threefold.io_new/tree/{branch}/package",
            threebot_server_name=self.server.name,
        )
        threefold_io_package.prepare()
        threefold_io_package.save()

    def start(self, ssl=True, branch="development"):
        self.install(branch=branch)
        self.server.start(web=True, ssl=ssl)
