from Jumpscale import j


class Package(j.baseclasses.threebot_package):
    def _init(self, **kwargs):
        self.db = self._package.threebot_server.bcdb_get("tft_explorer")

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

        self.db.models_add(path=self.package_root + "/models")
        self.gedis_server.actors_add(j.sal.fs.joinPaths(self.package_root, "actors"))

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
