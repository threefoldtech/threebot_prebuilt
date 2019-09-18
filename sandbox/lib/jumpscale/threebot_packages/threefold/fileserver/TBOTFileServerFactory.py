from Jumpscale import j


class TBOTFileServerFactory(j.baseclasses.object, j.baseclasses.testtools):

    __jslocation__ = "j.threebot.package.fileserver"

    def test(self, name=""):
        """

        """

        self.client = j.servers.threebot.local_start_default()

        # TODO: check the actor is already loaded if not do following:

        self.client.actors.package_manager.package_add(
            "threebot_phonebook",
            git_url="https://github.com/threefoldtech/jumpscaleX_threebot/tree/master/ThreeBotPackages/threefold/fileserver",
        )

        self.client.reload()

        print(name)
        self._test_run(name=name)

        self._log_info("All TESTS DONE")
        return "OK"
