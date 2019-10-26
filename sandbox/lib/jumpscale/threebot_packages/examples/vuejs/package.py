from Jumpscale import j
import os


class Package(j.baseclasses.threebot_package):
    def _init(self, **kwargs):
        # CHANGE ME (default 1: development mode will serve at /location-example)
        os.environ["dev"] = "1"
        self.mylocation = "/vuejs"
        self.DEV = os.environ.get("dev")

    def add_test_data(self):
        model = self.bcdb.model_get(url="jumpscale.example.vuejs")
        test_persopn = model.new()
        test_persopn.myname = "hamada"
        test_persopn.job = "software engineer"
        test_persopn.aboutme = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        test_persopn.save()

    def prepare(self):
        """
        is called at install time
        :return:
        """
        prepare_cmd = f"""
        cd {self.package_root}
        pushd newproject
        export dev={self.DEV}
        npm install
        npm run build
        popd
        cp newproject/dist/* html/ -R
        """
        j.sal.process.execute(prepare_cmd)
        self.add_test_data()

    def start(self):
        """
        called when the 3bot starts
        :return:
        """
        server = self.openresty
        server.install(reset=False)
        server.configure()

        website = server.get_from_port(443)

        locations = website.locations.get(f"{self.mylocation}_locations")

        website_location = locations.locations_spa.new()
        website_location.name = self.mylocation
        if self.DEV == "1":
            website_location.path_url = self.mylocation
        else:
            website_location.path_url = "/"
        website_location.use_jumpscale_weblibs = False
        fullpath = j.sal.fs.joinPaths(self.package_root, "html/")
        website_location.path_location = fullpath

        locations.configure()
        website.configure()
