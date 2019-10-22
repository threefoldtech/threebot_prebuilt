from Jumpscale import j


class TFTokenFactory(j.baseclasses.threebot_factory):
    __jslocation__ = "j.threebot.package.token"
    _web = False

    def start(self):
        gedis_client = j.servers.threebot.local_start_default(web=True)
        gedis_client.actors.package_manager.package_add(path=self._dirpath)

    def client_get(self):
        """
        j.threebot.package.token.client_get()
        :return:
        """
        j.servers.threebot.local_start_default(web=True)
        self.client = j.servers.threebot.current.client
        self.client.actors.package_manager.package_add(
            git_url="https://github.com/threefoldtech/jumpscaleX_threebot/tree/master/ThreeBotPackages/threefold/tfgrid_token"
        )
        self.client.reload()
        """ self.client.reload(namespace="token") """

        return self.client

    def test(self, name=""):
        """
        kosmos 'j.threebot.package.token.test()'
        """

        self.start()

        if "tf_grid_token" in [b.name for b in j.data.bcdb.instances]:
            m = j.data.bcdb.get("tf_grid_token")
        else:
            m = j.data.bcdb.new("tf_grid_token")
        m.models_add(path=self._dirpath + "/models")

        gedis_cli = self.client_get()

        # fetch the news
        r = gedis_cli.actors.news.list()

        # j.shell()

        cl = j.clients.redis.get(port=8901)
        assert cl.execute_command("PING")
        assert gedis_cli.actors.token.delete_all()

        gedis_cli.actors.token.feed_dummy_data_prices("year", 2019, 10, 1, 0.06)

        res = gedis_cli.actors.token.list()
        assert len(res.prices) == 5

        res = gedis_cli.actors.token.get_market()
        print("****************************get_market*********res****:%s" % res)
        assert res.max_supply == 100000000000
        assert res.potential_revenue_per_token_usd > 0

        res = gedis_cli.actors.token.get_capacity()
        print("****************************get_capacity*********res****:%s" % res)
        assert res.compute_units > 19000
        assert res.cores > 0

        res = gedis_cli.actors.token.find_prices("year")
        assert len(res) == 5

        res = gedis_cli.actors.token.find_prices("year", from_date="2018/02/02")
        assert len(res) == 0
        res = gedis_cli.actors.token.find_prices("year", from_date="2018/01/01")
        assert len(res) == 1
        res = gedis_cli.actors.token.find_prices("year", from_date="2016/02/02", to_date="2018/05/05")
        assert len(res) == 2

        print("****************************find*********res****:%s" % res)
        gedis_cli.actors.token.feed_dummy_data_prices("month", 2019, 10, 1, 0.06)
        assert len(gedis_cli.actors.token.find_prices("month")) == 12
        gedis_cli.actors.token.feed_dummy_data_prices("day", 2019, 10, 1, 0.06)
        assert len(gedis_cli.actors.token.find_prices("day")) == 31
        gedis_cli.actors.token.feed_dummy_data_prices("hour", 2019, 10, 1, 0.06)
        assert len(gedis_cli.actors.token.find_prices("hour")) == 24

        res = gedis_cli.actors.token.find_prices("hour", from_date="2019/10/01 01:55", to_date="2019/10/01 05:42")
        assert len(res) == 4
        self._log_info("All TESTS DONE")
        return "OK"
