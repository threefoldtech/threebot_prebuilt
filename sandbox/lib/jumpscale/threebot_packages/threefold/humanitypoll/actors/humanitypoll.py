from Jumpscale import j
import binascii
from io import BytesIO


class humanitypoll(j.baseclasses.threebot_actor):
    def _init(self, *args, **kwargs):
        self.bcdb = self._bcdb_get("humanitypoll")
        self.model = self.bcdb.model_get(url="threebot.humanitypoll.1")

    def get(self, email, secret, schema_out=None, user_session=None):
        """

        ```in
        email = (S)
        ```

        ```out
        !threebot.humanity.poll.1
        ```
        :return: results of poll
        """
        j.shell()
        return o
