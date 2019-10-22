from Jumpscale import j

from .ZOSNodes import ZOSNodes


class ZOSCmdFactory(j.baseclasses.object_config_collection_testtools):

    __jslocation__ = "j.kosmos.zos"

    _CHILDCLASSES = [ZOSNodes]

    def test(self):
        """

        js_shell 'j.kosmos.zos.test()'

        :return:
        """
        # node = self.zosnodes.mynode

        # j.shell()
