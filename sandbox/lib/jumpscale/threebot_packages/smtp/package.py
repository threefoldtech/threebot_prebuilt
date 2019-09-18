import sys
import os

from Jumpscale import j


class Package(j.baseclasses.threebot_package):
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
        # TODO: ADD REVERSE PROXY

        # Couldn't import file app.py directly!
        from smtp.app import MailServer

        rack = j.servers.rack.get()
        server = MailServer(("0.0.0.0", 7002))
        rack.add(name="smtp", server=server)

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
