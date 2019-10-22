from Jumpscale import j
import binascii
from io import BytesIO


class tft_explorer(j.baseclasses.threebot_actor):
    def _init(self, *args, **kwargs):
        bcdb = j.data.bcdb.get("tft_explorer")
        self.tft_ex_t = bcdb.model_get(url="tft.explorer.transaction.1")
        self.tft_ex_w = bcdb.model_get(url="tft.explorer.wallet.1")

    def data_dump_transaction(self, transaction_data, schema_out=None, user_session=None):
        # we can't use schema_out because it is not linked to a bcdb
        # neither to a namespace id
        # t = schema_out.new()
        print("****************************** transaction_data:%s " % transaction_data)
        transaction_data = j.data.serializers.json.loads(transaction_data)
        t = self.tft_ex_t.new()
        t.senders = [transaction_data["from_addr"]]
        t.recipient = str(transaction_data["to_addr"])
        t.amount = transaction_data["amount"]
        print("******************************t:%s   " % t)

        r = self.tft_ex_t.set(t)
        return r

    def set_transactions(self, trans, schema_out=None, user_session=None):
        """
        ```in
        trans = (LO) !tft.explorer.transaction.1
        ```

        ```out
        success = (LO) !tft.explorer.transaction.1
        ```
        """
        res = []
        for t in trans:
            tmp = self.tft_ex_t.new()
            tmp.hash = t.hash
            tmp.lock.value = t.lock.value
            tmp.lock.type = t.lock.type
            tmp.message = t.message
            tmp.fee = t.fee
            tmp.senders = t.senders
            tmp.recipient = t.recipient
            tmp.amount = t.amount
            tmp.include_in_block_height = t.include_in_block_height
            res.append(self.tft_ex_t.set(tmp))
        return res

    def get_transaction_by_recipient(self, recipient, schema_out=None, user_session=None):
        """
        ```in
        recipient = (S) 
        ```

        ```out
        trans =  (LO) !tft.explorer.transaction.1
        ```
        """
        return self.tft_ex_t.find(recipient=recipient)

    def get_transactions_in_block(self, block_height, schema_out=None, user_session=None):
        """
        ```in
        block_height = (I) 
        ```

        ```out
        trans =  (LO) !tft.explorer.transaction.1
        ```
        """
        return self.tft_ex_t.find(include_in_block_height=block_height)

    def get(self, transaction_id, schema_out=None, user_session=None):
        """
        ```in
        transaction_id = (I)
        ```

        ```out
        transaction = (O) !tft.explorer.transaction.1
        ```
        """
        return self._get_trans(transaction_id)

    def _get_trans(self, transaction_id):
        try:
            return self.tft_ex_t.get(transaction_id)
        except j.exceptions.NotFound:
            raise j.exceptions.NotFound("transaction %s not found" % transaction_id)

    def set_block(self, blockheight, transactions, balances):
        pass

    def get_balance(self, recipient, schema_out=None, user_session=None):
        """
        ```in
        recipient = (S) 
        ```

        ```out
        balance =  (F) 
        ```
        """
        out = schema_out.new()
        for t in self.tft_ex_t.find(recipient=recipient):
            out.balance += t.amount
        return out
