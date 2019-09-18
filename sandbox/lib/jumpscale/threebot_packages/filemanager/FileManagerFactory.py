from Jumpscale import j


class FileManagerFactory(j.baseclasses.object, j.baseclasses.testtools):

    __jslocation__ = "j.threebot.package.filemanager"

    def install(self):
        server = j.servers.threebot.default
        server.save()

        package = j.tools.threebot_packages.get("filemanager", path=self._dirpath, threebot_server_name=server.name)
        package.prepare()
        package.save()
        self._log_info("Filemanager loaded")

        return "OK"

    def start(self):
        self.install()
        server = j.servers.threebot.default
        server.start(web=True, ssl=False)

    def test(self, name=""):
        self.client = j.servers.threebot.local_start_default()

        if not j.tools.threebot_packages.exists("threebot_filemanager"):
            self.client.actors.package_manager.package_add(
                "threebot_filemanager",
                git_url="https://github.com/threefoldtech/jumpscaleX_threebot/tree/master/ThreeBotPackages/filemanager",
            )
        self.client.reload()
        print(name)
        self._test_run(name=name)

        self._log_info("All TESTS DONE")
        return "OK"
