from Jumpscale import j


class CalendarFactory(j.baseclasses.threebot_factory):

    __jslocation__ = "j.threebot.package.calendar"

    def install(self):
        j.builders.runtimes.python3.pip_package_install("filetype")
        j.builders.runtimes.python3.pip_package_install("vobject")
        j.builders.runtimes.python3.pip_package_install("caldav")
        j.baseclasses.threebot_factory.install(self)
