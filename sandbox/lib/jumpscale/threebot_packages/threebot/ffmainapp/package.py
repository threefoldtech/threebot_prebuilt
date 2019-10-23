from Jumpscale import j


class Package(j.baseclasses.threebot_package):
    def start(self):
        for pkg in ["interface", "contacts", "appstore", "mail"]:
            package = j.tools.threebot_packages.get(
                pkg,
                path="/sandbox/code/github/threefoldtech/jumpscaleX_threebot/ThreeBotPackages/threebot/{}/".format(pkg),
            )
            package.prepare()
            package.save()
            package.start()

    def _init(self, **kwargs):
        if "branch" in kwargs.keys():
            self.branch = kwargs["branch"]
        else:
            self.branch = "master"

    def stop(self):
        """
        called when the 3bot stops
        :return:
        """
        pass

    def uninstall(self):
        """
        called when the package is no longer needed and will be removed from the threebot
        :return:
        """
        # TODO: clean up bcdb ?
        pass
