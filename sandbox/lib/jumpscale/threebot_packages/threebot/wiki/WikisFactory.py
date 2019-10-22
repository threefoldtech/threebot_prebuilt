import traceback
from Jumpscale import j
from bottle import abort, response, request, Bottle, redirect
from jinja2 import Environment, FileSystemLoader, select_autoescape

templates_path = j.sal.fs.joinPaths(j.sal.fs.getDirName(__file__), "templates")

env = Environment(loader=FileSystemLoader(templates_path), autoescape=select_autoescape(["html", "xml"]))

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


def get_metadata(docsite):
    try:
        with open(f"/docsites/{docsite}/.data") as f:
            return f.read()
    except FileNotFoundError:
        return "{}"


def get_ws_url():
    """get the proper ws url from the request"""
    url_parts = request.urlparts
    ws_scheme = "ws"
    if url_parts.scheme == "https":
        ws_scheme = "wss"

    ws_url = f"{ws_scheme}://{url_parts.hostname}"
    if url_parts.port:
        ws_url = f"{ws_url}:{url_parts.port}"
    return ws_url


@app.route("/wiki")
def home_handler():
    wikis_names = []
    if j.sal.bcdbfs.exists("/docsites"):
        wikis_names = j.sal.bcdbfs.list_dirs("/docsites")
        wikis_names = [wiki[10:] for wiki in wikis_names]
    return env.get_template("home.html").render(wikis_names=wikis_names)


@app.route("/wiki/<docsite>", method="get")
@enable_cors
def wiki_handler(docsite):
    docsite_path = j.sal.fs.joinPaths("/docsites", docsite)
    if not j.sal.bcdbfs.exists(docsite_path):
        return abort(404)

    ws_url = get_ws_url()
    return env.get_template("wiki/index.html").render(name=docsite, metadata=get_metadata(docsite), url=ws_url)


@app.route("/wiki/gdrive/<doc_type>/<guid1>/<guid2>")
def gdrive_handler(doc_type, guid1, guid2):
    cl = j.clients.gedis.get("wiki_gdrive_client", port=8901)
    try:
        result = cl.actors.gdrive.file_get(doc_type, guid1, guid2)
        redirect(result["res"])
    except Exception as ex:
        err = "".join(traceback.format_exception(etype=type(ex), value=ex, tb=ex.__traceback__))
        response.status = 400
        result = {"error": err}
        result = j.data.serializers.json.dumps(result)
        return result


class WikisFactory(j.baseclasses.threebot_factory):
    __jslocation__ = "j.threebot.package.wikis"

    def get_app(self):
        return app
