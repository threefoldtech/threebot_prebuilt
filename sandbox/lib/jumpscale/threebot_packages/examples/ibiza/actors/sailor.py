from Jumpscale import j
import sys


class sailor(j.baseclasses.threebot_actor):
    """
    """

    def sail(self, msg, schema_out=None, user_session=None):
        print("sail:%s" % msg)
        return msg

    def rain(self, schema_out=None, user_session=None):
        print("rain")
        return None
