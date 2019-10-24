import time
import uuid

import socketio
from Jumpscale import j

import os
from bottle import request, response, Bottle, abort, static_file, template

root = os.path.dirname(os.path.abspath(__file__))


app = Bottle()
app.debug = True


sio = socketio.Server(async_mode="gevent", cors_allowed_origins="*")
appws = socketio.WSGIApp(sio)


# decorator
def setonline(func):
    def inner1(sid, *args, **kwargs):
        with sio.session(sid) as session:
            if "user" in session:
                user = user_model.find(username=session["user"]["username"])[0]
                user.onboard = str(int(time.time()) * 1000)  # Milliseconds
                user.save()
        return func(sid, *args, **kwargs)

    return inner1


bcdb = j.data.bcdb.get("fruum")
app_model = bcdb.model_get(url="jumpscale.fruum.application")
doc_model = bcdb.model_get(url="jumpscale.fruum.document")
user_model = bcdb.model_get(url="jumpscale.fruum.user")

# In memory Store
user_sessions = {}


def get_view(doc):
    doc = doc._ddict
    app_name = doc.pop("app_name")

    doc["id"] = doc.pop("doc_id")
    doc_breadcrumb = doc["breadcrumb"]
    breadcrumb = []

    for bc in doc_breadcrumb:
        d = doc_model.find(app_name=app_name, doc_id=bc)[0]
        d = d._ddict
        d["id"] = d.pop("doc_id")
        d.pop("app_name")
        breadcrumb.append(d)
    breadcrumb.append(doc)

    children = []
    for d in doc_model.find(app_name=app_name, parent=doc["id"]):
        if d.inappropriate:
            continue
        if d.archived:
            continue
        d = d._ddict
        d["id"] = d.pop("doc_id")
        d.pop("app_name")
        children.append(d)

    return {"id": doc["id"], "breadcrumb": breadcrumb, "documents": children, "online": {}}


@sio.event
def connect(sid, environ):
    print("connect ", sid)


@sio.event
def disconnect(sid):
    with sio.session(sid) as session:
        if "user" in session:
            user_id = session["user"]["id"]
            if user_id in user_sessions:
                user_sessions.pop(user_id)
            user = user_model.get(user_id)
            user.last_logout = str(int(time.time()) * 1000)
            user.save()
        print("disconnect ", sid)


@sio.on("fruum:auth")
def auth(sid, data):
    with sio.session(sid) as session:
        session["app_name"] = data["app_id"]
        try:
            app = app_model.get_by_name(data["app_id"])
        except j.exceptions.NotFound:
            # Auto Add APP
            app = app_model.new()
            app.name = data["app_id"]
            app.save()

            # Auto Add home
            doc = doc_model.new()
            doc.app_name = data["app_id"]
            doc.doc_id = "home"
            doc.breadcrumb = []
            doc.parent = ""
            doc.parent_type = ""
            doc.type = "category"
            doc.initials = "HOM"
            doc.header = "Home"
            doc.body = ""
            doc.thumbnail = ""
            doc.user_id = ""
            doc.user_username = ""
            doc.user_displayname = ""
            doc.user_avatar = ""
            doc.tags = []
            doc.attachments = []
            doc.permission = 0
            doc.usage = 0
            doc.order = 0
            doc.save()

            # @TODO: REMOVE ME LATER, WHEN INTEGRATING WITH 3BOT AUTH
            # Adding dummy users
            user1 = user_model.new()
            user1.anonymous = False
            user1.admin = True
            user1.blocked = False
            user1.username = "hamdy"
            user1.displayname = "Hamdy Farag"
            user1.email = "hamdy@incubaid.com"
            user1.created = str(int(time.time()) * 1000)
            user1.save()

            user2 = user_model.new()
            user2.anonymous = False
            user2.admin = True
            user2.blocked = False
            user2.username = "aly"
            user2.displayname = "Aly Aly"
            user2.email = "aly@incubaid.com"
            user2.created = str(int(time.time()) * 1000)
            user2.save()

        users = user_model.find(username=data["user"]["id"])
        if users:
            user = users[0]
            if user.blocked:
                return
            now = str(int(time.time()) * 1000)  # Milliseconds
            user.last_login = now
            user.onboard = now
            user.save()
            session["user"] = user._ddict
            user_sessions[user.id] = sid
            sio.emit("fruum:auth", {"user": user._ddict}, room=sid)

        # Enter admin Room, if admin
        if user.admin:
            sio.enter_room(sid, "admins")

        if not user.anonymous:
            sio.enter_room(sid, "logged_in")


@sio.on("fruum:user:block")
def block(sid, data):
    with sio.session(sid) as session:
        user_id = data["id"]
        if user_id in user_sessions:
            user_sid = user_sessions.pop(user_id)
            user = user_model.get(user_id)
            user.blocked = True
            user.last_logout = str(int(time.time()) * 1000)  # Milliseconds
            user.save()
            sio.emit("fruum:user:block", {"id": user_id})
            sio.emit("disconnect", {}, room=user_sid)


