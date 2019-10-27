from Jumpscale import j


class Package(j.baseclasses.threebot_package):
    def _init(self, **kwargs):
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
        j.threebot.package.chat.install()
        self.gedis_server.actors_add(j.sal.fs.joinPaths(self.package_root, "actors"))
        self.gedis_server.chatbot.chatflows_load(j.sal.fs.joinPaths(self.package_root, "chatflows"))

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
