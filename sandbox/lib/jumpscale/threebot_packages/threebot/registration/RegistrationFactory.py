import traceback
from Jumpscale import j
from bottle import abort, response, request, Bottle, redirect
from jinja2 import Environment, FileSystemLoader, select_autoescape


class RegistrationFactory(j.baseclasses.threebot_factory):
    __jslocation__ = "j.threebot.package.registration"

