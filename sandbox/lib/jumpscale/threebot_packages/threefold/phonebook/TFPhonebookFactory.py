from Jumpscale import j


class TFPhonebookFactory(j.baseclasses.threebot_factory):

    __jslocation__ = "j.threebot.package.phonebook"

    def client_get(self):
        """
        j.threebot.package.phonebook.client_get()
        :return:
        """
        self.client = j.servers.threebot.local_start_default(web=True)

        return self.client

    def test(self, name=""):
        """
        kosmos -p 'j.threebot.package.phonebook.test()'
        """
        cl = self.client_get()

        print(name)

        return "OK"
