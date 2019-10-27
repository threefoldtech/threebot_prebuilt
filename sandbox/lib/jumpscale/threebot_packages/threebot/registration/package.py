from Jumpscale import j


class Package(j.baseclasses.threebot_package):
    """
    this is the base package for wikis it will only install the required configs
    ** Note **: you must load this package before loading any wikis
    """

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
        pass