@sio.on("fruum:user:unblock")
def unblock(sid, data):
    with sio.session(sid) as session:
        user_id = data["id"]
        user = user_model.get(user_id)
        user.blocked = False
        user.save()
        sio.emit("fruum:user:unblock", {"id": user_id})


@sio.on("fruum:user:remove")
def user_remove(sid, data):
    with sio.session(sid) as session:
        user_id = data["id"]
        if user_id in user_sessions:
            user_sid = user_sessions.pop(user_id)
            sio.emit("disconnect", {}, room=user_sid)
        user = user_model.get(user_id)
        user.delete()
        sio.emit("fruum:user:remove", {"id": user_id})


@sio.on("fruum:user:feed")
def feed(sid, data):
    return "ok"


@sio.on("fruum:user:list")
def user_list(sid, data):
    users = user_model.find()[data["from"] : data["size"]]
    for i, user in enumerate(users):
        users[i] = user._ddict
    sio.emit("fruum:user:list", {"users": users}, room=sid)


@sio.on("fruum:profile")
def profile(sid, data):
    # Anonymous
    if "id" not in data:
        return
    users = user_model.find(id=data["id"])
    if users:
        with sio.session(sid) as session:
            sio.emit("fruum:profile", users[0]._ddict, room=sid)
    else:
        sio.emit("fruum:profile", room=sid)


@sio.on("fruum:view")
def view(sid, data):
    doc_id = data.get("id")
    with sio.session(sid) as session:
        docs = doc_model.find(app_name=session["app_name"], doc_id=doc_id)
        if not docs:
            return
        doc = docs[0]
        if doc.type == "channel":
            sio.enter_room(sid, doc.doc_id)
        sio.emit("fruum:view", get_view(doc), room=sid)


@sio.on("fruum:add")
def add(sid, data):
    with sio.session(sid) as session:
        now = str(int(time.time()) * 1000)  # Milliseconds

        doc = doc_model.new()
        doc.app_name = session["app_name"]
        doc.doc_id = "%s-%s" % (data["header"], str(uuid.uuid4()))
        doc.header = data["header"]
        doc.body = data["body"]
        doc.usage = data["usage"]
        doc.created = now
        doc.updated = now
        doc.parent = data["parent"]
        doc.type = data["type"]
        doc.initials = data["initials"]
        doc.thumbnail = data["thumbnail"]
        doc.attachments = data["attachments"]
        doc.tags = data["tags"]
        doc.usage = data["usage"]
        doc.permission = data["permission"]
        doc.order = data["order"]
        parent = doc_model.find(app_name=session["app_name"], doc_id=data["parent"])[0]
        parent.children_count += 1
        parent.updated = now
        parent.save()
        doc.parent_type = parent.type
        doc.order = parent.children_count
        doc.breadcrumb = list(parent.breadcrumb) + [parent.doc_id]
        doc.user_id = session["user"]["id"]
        doc.user_username = session["user"]["username"]
        doc.user_displayname = session["user"]["displayname"]
        doc.user_avatar = session["user"]["avatar"]

        doc.save()

        if doc.type == "channel":
            sio.enter_room(sid, doc.doc_id)

        doc = doc._ddict
        doc["id"] = doc.pop("doc_id")
        doc.pop("app_name")

        sio.emit("fruum:add", doc, room=sid)
        sio.emit("fruum:dirty", doc, skip_sid=sid)
        sio.emit(
            "fruum:info",
            {
                "id": parent.doc_id,
                "type": parent.type,
                "children_count": parent.children_count,
                "updated": parent.updated,
            },
            skip_sid=sid,
        )

        if doc["type"] == "post" and doc["parent_type"] == "channel":
            room = parent.doc_id
            sio.emit("fruum:add", doc, room=room)


@sio.on("fruum:archive")
def archive(sid, data):
    with sio.session(sid) as session:
        doc = doc_model.find(doc_id=data["id"])[0]
        doc.archived = True
        doc.save()
        doc = doc._ddict
        doc["id"] = doc.pop("doc_id")
        sio.emit("fruum:archive", doc)


@sio.on("fruum:restore")
def archive(sid, data):
    with sio.session(sid) as session:
        doc = doc_model.find(doc_id=data["id"])[0]
        doc.archived = False
        doc.save()
        doc = doc._ddict
        doc["id"] = doc.pop("doc_id")
        sio.emit("fruum:restore", doc)


@sio.on("fruum:field")
def archive(sid, data):
    field = data["field"]
    value = data["value"]
    with sio.session(sid) as session:
        doc = doc_model.find(app_name=session["app_name"], doc_id=data["id"])[0]
        if field != "order":
            setattr(doc, field, value)
        else:
            docs = doc_model.find(app_name=session["app_name"], parent=doc.parent)
            for doc2 in docs:
                if doc2.order == value:
                    doc2.order = doc.order
                    doc2.save()
            doc.order = value
            doc2.save()
        doc.save()
        doc = doc._ddict
        doc["id"] = doc.pop("doc_id")
        sio.emit("fruum:field", doc)


