from Jumpscale import j


class HelloWorldFactory(j.baseclasses.object, j.baseclasses.testtools):

    __jslocation__ = "j.threebot.package.helloworld"

    def start(self):
        """
        kosmos 'j.threebot.package.helloworld.start()'
        :return:
        """
        gedis_client = j.servers.threebot.local_start_default(web=True)
        gedis_client.actors.package_manager.package_add(path=self._dirpath)

    def test(self, name=""):
        """
        kosmos 'j.threebot.package.helloworld.test()'
        :return:
        """
        self.start()
        # TODO: create a test e.g. call the bottle server app with /hello
        pass
