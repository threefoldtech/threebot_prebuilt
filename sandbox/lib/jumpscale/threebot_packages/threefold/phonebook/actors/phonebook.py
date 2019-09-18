from Jumpscale import j
import binascii
from io import BytesIO

JSBASE = j.baseclasses.object
NONE = 2147483647


class phonebook(j.baseclasses.threebot_actor):
    def _init(self, *args, **kwargs):
        bcdb = j.data.bcdb.get("threebot_phonebook")
        self.phonebook_model = bcdb.model_get(url="threebot.phonebook.user.1")

    def wallet_create(self, name, sender_signature_hex):
        """

        the threebot will create a wallet for you as a user and you can leave money on there to be used for
        paying services on the threefold network

        if a wallet stays empty during 1 day it will be removed automatically

        :param: name is the name of the 3bot like how will be used in following functions like threebot_register_name
        :param: sender_signature_hex off the name as done by private key of the person who asks

        :return: a TFT wallet address
        """
        # just to be 100% transparant to other implementation we will only use the redis client implementation
        # TODO: needs to be implemented

        tfchain = j.clients.tfchain.get(name="default", network_type="TEST")
        wallet = j.clients.tfchain.default.wallets.get("phonebook_%s" % name)
        return wallet.address

    def name_register(self, name, sender_signature_hex):
        """

        is the first step of a registration, this is the step where money is involved.
        without enough funding it won't happen. The cost is 20 TFT today to register a name.

        :param: name you want to register can eg $name.$extension of $name if no extension will be $name.3bot
                needs to correspond on the name as used in threebot_wallet_create
        :param: sender_signature_hex signed by private key of the sender

        each name registration costs 100 TFT

        :return:
        """
        self._log_info("register step1: for 3bot name: %s" % name)
        cl = self.explorer
        cl.ping()

    def record_register(
        self,
        id=None,
        name=None,
        email=None,
        ipaddr="",
        description="",
        pubkey=None,
        sender_signature_hex=None,
        schema_out=None,
    ):
        """

        ```in
        name = (S)
        email = (S)
        pubkey = ""                             #public key of the 3bot (is hexflify)
        ipaddr = ""                             #how to reach the digitalme (3bot)
        description = ""                        #optional
        signature = ""                          #in hex
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

        # pubkey2 = binascii.unhexlify(pubkey)
        # n = j.data.nacl.default

        assert pubkey
        assert name
        assert sender_signature_hex

        res = self.phonebook_model.find(name=name)
        if len(res) == 1:
            u = res[0]

            id = res[0].id

            if pubkey != res[0].pubkey:
                raise j.exceptions.Input(
                    "public key cannot be changed once registered, it serves as the security for making changes"
                )

            signature_hex = j.clients.threebot._payload_check(
                id=u.id, name=name, email=email, ipaddr=ipaddr, description=description, pubkey_hex=pubkey
            )

            if not signature_hex == signature:
                raise j.exceptions.Input("threebot cannot be registered, signature wrong")

        elif len(res) > 1:
            raise j.exceptions.JSBUG("more thant 1 should never be the case")
        else:
            # is a new one, signature not known yet
            u = self.phonebook_model.new(
                name=name, email=email, ipaddr=ipaddr, description=description, pubkey=pubkey, signature=""
            )

            signature_hex = j.clients.threebot._payload_check(
                id=u.id, name=name, email=email, ipaddr=ipaddr, description=description, pubkey_hex=pubkey
            )

        id = None
        if len(res) == 1:
            id = res[0].id
            if pubkey != res[0].pubkey:
                raise j.exceptions.Input(
                    "public key cannot be changed once registered, it serves as the security for making changes"
                )
        elif len(res) > 1:
            raise j.exceptions.Input("cannot have more than 1 user on name")

        u = self.phonebook_model.new(
            id=id,
            name=name,
            email=email,
            ipaddr=ipaddr,
            description=description,
            pubkey=pubkey,
            signature=signature_hex,
        )
        u.save()
        return u

    def get(self, tid=None, name=None, email=None, schema_out=None):
        """
        ```in
        tid = (I)
        name = (S)
        email = (S)
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
            raise j.exceptions.NotFound("user not found (%s)" % locals())
        if len(users) > 1:
            raise j.exceptions.NotFound("more than 1 user found (%s)" % locals())

        jsxobject = users[0]

        return jsxobject
