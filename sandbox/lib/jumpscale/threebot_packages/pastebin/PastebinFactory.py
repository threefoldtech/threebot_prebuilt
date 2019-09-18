from Jumpscale import j


class PastebinDashboardFactory(j.baseclasses.object, j.baseclasses.testtools):

    __jslocation__ = "j.threebot.package.pastebin"

    def install(self):
        server = j.servers.threebot.default
        server.save()

        package = j.tools.threebot_packages.get("pastebin", path=self._dirpath, threebot_server_name=server.name)
        package.prepare()
        package.save()
        self._log_info("pastebin loaded")

        return "OK"

    def start(self):
        self.install()
        server = j.servers.threebot.default
        server.start(web=True, ssl=False)

    def test(self, name=""):
        pass
