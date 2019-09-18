import os
import importlib

from Jumpscale import j

from wsgidav.wsgidav_app import WsgiDAVApp
from wsgidav.debug_filter import WsgiDavDebugFilter
from wsgidav.dir_browser import WsgiDavDirBrowser
from wsgidav.error_printer import ErrorPrinter
from wsgidav.http_authenticator import HTTPAuthenticator
from wsgidav.request_resolver import RequestResolver


class App(object):
    def __init__(self, path, port, debug=False):
        self.port = port
        self.path = path
        self.debug = debug
        self._app = None

        if not j.data.bcdb.exists("fs"):
            j.data.bcdb.new("fs")

    @property
    def app(self):
        root = os.path.dirname(os.path.abspath(__file__))
        from webdavserver import provider

        config = {
            "provider_mapping": {"/": provider.BCDBFSProvider(self.path)},
            "verbose": 5,
            "port": self.port,
            "middleware_stack": [
                WsgiDavDebugFilter,
                ErrorPrinter,
                HTTPAuthenticator,
                WsgiDavDirBrowser,  # configured under dir_browser option (see below)
                RequestResolver,  # this must be the last middleware item
            ],
            "error_printer": {"catch_all": True},  # False,
            "enable_loggers": ["wsgidav"],
            "simple_dc": {"user_mapping": {"*": True}},
        }

        if self.debug:
            config["middleware_stack"].pop(0)
            config["middleware_stack"].pop(0)

        if not self._app:
            self._app = WsgiDAVApp(config)
            self._app.debug = True

        return self._app
