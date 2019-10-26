import json
import mimetypes
import traceback

from bottle import Bottle, abort, post, request, response, run
from bottle.ext.websocket import GeventWebSocketServer, websocket
from Jumpscale import j

GEDIS_PORT = 8901
client_gedis = None
app = Bottle()


def enable_cors(fn):
    def _enable_cors(*args, **kwargs):
        # set CORS headers
        response.headers["Access-Control-Allow-Origin"] = "*"
        response.headers["Access-Control-Allow-Methods"] = "GET, POST, PUT, OPTIONS"
        response.headers[
            "Access-Control-Allow-Headers"
        ] = "Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token"

        if request.method != "OPTIONS":
            # actual request; reply with the actual response
            return fn(*args, **kwargs)

    return _enable_cors


#######################################
###### GEDIS WEBSOCKET ROUTES #########
#######################################
@app.route("/gedis/websocket", apply=[websocket])
def gedis_websocket(ws):
    # TODO: getting a gedis client should happen only once
    client_gedis = j.clients.gedis.get("main", port=GEDIS_PORT)
    while True:
        message = ws.receive()
        if message is not None:
            data = json.loads(message)
            commands = data["command"].split(".")
            if data["command"].casefold() == "system.ping":
                ws.send(j.data.serializers.json.dumps(client_gedis.ping()))
                return
            cl = getattr(client_gedis.actors, commands[0])

            for attr in commands[1:]:
                cl = getattr(cl, attr)

            args = data.get("args", {})
            response = cl(**args)
            if isinstance(response, dict):
                ws.send(j.data.serializers.json.dumps(response))
            elif hasattr(response, "_json"):
                ws.send(j.data.serializers.json.dumps(response._ddict_hr))
            elif isinstance(response, bytes):
                ws.send(response.decode())
            elif response is None:
                ws.send("")
            else:
                ws.send(response)
        else:
            break


#######################################
######## GEDIS HTTP ROUTES ############
#######################################
@app.route("/gedis/http/<name>/<cmd>", method=["post", "get"])
@enable_cors
def gedis_http(name, cmd):
    client = j.clients.gedis.get(name="main_gedis_threebot", port=8901)
    actor = getattr(client.actors, name, None)
    if not actor:
        response.status = 404
        return f"Actor {name} does not exist"
    command = getattr(actor, cmd, None)
    if not command:
        response.status = 400
        return f"Actor {name} does not have command {cmd}"
    data = request.json or {"args": {}}
    content_type = data.get("content_type", "json")
    if content_type not in ["json", "msgpack"]:
        response.status = 400
        return f"content_type needs to be either json or msgpack"
    response.headers["Content-Type"] = f"application/{content_type}"
    try:

        result = command(**data["args"])
    except Exception as ex:
        err = "".join(traceback.format_exception(etype=type(ex), value=ex, tb=ex.__traceback__))
        response.status = 400
        result = {"error": err}
        if content_type == "json":
            result = j.data.serializers.json.dumps(result)
        else:  # msgpack
            result = j.data.serializers.msgpack.dumps(result)
    else:
        if content_type:
            result = getattr(result, f"_{content_type}", result)
    return result


#######################################
####### BCDBFS HTTP ROUTES ############
#######################################
@app.route("/bcdbfs/<url:re:.+>")
@enable_cors
def index(url):
    try:
        file = j.sal.bcdbfs.file_read("/" + url)
    except j.exceptions.NotFound:
        abort(404)
    response.headers["Content-Type"] = mimetypes.guess_type(url)[0]
    return file


class BottleInterfaceFactory(j.baseclasses.object, j.baseclasses.testtools):
    __jslocation__ = "j.servers.bottle_web"

    def get_app(self):
        return app

    def test(self, port=None, prefix="web", scheme="https"):
        """
        kosmos `j.servers.bottle_web.test()'
        :return:
        """
        base_url = "0.0.0.0"
        if port:
            base_url = base_url + f":{port}"

        if prefix:
            base_url = base_url + f"/{prefix}"

        url = f"{scheme}://{base_url}"

        gedis_client = j.servers.threebot.local_start_default(timeout=300)
        gedis_client.actors.package_manager.package_add(
            "/sandbox/code/github/threefoldtech/jumpscaleX_core/JumpscaleCore/servers/gedis/pytests/test_package"
        )
        gedis_client.reload()

        print("testing bcdbfs")
        j.sal.bcdbfs.file_write("/test", "hello world", create=True, append=False)
        assert j.clients.http.get(f"{url}/bcdbfs/test", verify=False) == "hello world"
        print("bcdbfs OK")

        print("testing gedis http")
        j.sal.bcdbfs.file_write("/test", "hello world", create=True)
        # TODO: check also the content
        assert (
            j.clients.http.post(
                f"{url}/gedis/http/actor/echo",
                data=b'{"args":{"_input":"hello world"}}',
                headers={"Content-Type": "application/json"},
                verify=False,
            )
            .read()
            .decode()
            == "hello world"
        )
        print("gedis http OK")

        print("testing gedis websocker")
        from websocket import WebSocket
        import ssl

        ws = WebSocket(sslopt={"cert_reqs": ssl.CERT_NONE})
        ws.connect(f"wss://{base_url}/gedis/websocket")
        assert ws.connected

        payload = """{
        "namespace": "default",
        "actor": "echo",
        "command": "actor.echo",
        "args": {"_input": "hello world"},
        "headers": {"response_type":"json"}
        }"""
        ws.send(payload)
        assert ws.recv() == "hello world"
        print("gedis websocket OK")

        print("tearDown")
        gedis_client.actors.package_manager.package_delete("test_package")
        j.servers.threebot.default.stop()
