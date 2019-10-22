from Jumpscale import j
import gevent
import os

DIR_SYNC_TIME = 3600 * 4


class Package(j.baseclasses.threebot_package):
    @property
    def bcdb(self):
        return self._package.threebot_server.bcdb_get("tf_directory")

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
        server = self.openresty
        server.install(reset=False)
        server.configure()

        website = server.get_from_port(443)

        locations = website.locations.get("cockpit_locations")

        website_location = locations.locations_spa.new()
        website_location.name = "cockpit"
        website_location.path_url = "/cockpit"
        website_location.use_jumpscale_weblibs = False
        fullpath = j.sal.fs.joinPaths(self.package_root, "frontend/")
        website_location.path_location = fullpath

        locations.configure()
        website.configure()

    def sync_directory(self):
        sync_dir = j.tools.codeloader.load(path=os.path.join(self.package_root, "jobs", "sync_directory.py"))
        job = j.servers.myjobs.schedule(sync_dir)
        try:
            job.wait()
        except Exception as e:
            j.errorhandler.exception_handle(e, die=False)

        gevent.spawn_later(DIR_SYNC_TIME, self.sync_directory)

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
