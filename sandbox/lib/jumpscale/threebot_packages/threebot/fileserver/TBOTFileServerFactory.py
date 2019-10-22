from Jumpscale import j


class TBOTFileServerFactory(j.baseclasses.object, j.baseclasses.testtools):

    __jslocation__ = "j.threebot.package.fileserver"

    def install(self):
        server = j.servers.threebot.default
        server.save()

        package = j.tools.threebot_packages.get("fileserver", path=self._dirpath, threebot_server_name=server.name)
        package.prepare()
        package.save()
        self._log_info("fileserver loaded")

        return "OK"

    def start(self, background=False, web=True, ssl=False):
        self.install()
        server = j.servers.threebot.default
        server.web = web
        server.ssl = ssl
        server.start(web=True, ssl=False)

    """ def start_webdav(self, background=False, web=True, ssl=False):
        self.install()
        server = j.servers.threebot.default
        server.web = web
        server.ssl = ssl
        server.start(background=background)

    def start_ui(self):
        self.install()
        server = j.servers.threebot.default
        server.start(web=True, ssl=False) """

    def test(self, name=""):
        """
        kosmos -p 'j.threebot.package.fileserver.test()'

        """

        self.client = j.servers.threebot.local_start_default()

        # TODO: check the actor is already loaded if not do following:

        self.client.actors.package_manager.package_add(
            "threebot_phonebook",
            git_url="https://github.com/threefoldtech/jumpscaleX_threebot/tree/master/ThreeBotPackages/threebot/fileserver",
        )

        self.client.reload()

        print(name)
        self._test_run(name=name)
        self._log_info("All TESTS DONE")
        return "OK"
