from Jumpscale import j
from os.path import dirname, abspath, join


class Package(j.baseclasses.threebot_package):
    def _init(self, **kwargs):
        if "branch" in kwargs.keys():
            self.branch = kwargs["branch"]
        else:
            self.branch = "*"

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

        server = j.servers.openresty.get("test")
        server.install(reset=False)
        server.configure()
        website = server.websites.get("pastebin")
        website.ssl = False
        website.port = 8082
        locations = website.locations.get("pastebin")

        website_location = locations.locations_static.new()
        website_location.name = "pastebin"
        website_location.path_url = "/"
        website_location.use_jumpscale_weblibs = True
        # import pdb; pdb.set_trace()
        fullpath = join(dirname(abspath(__file__)), "html/")
        print(fullpath)
        print(fullpath)
        website_location.path_location = fullpath
        # import pdb; pdb.set_trace()
        locations.configure()
        website.configure()
        self.gedis_server.actors_add(j.sal.fs.joinPaths(self.package_root, "actors"))
        server.start()

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
