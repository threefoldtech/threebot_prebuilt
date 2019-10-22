from Jumpscale import j


class Package(j.baseclasses.threebot_package):
    @property
    def bcdb(self):
        return j.data.bcdb.system

    def prepare(self):
        """
        is called at install time
        :return:
        """
        self.bcdb.models_add(path=self.package_root + "/models")
        self.gedis_server.actors_add(self.package_root + "/actors")

    def start(self):
        """
        called when the 3bot starts
        :return:
        """
        pass

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