@sio.on("fruum:categories")
def categories(sid, data):
    with sio.session(sid) as session:
        sio.emit("fruum:field", {"categories": []}, sid)


@sio.on("fruum:search")
def search(sid, data):
    q = data["q"]
    docs = []
    result = []
    with sio.session(sid) as session:
        sio.emit("fruum:field", {"q": q, "results": docs}, sid)


@sio.on("fruum:delete")
def delete(sid, data):
    return "ok"


@sio.on("fruum:update")
def update(sid, data):
    return "ok"


@sio.on("fruum:watch")
def watch(sid, data):
    return "ok"


@sio.on("fruum:unwatch")
def unwatch(sid, data):
    return "ok"


@sio.on("fruum:notifications")
def notifications(sid, data):
    return "ok"


@sio.on("fruum:notify")
def notify(sid, data):
    return "ok"


@sio.on("fruum:unnotify")
def unnotify(sid, data):
    return "ok"


@sio.on("fruum:report")
def report(sid, data):
    return "ok"


@sio.on("fruum:react")
def react(sid, data):
    up = data["reaction"] == "up"
    with sio.session(sid) as session:
        doc = doc_model.find(doc_id=data["id"])[0]
        username = session["user"]["username"]
        if up:
            if username in doc.react_down:
                doc.react_down.remove(username)
            if username not in doc.react_up:
                doc.react_up.append(session["user"]["username"])
        else:
            if username in doc.react_up:
                doc.react_up.remove(username)
            if username not in doc.react_down:
                doc.react_down.append(session["user"]["username"])
        doc.save()
        doc = doc._ddict
        doc["id"] = doc.pop("doc_id")
        sio.emit("fruum:react", doc)


@sio.on("fruum:autocomplete")
def autocomplete(sid, data):
    return "ok"


@sio.on("fruum:move")
def move(sid, data):
    return "ok"


@sio.on("fruum:typing")
def typing(sid, data):
    with sio.session(sid) as session:
        sio.emit("fruum:typing", session["user"]["username"])


@sio.on("fruum:onboard")
def onboard(sid, data):
    sio.emit("fruum:onboard", data, sid)


@sio.on("fruum:optimize")
def optimize(sid, data):
    return "ok"


@sio.event
def disconnect(sid):
    print("disconnect ", sid)


@app.route("/static/<filepath:path>")
def server_static(filepath):
    return static_file(filepath, root=os.path.join(root, "static"))


def get_host():
    parts = request.urlparts
    return "{}://{}".format(parts.scheme, parts.netloc)


@app.route("/go/<app_name>")
def home(app_name):
    res = template("%s/templates/app.js" % root, {"app_id": app_name})
    response.headers["Accept-Ranges"] = "bytes"
    response.headers["Access-Control-Allow-Headers"] = "Origin, X-Requested-With, Content-Type, Accept"
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Cache-Control"] = "public, max-age=0"
    response.headers["Content-Type"] = "application/javascript"
    response.headers["Vary"] = "Accept-Encoding"
    return res.encode()


@app.route("/_/get/js/<app_name>")
def js(app_name):
    res = template("%s/templates/script.js" % root, {})
    response.headers["Accept-Ranges"] = "bytes"
    response.headers["Access-Control-Allow-Headers"] = "Origin, X-Requested-With, Content-Type, Accept"
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Cache-Control"] = "public, max-age=0"
    response.headers["Content-Type"] = "application/javascript; charset=utf-8"
    response.headers["Vary"] = "Accept-Encoding"
    return res.encode()


@app.route("/_/get/style/<app_name>")
def css(app_name):
    res = static_file("/static/style.css", root=root)
    res.headers["Accept-Ranges"] = "bytes"
    res.headers["Access-Control-Allow-Headers"] = "Origin, X-Requested-With, Content-Type, Accept"
    res.headers["Access-Control-Allow-Origin"] = "*"
    res.headers["Cache-Control"] = "public, max-age=0"
    res.headers["Content-Type"] = "text/css; charset=utf-8"
    res.headers["Vary"] = "Accept-Encoding"
    return res


@app.route("/_/get/html/<app_name>")
def html(app_name):
    res = static_file("/static/app.html", root=root)
    res.headers["Accept-Ranges"] = "bytes"
    res.headers["Access-Control-Allow-Headers"] = "Origin, X-Requested-With, Content-Type, Accept"
    res.headers["Access-Control-Allow-Origin"] = "*"
    res.headers["Cache-Control"] = "public, max-age=0"
    res.headers["Content-Type"] = "text/html; charset=utf-8"
    res.headers["Vary"] = "Accept-Encoding"
    return res
