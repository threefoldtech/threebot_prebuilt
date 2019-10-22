from Jumpscale import j
import binascii
from io import BytesIO


class tft_explorer(j.baseclasses.threebot_actor):
    def _init(self, *args, **kwargs):
        bcdb = j.data.bcdb.get("ffconnect")
        self.tft_ex_t = bcdb.model_get(url="ffconnect.room.1")

    def create_room(self, transaction_data, schema_out=None, user_session=None):
        """
        ```in
        transaction_data = (O) !tft.explorer.transaction.1
        ```

        ```out
        !tft.explorer.transaction.1
        ```

        """

    def join_room(self, schema_out=None, user_session=None):
        pass

    # put here the needed functions to interface with ffconnect
