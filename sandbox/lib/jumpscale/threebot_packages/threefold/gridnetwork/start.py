#!/usr/bin/env python
from Jumpscale import j
import os


bcdb = j.data.bcdb.system

dirname = os.path.dirname(__file__)
modelpath = os.path.join(dirname, "models")
actorpath = os.path.join(dirname, "actors")
bcdb.models_add(modelpath)


# run gedis with my actor
gedis = j.servers.gedis.get("main", port=9901)
gedis.actors_add(actorpath)
gedis.start()
