from Jumpscale import j


class InterfaceFactory(j.baseclasses.object, j.baseclasses.testtools):

    __jslocation__ = "j.threebot.package.ffbrowser"

    def install(self):
        server = j.servers.threebot.default
        server.save()

        package = j.tools.threebot_packages.get("ffbrowser", path=self._dirpath, threebot_server_name=server.name)
        package.prepare()
        package.save()
        return "OK"

    def start(self):
        self.install()

    def test(self, name=""):
        pass
