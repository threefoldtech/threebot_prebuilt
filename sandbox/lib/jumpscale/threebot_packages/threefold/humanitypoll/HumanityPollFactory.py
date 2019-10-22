from Jumpscale import j


class HumanityPollFactory(j.baseclasses.threebot_factory):

    __jslocation__ = "j.threebot.package.humanitypoll"

    def client_get(self):
        """
        j.threebot.package.humanitypoll.client_get()
        :return:
        """
        self.client = j.servers.threebot.local_start_default(web=True)

        return self.client

    def test(self, name=""):
        """
        kosmos -p 'j.threebot.package.humanitypoll.test()'
        """
        cl = self.client_get()
        # j.shell()

        print(name)

        return "OK"
