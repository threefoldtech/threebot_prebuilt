from Jumpscale import j


def run_server():
    """just for quick testing of how to run this package

    `kosmos -p run_server.py`

    then go to
    http://172.17.0.2

    """
    server = j.servers.threebot.get("test_wikis")
    server.save()

    package = j.tools.threebot_packages.get(
        "wiki", path=j.sal.fs.getParent(j.sal.fs.getDirName(__file__)), threebot_server_name="test_wikis"
    )
    package.prepare()
    package.save()
    server.start(web=True, ssl=False)


run_server()
