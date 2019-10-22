from Jumpscale import j


class NameServiceFactory(j.baseclasses.object, j.baseclasses.testtools):

    __jslocation__ = "j.threebot.package.namemanager"

    def install(self):
        server = j.servers.threebot.default
        server.save()

        package = j.tools.threebot_packages.get("namemanager", path=self._dirpath, threebot_server_name=server.name)
        package.prepare()
        package.save()
        return "OK"

    def start(self):
        self.install()
        server = j.servers.threebot.default
        server.start(web=False, ssl=False, background=True)
