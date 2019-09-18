from Jumpscale import j

for wg in j.tools.wireguard.find():
    wg.delete()


bcdb = j.data.bcdb.system
bcdb.model_get(url="tfgrid.network.network.1").destroy()
