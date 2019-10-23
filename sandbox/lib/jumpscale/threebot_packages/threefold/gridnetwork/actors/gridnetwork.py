from Jumpscale import j
import netaddr


class gridnetwork(j.baseclasses.threebot_actor):
    def _init(self, **kwargs):
        bcdb = j.data.bcdb.system
        self.networkmodel = bcdb.model_get(url="tfgrid.network.network.1")
        self.endpointmodel = bcdb.model_get(url="tfgrid.network.endpoint.1")

    def network_add(self, name, subnet, schema_out=None, user_session=None):
        """"
        ```in
        name = (S)
        subnet = (S)
        ```
        ```out
        res = (B)
        ```
        """
        network = self.networkmodel.new(name=name, subnet=subnet)
        network.save()
        out = schema_out.new()
        out.res = True
        return out

    def network_endpoint_add(self, networkname, sshclient_name, schema_out=None, user_session=None):
        """"
        ```in
        networkname = (S)
        sshclient_name = (S)
        ```
        ```out
        res = (B)
        ```
        """
        network = self._network_get(networkname)
        newip = self._get_free_ip(network)
        wg = j.tools.wireguard.new(name=f"{networkname}-{sshclient_name}", save=False)
        sshclient = j.clients.ssh.get(sshclient_name, needexist=True)
        wg.sshclient_name = sshclient_name
        wg.install()
        wg.network_private = newip
        wg.network_public = sshclient.addr
        wg.save()
        try:
            wg.configure()
        except:
            wg.delete()
            raise
        network.members.append(wg.wid)
        network.save()
        out = schema_out.new()
        out.res = True
        return out

    def network_endpoint_delete(self, networkname, sshclient_name, schema_out=None, user_session=None):
        """"
        ```in
        networkname = (S)
        sshclient_name = (S)
        ```
        ```out
        res = (B)
        ```
        """
        network = self._network_get(networkname)
        wg = j.tools.wireguard.get(name=f"{networkname}-{sshclient_name}", needexist=True)
        wid = wg.wid
        wg.delete()
        if wid in network.members:
            network.members.remove(wid)
            network.save()
        out = schema_out.new()
        out.res = True
        return out

    def network_endpoint_find(self, networkname, schema_out=None, user_session=None):
        """"
        ```in
        networkname = (S)
        ```
        ```out
        res = (LO) !tfgrid.network.endpoint.1
        ```
        """
        out = schema_out.new()
        network = self._network_get(networkname)

        endpoints = []
        for memberid in network.members:
            try:
                member = j.tools.wireguard.get_by_id(memberid)
            except:
                continue
            if member.network_public:
                endpoints.append(member)

        for endpoint in endpoints:
            returnpoint = out.res.new()
            returnpoint.network_public = endpoint.network_public
            returnpoint.network_private = endpoint.network_private
            returnpoint.key_public = endpoint.key_public
            returnpoint.port = endpoint.port

        return out

    def network_find(self, name, schema_out=None, user_session=None):
        """"
        ```in
        name = (S)
        ```
        ```out
        res = (LO) !tfgrid.network.networkresult.1
        ```
        """
        out = schema_out.new()
        query = {}
        if name:
            query["name"] = name
        for network in self.networkmodel.find(**query):
            newnet = out.res.new()
            newnet.name = network.name
            newnet.subnet = network.subnet
        return out

    def _network_get(self, networkname):
        networks = self.networkmodel.find(name=networkname)
        if len(networks) != 1:
            raise j.exceptions.NotFound(f"Could not find exactly 1 network with name {networkname}")
        return networks[0]

    def _get_free_ip(self, network):
        subnet = netaddr.IPNetwork(network.subnet)
        usedips = []
        for memberid in network.members:
            try:
                member = j.tools.wireguard.get_by_id(memberid)
            except:
                continue
            usedips.append(netaddr.IPNetwork(member.network_private).ip)

        newip = netaddr.IPAddress(subnet.first + 1)
        while newip in usedips:
            newip += 1

        # sentinal against broadcast IPAddress
        if newip + 1 not in subnet:
            raise j.exceptions.Runtime("No free IPAdress inside network")
        return f"{newip}/{subnet.prefixlen}"

    def network_peer_add(self, networkname, peername, publickey, schema_out=None, user_session=None):
        """
        ```in
        networkname = (S)
        peername = (S)
        publickey = (S)
        ```
        ```out
        network_private = (S)
        endpoints = (LO) !tfgrid.network.endpoint.1
        ```
        """
        usedips = []
        network = self._network_get(networkname)

        subnet = netaddr.IPNetwork(network.subnet)
        endpoints = []
        for memberid in network.members[:]:
            try:
                member = j.tools.wireguard.get_by_id(memberid)
            except:
                network.members.remove(memberid)
                continue

            if member.network_public:
                endpoints.append(member)
            usedips.append(netaddr.IPNetwork(member.network_private).ip)

        newip = netaddr.IPAddress(subnet.first + 1)
        while newip in usedips:
            newip += 1
        # sentinal against broadcast IPAddress
        if newip + 1 not in subnet:
            raise j.exceptions.Runtime("No free IPAdress inside network")

        out = schema_out.new()
        out.network_private = f"{newip}/{subnet.prefixlen}"

        peer = j.tools.wireguard.get(name=f"{networkname}-{peername}")
        peer.key_public = publickey
        peer.network_private = out.network_private
        peer.save()

        network.members.append(peer.wid)
        network.save()

        for endpoint in endpoints:
            returnpoint = out.endpoints.new()
            returnpoint.network_public = endpoint.network_public
            returnpoint.network_private = endpoint.network_private
            returnpoint.key_public = endpoint.key_public
            returnpoint.port = endpoint.port

            endpoint.peer_add(peer)
            endpoint.configure()

        return out

    def network_peer_remove(self, networkname, peername, schema_out=None, user_session=None):
        """
        ```in
        networkname = (S)
        peername = (S)
        ```
        ```out
        res = (B)
        ```
        """
        fullname = f"{networkname}-{peername}"
        network = self._network_get(networkname)
        endpoints = []
        neededmember = None
        for memberid in network.members[:]:
            try:
                member = j.tools.wireguard.get_by_id(memberid)
            except:
                network.members.remove(memberid)
                continue
            if member.network_public:
                endpoints.append(member)
            if member.name == fullname:
                neededmember = member
        if not neededmember:
            raise j.exceptions.NotFound(f"Could not find peer {peername} inside network {networkname}")
        network.members.remove(neededmember.wid)
        network.save()
        for endpoint in endpoints:
            endpoint.peer_remove(neededmember)
            endpoint.configure()

        neededmember.delete()
        out = schema_out.new()
        out.res = True
        return out
