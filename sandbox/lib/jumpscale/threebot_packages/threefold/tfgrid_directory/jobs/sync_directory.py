from Jumpscale import j


def sync_directory():
    from datetime import datetime

    old_format = "%a, %d %b %Y %H:%M:%S %Z"
    new_format = "%d/%m/%Y %H:%M"

    bcdb = j.data.bcdb.get("tf_directory")
    farm_model = bcdb.model_get(url="tfgrid.farm.1")
    node_model = bcdb.model_get(url="tfgrid.node.2")

    response = j.clients.threefold_directory.client.ListFarmers()[1]
    if response.status_code != 200:
        j.core.tools.log("Failed to list farmers: %s" % response.reason, level=40)
        return

    farms = response.json()

    for farm in farms:
        j.core.tools.log("Processing farm %s" % farm["name"], level=20)

        farmobjs = farm_model.find(name=farm["name"])
        if not farmobjs:
            farm_object = farm_model.new(farm).save()
        else:
            farm_object = farmobjs[0]

        nodes = j.clients.threefold_directory.client.ListCapacityGenerator(
            query_params={"farmer": farm["iyo_organization"], "proofs": True}
        )

        for node in nodes:
            j.core.tools.log("Processing node %s" % node["node_id"], level=20)

            node["farm_id"] = farm_object.id

            if "updated" in node:
                updated = datetime.strptime(node["updated"], old_format)
                node["updated"] = updated.strftime(new_format)
            if "created" in node:
                created = datetime.strptime(node["created"], old_format)
                node["created"] = created.strftime(new_format)

            for proof in node["proofs"]:
                created = datetime.strptime(proof["created"], old_format)
                proof["created"] = created.strftime(new_format)

            existing_nodes = node_model.find(node_id=node["node_id"])
            if existing_nodes:
                j.core.tools.log("Updating existing node %s" % node["node_id"], level=20)
                node_object = existing_nodes[0]
                node_model.set_dynamic(node, node_object.id)
            else:
                j.core.tools.log("Creating new node %s" % node["node_id"], level=20)
                node_object = node_model.new(node)
                node_object.save()


if __name__ == "__main__":
    sync_directory()
