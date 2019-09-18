from Jumpscale import j


def run_server():
    """just for quick testing of how to run this package
    `kosmos -p run_server.py`
    then go to
    http://172.17.0.2
    """

    server = j.servers.threebot.get("test")
    server.save()

    package = j.tools.threebot_packages.get("myjobs", path=j.sal.fs.getDirName(__file__), threebot_server_name="test")
    package.prepare()
    package.save()
    server.start(web=True)


run_server()
