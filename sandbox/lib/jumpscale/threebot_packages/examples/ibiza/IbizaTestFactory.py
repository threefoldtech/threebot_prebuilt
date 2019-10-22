from Jumpscale import j


class IbizaTestFactory(j.baseclasses.object, j.baseclasses.testtools):

    __jslocation__ = "j.threebot.package.ibiza"

    def client_get(self):
        """
        j.threebot.package.ibiza.client_get()
        :return:
        """
        self.client = j.servers.threebot.local_start_default()

        self.client.actors.package_manager.package_add(
            "ibiza",
            git_url="https://github.com/threefoldtech/jumpscaleX_threebot/tree/master/ThreeBotPackages/examples/ibiza",
        )

        self.client.reload(namespace="ibiza")

        return self.client

    def test(self, name=""):
        """
        kosmos -p 'j.threebot.package.ibiza.test()'
        """

        self.client_get()

        # j.shell()

        # print(name)
        # self._test_run(name=name)

        self._log_info("All TESTS DONE")
        return "OK"
