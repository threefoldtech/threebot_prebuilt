from Jumpscale import j


class Package(j.baseclasses.threebot_package):
    def _init(self, *args, **kwargs):
        pass

    @property
    def bcdb(self):
        pass

    def prepare(self):
        """
        is called at install time
        :return:
        """
        pass

    def start(self):
        """
        called when the 3bot starts
        :return:
        """
        self.gedis_server.actors_add(path=self.package_root + "/actors")

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
        pass
