from Jumpscale import j
import os


class WorkloadManagerFactory(j.baseclasses.object, j.baseclasses.testtools):

    __jslocation__ = "j.threebot.package.workloadmanager"

    def install(self):
        j.servers.zdb.default.start()
        server = j.servers.threebot.default
        server.save()

        package = j.tools.threebot_packages.get("workloadmanager", path=self._dirpath, threebot_server_name=server.name)
        package.prepare()
        package.save()
        self._log_info("workloadmanager is loaded")

        return "OK"

    def start(self):
        self.install()
        server = j.servers.threebot.default
        server.start(web=True, ssl=False, background=True)

    def test(self, name=""):
        """

        kosmos 'j.threebot.package.workloadmanager.test()'

        """
        basepath = os.path.dirname(os.path.dirname(__file__))
        self.client = j.servers.threebot.local_start_default()
        self.client.actors.package_manager.package_add("tf_workloads", os.path.join(basepath, "tfgrid_workloads"))
        self.client.actors.package_manager.package_add("threebot_phonebook", os.path.join(basepath, "phonebook"))

        self.client.reload()

        print(name)
        self._test_run(name=name)

        self._log_info("All TESTS DONE")
        return "OK"
