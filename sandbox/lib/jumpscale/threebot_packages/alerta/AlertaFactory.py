from Jumpscale import j


class AlertaFactory(j.baseclasses.object, j.baseclasses.testtools):

    __jslocation__ = "j.threebot.package.alerta"

    def install(self):
        server = j.servers.threebot.default
        server.save()

        package = j.tools.threebot_packages.get("alerta", path=self._dirpath, threebot_server_name=server.name)
        package.prepare()
        package.save()
        self._log_info("Alerta loaded")

        return "OK"

    def start(self):
        self.install()
        server = j.servers.threebot.default
        server.start(web=True, ssl=False)

    def test(self, name=""):
        pass
