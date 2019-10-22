from Jumpscale import j
import binascii
from io import BytesIO


class ibiza_actor(j.baseclasses.threebot_actor):
    def _init(self, *args, **kwargs):
        self.model = self.bcdb.model_get(url="jumpscale.test.ibiza.wallet")

    def info(self, data={}, schema_out=None, user_session=None):
        """
        """
        return data

    def info2(self, data={}, schema_out=None, user_session=None):
        """

        """
        assert user_session.authenticated
        assert user_session.data_verified

        return data
