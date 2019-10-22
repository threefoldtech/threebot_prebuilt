from unittest import TestCase

from Jumpscale import j
from loguru import logger
import requests


LOGGER = logger
LOGGER.add("Wikis_{time}.log")


class Wiki(TestCase):
    @staticmethod
    def info(message):
        LOGGER.info(message)

    @classmethod
    def setUpClass(cls):
        cls.gedis = j.servers.threebot.local_start_default()

    @classmethod
    def tearDownClass(cls):
        j.servers.threebot.default.stop()

    def test001_check_threebot_ports(self):
        """
        Test case for checking threebot ports.

        **Test scenario**
        #. Check gedis port, should be found.
        #. Check zdb port, should be found.
        #. Check sonic port, should be found.
        """
        self.info("Check gedis port, should be found.")
        self.assertTrue(j.sal.nettools.tcpPortConnectionTest("localhost", 8901), "Gedis is not started.")

        self.info("Check zdb port, should be found.")
        self.assertTrue(j.sal.nettools.tcpPortConnectionTest("localhost", 9900), "zdb is not started.")

        self.info("Check sonic port, should be found.")
        self.assertTrue(j.sal.nettools.tcpPortConnectionTest("localhost", 1491), "sonic is not started.")

    def test002_check_gedis_is_started(self):
        """
        Test case for checking that gedis is started.

        **Test scenario**
        #. Ping gedis server, should return True.
        """
        self.info("Ping gedis server, should return True.")
        self.assertTrue(self.gedis.ping())

    def test003_check_zdb_is_started(self):
        """
        Test case for checking that zdb is started.

        **Test scenario**
        #. Check that zdb process is started.
        #. Get zdb client and check zdb is started using ping.
        """
        self.info("Check that zdb process is started.")
        self.assertTrue(j.sal.process.checkProcessRunning("zdb"))

        self.info("Get zdb client and check zdb is started using ping.")
        cl = j.clients.zdb.client_admin_get("test")
        self.assertTrue(cl.ping())

    def test004_check_sonic_is_started(self):
        """
        Test case for checking that sonic is started.

        **Test scenario**
        #. Check that sonic process is started.
        """
        self.info("Check that sonic process is started.")
        self.assertTrue(j.sal.process.checkProcessRunning("sonic"))

    def test005_check_package_manager_actor_is_loaded(self):
        """
        Test case for checking that package manager actor is loaded.

        **Test scenario**
        #. Get gedis actors.
        #. Check that package manager is one of gedis actors.
        """
        self.info("Get gedis actors.")
        actors = self.gedis.actors

        self.info("Check that package manager is one of gedis actors.")
        self.assertIn("package_manager", dir(actors))

    def test006_check_web_interfaces_is_loaded(self):
        """
        Test case for checking web interfaces is loaded.
        """
        self.info("Running bottle web server test")
        j.servers.bottle_web.test()

    def test007_check_wiki_is_loaded(self):
        """
        Test case for checking wiki is loaded.

        **Test scenario**
        #. Check that wiki actor is loaded.
        #. Add test wiki using markdowndocs tool.
        #. Check that test wiki is loaded using bcdbfs.
        #. Remove the added test wiki using bcdbfs.
        #. Check that test wiki is removed.
        """
        self.info("Check that wiki actor is loaded.")
        actors = self.gedis.actors
        self.assertIn("content_wiki", dir(actors))

        self.info("Add test wiki using markdowndocs tool.")
        url = "https://github.com/threefoldtech/jumpscaleX_threebot/tree/development/docs/wikis/examples/docs"
        docsite = j.tools.markdowndocs.load(url, name="test_example")
        docsite.write()

        self.info("Check that test wiki is loaded using bcdbfs.")
        dirs = j.sal.bcdbfs.list_dirs("/docsites")
        self.assertIn("/docsites/test_example", dirs)

        self.info("Remove the added test wiki using bcdbfs.")
        j.sal.bcdbfs.dir_remove("/docsites/test_example")

        self.info("Check that test wiki is removed.")
        dirs = j.sal.bcdbfs.list_dirs("/docsites")
        self.assertNotIn("/docsites/test_example", dirs)

    def test008_wiki_is_loaded(self):
        """
        Test case for checking wikis.

        **Test scenario**
        #. Load test wikis using markdowndocs.
        #. Check the wikis is loaded, should be found.
        #. Remove the added test wiki.
        #. Check the added wiki, should not be found.
        """
        self.info("Load test wikis using markdowndocs.")
        url = "https://github.com/threefoldtech/jumpscaleX_threebot/tree/development/docs/wikis/examples/docs"
        docsite = j.tools.markdowndocs.load(url, name="test_example")
        docsite.write()

        self.info("Check the wikis is loaded, should be found.")
        r = requests.get("https://127.0.0.1/web/bcdbfs/docsites/test_example/test_include.md", verify=False)
        self.assertEqual(r.status_code, 200)

        self.info("Remove the added test wiki.")
        j.sal.bcdbfs.dir_remove("/docsites/test_example")

        self.info("Check the added wiki, should not be found.")
        r = requests.get("https://127.0.0.1/web/bcdbfs/docsites/test_example/test_include.md", verify=False)
        self.assertEqual(r.status_code, 404)
