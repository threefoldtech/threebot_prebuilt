from Jumpscale import j


class TFDirectoryFactory(j.baseclasses.factory_testtools):

    __jslocation__ = "j.threebot.package.directory"

    def test(self, name=""):
        """
        test the directory
        """
        self.client = j.servers.threebot.local_start_default()

        # TODO: check the actor is already loaded if not do following:

        self.client.actors.package_manager.package_add(
            "threebot_phonebook",
            git_url="https://github.com/threefoldtech/jumpscaleX_threebot/tree/master/ThreeBotPackages/threefold/tfgrid_directory",
        )

        self.client.reload()

        print(name)
        self._test_run(name=name)

        self._log_info("All TESTS DONE")
        return "OK"
