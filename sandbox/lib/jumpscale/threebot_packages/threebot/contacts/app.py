from bottle import route, run, template, Bottle

app = Bottle()


@app.route("/hello/<name>")
def index(name):
    return template("<b>Hello {{name}}</b>!", name=name)
