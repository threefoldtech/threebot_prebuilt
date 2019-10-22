from Jumpscale import j


class ProvisioningFactory(j.baseclasses.object, j.baseclasses.testtools):

    __jslocation__ = "j.threebot.package.provisioning_bot"

    def install(self):
        """

        """

        server = j.servers.threebot.default
        server.save()

        package = j.tools.threebot_packages.get("provisioning", path=self._dirpath)
        package.prepare()
        package.save()
        self._log_info("provisioning package loaded")

        return "OK"

    def start(self, ssl=False):
        self.install()
        server = j.servers.threebot.default
        server.start(web=True, ssl=ssl)
