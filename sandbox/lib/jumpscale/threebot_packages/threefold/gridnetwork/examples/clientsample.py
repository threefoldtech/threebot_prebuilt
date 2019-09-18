from Jumpscale import j

nm = j.clients.gridnetwork.get("main")
nm.network_connect("overlay", sshclient_name="myhost", port=51244)
