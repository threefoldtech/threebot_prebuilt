from Jumpscale import j


class nodes(j.baseclasses.threebot_actor):
    def _init(self, **kwargs):

        bcdb = j.data.bcdb.get("tf_directory")
        self.node_model = bcdb.model_get(url="tfgrid.node.2")
        self.farm_model = bcdb.model_get(url="tfgrid.farm.1")

    def _find(self, node_id):
        nodes = self.node_model.find(node_id=node_id)
        if len(nodes) <= 0:
            return None
        return nodes[0]

    def add(self, node, schema_out):
        """
        ```in
        node = (O) !tfgrid.node.2
        ```

        ```out
        node = (O) !tfgrid.node.2
        ```

        """
        # TODO check the sender is actually the node itself
        validation_errors = []
        if not node.node_id:
            validation_errors.append("node_id")
        if not node.os_version:
            validation_errors.append("os_version")
        if not node.farmer_id:
            validation_errors.append("farmer_id")
        if not node.location:
            validation_errors.append("location")
        if validation_errors:
            raise Exception("Can not create node without {}".format(" or ".join(validation_errors)))
        old_node = self._find(node.node_id)
        if old_node:
            return self.node_model.set_dynamic(node._ddict, obj_id=old_node.id)
        return self.node_model.new(data=node).save()

    def list(self, farmer_id, country, city, cru, sru, mru, hru, schema_out):
        """
        ```in
        farmer_id = (S)
        country = (S)
        city = (S)
        cru = -1 (I)
        mru = -1 (I)
        sru = -1 (I)
        hru = -1 (I)
        ```

        ```out
        nodes = (LO) !tfgrid.node.2
        ```
        """

        output = schema_out.new()
        for node in self.node_model.iterate():
            if farmer_id and farmer_id != node.farmer_id:
                continue
            if country != "" and node.location.country != country:
                continue
            if city != "" and node.location.city != city:
                continue
            if cru > -1 and node.total_resource.cru < cru:
                continue
            if mru > -1 and node.total_resource.mru < mru:
                continue
            if sru > -1 and node.total_resource.sru < sru:
                continue
            if hru > -1 and node.total_resource.hru < hru:
                continue
            output.nodes.append(node)

        return output

    def get(self, node_id, schema_out):
        """
        ```in
        node_id = (S)
        ```

        ```out
        node = (O) !tfgrid.node.2
        ```
        """
        return self._find(node_id)

    def update_total_capacity(self, node_id, resource):
        """
        ```in
        node_id = (S)
        resource = (O) !tfgrid.node.resource.amount.1
        ```

        """
        node = self._find(node_id)
        if not node:
            raise j.exceptions.NotFound("node %s not found" % id)
        node.total_resource.mru = resource.mru
        node.total_resource.cru = resource.cru
        node.total_resource.hru = resource.hru
        node.total_resource.sru = resource.sru
        node.save()
        return True

    def update_reserved_capacity(self, node_id, resource):
        """
        ```in
        node_id = (S)
        resource = (O) !tfgrid.node.resource.amount.1
        ```
        """
        node = self._find(node_id)
        if not node:
            raise j.exceptions.NotFound("node %s not found" % id)
        node.reserved_resource.mru = resource.mru
        node.reserved_resource.cru = resource.cru
        node.reserved_resource.hru = resource.hru
        node.reserved_resource.sru = resource.sru

        node.save()
        return True

    def update_used_capacity(self, node_id, resource):
        """
        ```in
        node_id = (S)
        resource = (O) !tfgrid.node.resource.amount.1
        ```
        """

        node = self._find(node_id)
        if not node:
            raise j.exceptions.NotFound("node %s not found" % id)
        node.used_resource.mru = resource.mru
        node.used_resource.cru = resource.cru
        node.used_resource.hru = resource.hru
        node.used_resource.sru = resource.sru
        node.save()
        return True
