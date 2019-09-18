from Jumpscale import j


class MyJobsDashboardFactory(j.baseclasses.object, j.baseclasses.testtools):

    __jslocation__ = "j.threebot.package.myjobs_dashboard"

    def install(self):
        server = j.servers.threebot.default
        server.save()

        package = j.tools.threebot_packages.get(
            "myjobs_dashboard", path=self._dirpath, threebot_server_name=server.name
        )
        package.prepare()
        package.save()
        self._log_info("MyJobs dashboard loaded")

        return "OK"

    def start(self):
        self.install()
        server = j.servers.threebot.default
        server.start(web=True, ssl=False)

    def test(self, name=""):
        pass
