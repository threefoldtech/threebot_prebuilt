import signal
import time

from Jumpscale import j

from .. import templates
from ..abstracts import Service


GEDIS_PORT = 8888
LAPIS_PORT = 8080


class UserBot(Service):
    """
    UserBot sal for creating a user bot container and managing it
    """

    def __init__(self, node, name, bootstrap_token, gedis_port=GEDIS_PORT, lapis_port=LAPIS_PORT):
        """"
        :param node: sal of the node to deploy userbot on
        :param name: instance name
        :param bootstrap_token: token used for security when anyone asks for the initialization token
        :param gedis_port: public port on the node that is forwarded to the gedis server listening port
        :param lapis_port: public port on the node that is forwarded to the lapis server listening port
        """
        super().__init__(name, node, "3bot", [], True)

        # @todo change this flist when we have the final userbot flist
        self.flist = "https://hub.grid.tf/sboctor/userbot_merged_tf-autobuilder_threefoldtech-jumpscaleX-autostart-development.flist"
        self.bootstrap_token = bootstrap_token
        self.gedis_port = gedis_port
        self.lapis_port = lapis_port

    @property
    def _container_data(self):
        """
        :return: data used for UserBot container
         :rtype: dict
        """
        envs = {"BOOTSTRAP_TOKEN": self.bootstrap_token}

        # select a storage pool where to create subvolume to mount into the container
        # we want only the storage pool on top of an SSD
        pools = filter(lambda p: p.type.value == "SSD", self.node.storagepools.list())
        # sort all the SSD storage pool by ussage
        pools = sorted(pools, key=lambda p: p.used)
        fs = None
        for sp in pools:
            try:
                fs = sp.get(self._id)
            except ValueError:
                try:
                    fs = sp.create(self._id)
                except Exception as err:
                    j.tools.logger._log_warning(
                        "couldn create storage pool filesystem: %s\nTrying another disk" % str(err)
                    )
                    continue
            if fs:
                break

        if fs is None:
            raise j.exceptions.Base("couldn't find a disk to use to mount in the container")

        return {
            "name": self._container_name,
            "flist": self.flist,
            "ports": {self.gedis_port: GEDIS_PORT, self.lapis_port: LAPIS_PORT},
            "nics": [{"type": "default"}],
            "env": envs,
            "mounts": {fs.path: "/sandbox/var"},
            "cpu": 2,
            "memory": 4906,  # 4GiB
        }

    def start(self, timeout=15):
        """
        Start user bot container
        :param timeout: time in seconds to wait for the user bot to start
        """
        if self.is_running():
            return

        j.tools.logger._log_info("start user bot %s" % self.name)

        def test_started():
            self._container = None
            return self.container.is_running()

        if not j.tools.timer.execute_until(test_started, 10, 1):
            raise j.exceptions.Base("failed to start container")

    def destroy(self):
        super().destroy()
        for sp in self.node.storagepools.list():
            try:
                fs = sp.get(self._id)
                fs.delete()
                break
            except ValueError:
                continue
