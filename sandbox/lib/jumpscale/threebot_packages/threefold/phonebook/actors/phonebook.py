from Jumpscale import j
import binascii
from io import BytesIO

JSBASE = j.baseclasses.object
NONE = 2147483647


class phonebook(j.baseclasses.threebot_actor):
    def _init(self, *args, **kwargs):
        self.bcdb = self._bcdb_get("threebot_phonebook")
        self.phonebook_model = self.bcdb.model_get(url="threebot.phonebook.user.1")

    def wallet_create(self, name, schema_out=None, user_session=None):
        """

        ```in
        name = (S)
        ```

        ```out
        wallet_addr = (S)
        ```

        the threebot will create a wallet for you as a user and you can leave money on there to be used for
        paying services on the threefold network

        if a wallet stays empty during 1 day it will be removed automatically

        :param: name is the name of the 3bot like how will be used in following functions like threebot_register_name
        :param: sender_signature_hex off the name as done by private key of the person who asks

        :return: a TFT wallet address
        """
        tfchain = j.clients.tfchain.get(name="default", network_type="TEST")
        wallet = tfchain.wallets.get("phonebook_%s" % name)

        o = schema_out.new()
        o.wallet_addr = wallet.address
        return o

    def name_register(self, name=None, pubkey=None, wallet_name=None, schema_out=None, user_session=None):
        """

        ```in
        name = (S)
        wallet_name = (S)
        pubkey = (S)
        ```

        ```out
        !threebot.phonebook.user.1
        ```

        is the first step of a registration, this is the step where money is involved.
        without enough funding it won't happen. The cost is 20 TFT today to register a name.

        :param: name you want to register can eg $name.$extension of $name if no extension will be $name.3bot
                needs to correspond on the name as used in threebot_wallet_create
        :param: sender_signature_hex signed by private key of the sender

        each name registration costs 100 TFT

        returns json of empty object for a threebot user

        :return:
        """
        self._log_info("register step1: for 3bot name: %s" % name)
        # TODO: check the money parts
        res = self.phonebook_model.find(name=name)
        if len(res) == 1:
            assert res[0].id
            assert res[0].pubkey == pubkey
            return res[0]
        elif len(res) > 1:
            raise j.exceptions.JSBUG("more then 1 should never be the case")
        else:
            # is a new one, signature not known yet
            u = self.phonebook_model.new(name=name, pubkey=pubkey)
            u.save()
        return u

    def record_register(
        self,
        tid=None,
        name=None,
        email=None,
        ipaddr="",
        description="",
        pubkey=None,
        sender_signature_hex=None,
        schema_out=None,
        user_session=None,
    ):
        """

        ```in
        tid = (I)
        name = (S)
        email = (S)
        pubkey = ""                             #public key of the 3bot (is hexflify)
        ipaddr = ""                             #how to reach the digitalme (3bot)
        description = ""                        #optional
        sender_signature_hex = ""               #in hex
        ```

        ```out
        !threebot.phonebook.user.1
        ```

        this is the 2nd step

        :param: name you want to register can eg $name.$extension of $name if no extension will be $name.3bot
                needs to correspond on the name as used in threebot_wallet_create
        :param email:
        :param ipaddr:
        :param description:
        :return:
        """

        assert tid
        assert pubkey
        assert name
        assert sender_signature_hex

        # verify data has been correctly signed, so the data corresponds to signature & pubkey used for signature
        ok = j.data.nacl.payload_verify(
            tid, name, email, ipaddr, description, pubkey, verifykey=pubkey, signature=sender_signature_hex, die=False
        )
        if not ok:
            raise j.exceptions.Input("threebot cannot be registered, signature wrong")

        res = self.phonebook_model.find(name=name)
        if len(res) == 1:
            u = res[0]
            id = res[0].id
            if not tid == id:
                raise j.exceptions.Input("id does not match")
            if pubkey != res[0].pubkey:
                raise j.exceptions.Input(
                    "public key cannot be changed once registered, it serves as the security for making changes"
                )
        elif len(res) > 1:
            raise j.exceptions.JSBUG("more thant 1 should never be the case")
        else:
            raise j.exceptions.JSBUG(
                "there should have been 1 threebot, first use self.name_register() and then this method."
            )

        assert u.id == tid
        assert u.name == name
        u.email = email
        u.ipaddr = ipaddr
        u.description = description
        u.pubkey = pubkey
        u.signature = sender_signature_hex
        u.save()
        return u

    def get(self, tid=None, name=None, email=None, die=True, schema_out=None, user_session=None):
        """
        ```in
        tid = (I)
        name = (S)
        email = (S)
        die = true (B)
        ```

        ```out
        !threebot.phonebook.user.1
        ```
        """
        if tid and not tid == NONE:
            user = self.phonebook_model.get(tid, die=False)
            if not user:
                raise j.exceptions.NotFound("user not found id:{user_id}" % locals())
            users = [user]
        elif name:
            users = self.phonebook_model.find(name=name)
        elif email:
            users = self.phonebook_model.find(email=email)
        else:
            raise j.exceptions.NotFound("param error need to specify user_id or name or email")

        if len(users) <= 0:
            if die == False:
                return None
            raise j.exceptions.NotFound("user not found (%s)" % locals())
        if len(users) > 1:
            raise j.exceptions.NotFound("more than 1 user found (%s)" % locals())

        jsxobject = users[0]

        return jsxobject

    def validate_signature(
        self, tid=None, name=None, email=None, payload=None, signature=None, schema_out=None, user_session=None
    ):
        """
        ```in
        tid = (I)
        name = (S)
        email = (S)
        payload = (S)
        signature = (S)
        ```
        
        ```out
        is_valid = (B)
        ```
        """
        u = self.get(tid=tid, name=name, email=email)
        is_valid = j.data.nacl.payload_verify(payload, verifykey=u.pubkey, signature=signature, die=False)
        out = schema_out.new()
        out.is_valid = is_valid
        return out
