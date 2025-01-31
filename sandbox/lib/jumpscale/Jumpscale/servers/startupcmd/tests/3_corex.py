# Copyright (C) July 2018:  TF TECH NV in Belgium see https://www.threefold.tech/
# In case TF TECH NV ceases to exist (e.g. because of bankruptcy)
#   then Incubaid NV also in Belgium will get the Copyright & Authorship for all changes made since July 2018
#   and the license will automatically become Apache v2 for all code related to Jumpscale & DigitalMe
# This file is part of jumpscale at <https://github.com/threefoldtech>.
# jumpscale is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# jumpscale is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License v3 for more details.
#
# You should have received a copy of the GNU General Public License
# along with jumpscale or jumpscale derived works.  If not, see <http://www.gnu.org/licenses/>.
# LICENSE END


from Jumpscale import j


def main(self):
    """
    to run:

    kosmos 'j.servers.startupcmd.test(name="corex")' --debug
    """

    j.servers.corex.default.start()
    corex = j.servers.corex.default.client

    self.http_corex.executor = "corex"
    self.http_corex.corex_client_name = corex.name
    self.http_corex.timeout = 5
    self.http_corex.interpreter = "direct"
    self.http_corex.cmd_start = "python3 -m http.server"  # starts on port 8000
    self.http_corex.executor = "corex"
    self.http_corex.ports = 8000
    self.http_corex.corex_client_name = corex.name

    self.http_corex.start()
    assert self.http_corex.is_running() is True
    assert self.http_corex.pid

    self.http_corex.stop()
    assert self.http_corex.is_running() is False

    return "OK"
