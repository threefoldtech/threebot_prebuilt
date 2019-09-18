from gevent import monkey

monkey.patch_all(thread=False)
import logging
import gevent
import os
from Jumpscale import j


def main(self):
    try:
        bcdb = j.data.bcdb.get("tf_directory")
    except:
        bcdb = j.data.bcdb.new("tf_directory")

    path = os.path.dirname(os.path.dirname(__file__))
    bcdb.models_add(os.path.join(path, "models"))
    bcdb = j.data.bcdb.get("tf_directory")
    model = bcdb.model_get(url="tfgrid.farm.1")

    gedis = j.servers.gedis.get("test", port=9901)
    gedis.actors_add(os.path.join(path, "actors"))
    gevent.spawn(gedis.start)

    cl = j.clients.gedis.get("test", port=9901)
    try:
        logging.info("Create two farms")
        farm_1 = model.new()
        farm_1.name = "farm1"
        farm_1.location.country = "egypt"
        farm_1.location.city = "cairo"
        farm_1.threebot_id = "1234567"
        farm_1.email = "farm1@test.com"
        farm_1.wallet_addresses = ["123456789"]
        result = cl.actors.farms.register(farm_1._ddict)
        farm_1_id = result.farm_id

        farm_2 = model.new()
        farm_2.name = "farm2"
        farm_2.threebot_id = "7654321"
        farm_2.email = "farm2@test.com"
        farm_2.wallet_addresses = ["987654321"]
        farm_2.location.country = "belgium"
        farm_2.location.city = "ghent"
        result = cl.actors.farms.register(farm_2._ddict)
        farm_2_id = result.farm_id

        logging.info("Get farm info, should succeed")
        farm = cl.actors.farms.get(farm_1_id)
        assert farm.name == "farm1"

        logging.info("List all farms, should succeed")
        result = cl.actors.farms.list()
        assert len(result.farms) == 2

        logging.info("Filter by country, should succeed")
        result = cl.actors.farms.list(country="egypt")
        assert result.farms
        assert result.farms[0].location.country == "egypt"

        logging.info("Filter by city, should succeed")
        result = cl.actors.farms.list(city="ghent")
        assert result.farms
        assert result.farms[0].location.city == "ghent"

        logging.info("Update farm info, should succeed")
        farm_2.location.city = "brussels"
        cl.actors.farms.update(farm_2_id, farm_2._ddict)
        farm = cl.actors.farms.get(farm_2_id)
        assert farm_2.location.city == "brussels"

        print("OK")

    finally:
        model.destroy()


if __name__ == "__main__":
    main()
