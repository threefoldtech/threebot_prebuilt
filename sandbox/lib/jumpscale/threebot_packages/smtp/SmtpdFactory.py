from Jumpscale import j

JSConfigs = j.application.JSBaseConfigsClass


class SmtpdFactory(JSConfigs):

    __jslocation__ = "j.threebot.package.smtp"

    def test(self, name=""):
        self.client = j.servers.threebot.local_start_default()

        if not j.tools.threebot_packages.exists("threebot_smtp"):
            self.client.actors.package_manager.package_add(
                "threebot_smtp",
                git_url="https://github.com/threefoldtech/jumpscaleX_threebot/tree/master/ThreeBotPackages/smtp",
            )
        self.client.reload()
        print(name)
        self._test_run(name=name)
        self._log_info("All TESTS DONE")
        return "OK"
