from Jumpscale import j


class WikisFactory(j.baseclasses.object, j.baseclasses.testtools):

    __jslocation__ = "j.threebot.package.wikis"

    def install(self):
        """

        """

        server = j.servers.threebot.default
        server.save()

        package = j.tools.threebot_packages.get("wiki", path=self._dirpath, threebot_server_name=server.name)
        package.prepare()
        package.save()
        self._log_info("wiki loaded")

        return "OK"

    def start(self, ssl=False):
        self.install()
        server = j.servers.threebot.default
        server.start(web=True, ssl=ssl)
