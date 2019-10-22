from Jumpscale import j
import os


class WorkloadManagerFactory(j.baseclasses.threebot_factory, j.baseclasses.testtools):

    __jslocation__ = "j.threebot.package.workloadmanager"

    def start(self):
        gedis_client = j.servers.threebot.local_start_default(web=True)
        gedis_client.actors.package_manager.package_add(path=self._dirpath)

    def test(self, name=""):
        """

        kosmos 'j.threebot.package.workloadmanager.test()'

        """
        basepath = os.path.dirname(os.path.dirname(__file__))
        self.client = j.servers.threebot.local_start_default()
        self.client.actors.package_manager.package_add(path=os.path.join(basepath, "tfgrid_workloads"))
        self.client.actors.package_manager.package_add(path=os.path.join(basepath, "phonebook"))

        self.client.reload()

        print(name)
        self._test_run(name=name)

        self._log_info("All TESTS DONE")
        return "OK"
