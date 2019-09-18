# first we need to create our network

from Jumpscale import j

client = j.clients.gedis.get(port=9901)
client.actors.gridnetwork.network_add("overlay", "10.2.0.0/16")
client.actors.gridnetwork.network_endpoint_add("overlay", "do")
