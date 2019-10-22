import gevent
from gevent import monkey

monkey.patch_all(thread=False)
import logging

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
    node_model = bcdb.model_get(url="tfgrid.node.2")

    gedis = j.servers.gedis.get("test", port=9901)
    gedis.actors_add(os.path.join(path, "actors"))
    gevent.spawn(gedis.start)

    cl = j.clients.gedis.get("test", port=9901)
    try:
        logging.info("*** Test adding node ***")
        logging.info("Creates a new node, should succeed")
        node = node_model.new()
        node.node_id = "1000"
        node.location.county = "egypt"
        node.location.city = "cairo"
        node.os_version = "Ubuntu"
        node.farm_id = "10"
        node.total_resource.cru = 1
        node.total_resource.mru = 2
        node.total_resource.sru = 3
        node.total_resource.hru = 4

        node.reserved_resource.cru = 5
        node.reserved_resource.mru = 6
        node.reserved_resource.sru = 7
        node.reserved_resource.hru = 8

        node.used_resource.cru = 9
        node.used_resource.mru = 10
        node.used_resource.sru = 11
        node.used_resource.hru = 12
        result = cl.actors.nodes.add(node._ddict)

        logging.info("Get node info")
        node = cl.actors.nodes.get(result.node_id)
        assert node.node_id == "1000"
        assert node.total_resource.cru == 1
        assert node.total_resource.mru == 2
        assert node.total_resource.sru == 3
        assert node.total_resource.hru == 4

        assert node.reserved_resource.cru == 5
        assert node.reserved_resource.mru == 6
        assert node.reserved_resource.sru == 7
        assert node.reserved_resource.hru == 8

        assert node.used_resource.cru == 9
        assert node.used_resource.mru == 10
        assert node.used_resource.sru == 11
        assert node.used_resource.hru == 12
        node_model.destroy()

        logging.info("*** Test listing node ***")
        logging.info("Create two nodes")
        node_1 = node_model.new()
        node_1.node_id = "1001"
        node_1.location.country = "egypt"
        node_1.location.city = "cairo"
        node_1.os_version = "ubuntu"
        node_1.farm_id = "12"
        node_1.total_resource.cru = 5
        node_1.total_resource.mru = 10
        node_1.total_resource.sru = 15
        node_1.total_resource.hru = 20

        cl.actors.nodes.add(node_1._ddict)
        node_2 = node_model.new()
        node_2.node_id = "1002"
        node_2.location.country = "belgium"
        node_2.location.city = "ghent"
        node_2.farm_id = "11"
        node_2.os_version = "ubuntu"
        cl.actors.nodes.add(node_2._ddict)

        logging.info("List all nodes, should succeed")
        result = cl.actors.nodes.list()
        assert len(result.nodes) == 2

        logging.info("Filter by country, should succeed")
        result = cl.actors.nodes.list(country="egypt")
        assert result.nodes[0].location.country == "egypt"

        logging.info("Filter by total resource, should succeed")
        result = cl.actors.nodes.list(cru=5, mru=10, sru=15, hru=20)

        logging.info("Filter by city, should succeed")
        result = cl.actors.nodes.list(city="ghent")
        assert result.nodes[0].location.city == "ghent"
        node_model.destroy()

        logging.info("*** Test getting node ***")
        logging.info("Create new node")
        node = node_model.new()
        node.node_id = "1000"
        node.location.county = "egypt"
        node.location.city = "cairo"
        node.os_version = "Ubuntu"
        node.farm_id = "10"
        result = cl.actors.nodes.add(node._ddict)

        logging.info("Get node info, should succeed")
        node = cl.actors.nodes.get(result.node_id)
        assert node.node_id == "1000"
        node_model.destroy()

        logging.info("*** Test updating node total capacity ***")
        logging.info("Create new node")
        node = node_model.new()
        node.node_id = "1000"
        node.location.county = "egypt"
        node.location.city = "cairo"
        node.os_version = "Ubuntu"
        node.total_resource.cru = 1
        node.total_resource.mru = 2
        node.total_resource.sru = 3
        node.total_resource.hru = 4
        node.farm_id = "10"
        result = cl.actors.nodes.add(node._ddict)

        logging.info("Update node total_resources, should succeed")
        cl.actors.nodes.update_total_capacity(result.node_id, {"cru": 11, "mru": 22, "sru": 33, "hru": 44})
        node = cl.actors.nodes.get(result.node_id)
        assert node.total_resource.cru == 11
        assert node.total_resource.mru == 22
        assert node.total_resource.sru == 33
        assert node.total_resource.hru == 44
        node_model.destroy()

        logging.info("*** Test updating node reserved capacity ***")
        logging.info("Create new node")
        node = node_model.new()
        node.node_id = "1000"
        node.location.county = "egypt"
        node.location.city = "cairo"
        node.os_version = "Ubuntu"
        node.farm_id = "10"
        node.reserved_resource.cru = 1
        node.reserved_resource.mru = 2
        node.reserved_resource.sru = 3
        node.reserved_resource.hru = 4
        result = cl.actors.nodes.add(node._ddict)

        logging.info("Update node total_resources, should succeed")
        cl.actors.nodes.update_reserved_capacity(result.node_id, {"cru": 11, "mru": 22, "sru": 33, "hru": 44})
        node = cl.actors.nodes.get(result.node_id)
        assert node.reserved_resource.cru == 11
        assert node.reserved_resource.mru == 22
        assert node.reserved_resource.sru == 33
        assert node.reserved_resource.hru == 44
        node_model.destroy()

        logging.info("*** Test updating node used capacity ***")
        logging.info("Create new node")
        node = node_model.new()
        node.node_id = "1000"
        node.location.county = "egypt"
        node.location.city = "cairo"
        node.os_version = "Ubuntu"
        node.farm_id = "10"
        node.used_resource.cru = 1
        node.used_resource.mru = 2
        node.used_resource.sru = 3
        node.used_resource.hru = 4
        result = cl.actors.nodes.add(node._ddict)

        logging.info("Update node used_resources, should succeed")
        cl.actors.nodes.update_used_capacity(result.node_id, {"cru": 11, "mru": 22, "sru": 33, "hru": 44})
        node = cl.actors.nodes.get(result.node_id)
        assert node.used_resource.cru == 11
        assert node.used_resource.mru == 22
        assert node.used_resource.sru == 33
        assert node.used_resource.hru == 44
    finally:
        node_model.destroy()
