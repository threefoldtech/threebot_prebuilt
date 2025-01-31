"""
Goldchain Client
"""

from Jumpscale import j

import sys

from .types.ConditionTypes import UnlockHash, UnlockHashType, ConditionMultiSignature
from .types.PrimitiveTypes import Hash, Currency
from .types.IO import CoinOutput, BlockstakeOutput, MinerPayout
from .types.transactions.Base import TransactionBaseClass
from .types.transactions.Minting import TransactionV128
from .GoldChainWalletFactory import GoldChainWalletFactory
from .GoldChainWallet import WalletBalance, MultiSigWalletBalance

_EXPLORER_NODES = {
    "STD": [
        "https://explorer.nbh-digital.com",
        "https://explorer2.nbh-digital.com",
        "https://explorer3.nbh-digital.com",
        "https://explorer4.nbh-digital.com",
    ],
    "TEST": ["https://explorer.testnet.nbh-digital.com", "https://explorer2.testnet.nbh-digital.com"],
    "DEV": ["http://localhost:22110", "http://192.168.8.200:22110"],
}

_CHAIN_NETWORK_TYPES = sorted(["TEST", "DEV"])


class GoldChainClient(j.baseclasses.factory_data_testtools):
    """
    Goldchain client object
    """

    _SCHEMATEXT = """
        @url = jumpscale.goldchain.client
        name** = "" (S)
        network_type = "TEST,DEV" (E)
        explorer_nodes = (LS)
        """

    _CHILDCLASSES = [GoldChainWalletFactory]

    def _init(self, **kwargs):
        self._minter = GoldChainMinterClient(self)
        self._authcoin = GoldChainAuthcoinClient(self)

    @property
    def minter(self):
        """
        Minter Client API.
        """
        return self._minter

    @property
    def authcoin(self):
        """
        AuthCoin Client API
        """
        return self._authcoin

    @property
    def explorer_addresses(self):
        """
        Addresses of the explorers to use
        """
        if len(self.explorer_nodes) > 0:
            return self.explorer_nodes.pylist()
        return _EXPLORER_NODES[str(self.network)]

    @property
    def network(self):
        # TODO: REMOVE THIS HACK,
        #       used to work fine as-is, but it seems JSX now also can return Enum values
        #       as raw integers, which breaks my default logic here,
        #       only occurs when loaded from a saved instance,
        #       so there must be something going wrong during decoding.
        if isinstance(self.network_type, int):
            self.network_type = _CHAIN_NETWORK_TYPES[self.network_type - 1]
        return self.network_type

    @property
    def minimum_miner_fee(self):
        if self.network == "DEV":
            return j.clients.goldchain.types.currency_new("1")
        return j.clients.goldchain.types.currency_new("0.001")

    def blockchain_info_get(self):
        """
        Get the current blockchain info, using the last known block, as reported by an explorer.
        """
        resp = self.explorer_get(endpoint="/explorer")
        resp = j.data.serializers.json.loads(resp)
        blockid = Hash.from_json(obj=resp["blockid"])
        last_block = self.block_get(blockid)
        return ExplorerBlockchainInfo(last_block=last_block)

    def block_get(self, value):
        """
        Get a block from an available explorer Node.

        @param value: the identifier or height that points to the desired block
        """
        endpoint = "/explorer/?"
        resp = {}
        try:
            # get the explorer block
            if isinstance(value, int):
                endpoint = "/explorer/blocks/{}".format(int(value))
                resp = self.explorer_get(endpoint=endpoint)
                resp = j.data.serializers.json.loads(resp)
                resp = resp["block"]
            else:
                blockid = self._normalize_id(value)
                endpoint = "/explorer/hashes/" + blockid
                resp = self.explorer_get(endpoint=endpoint)
                resp = j.data.serializers.json.loads(resp)
                if resp["hashtype"] != "blockid":
                    raise j.clients.goldchain.errors.ExplorerInvalidResponse(
                        "expected hash type 'blockid' not '{}'".format(resp["hashtype"]), endpoint, resp
                    )
                resp = resp["block"]
                if resp["blockid"] != blockid:
                    raise j.clients.goldchain.errors.ExplorerInvalidResponse(
                        "expected block ID '{}' not '{}'".format(blockid, resp["blockid"]), endpoint, resp
                    )
            # parse the transactions
            transactions = []
            for etxn in resp["transactions"]:
                # parse the explorer transaction
                transaction = self._transaction_from_explorer_transaction(etxn, endpoint=endpoint, resp=resp)
                # append the transaction to the list of transactions
                transactions.append(transaction)
            rawblock = resp["rawblock"]
            # parse the parent id
            parentid = Hash.from_json(obj=rawblock["parentid"])
            # parse the miner payouts
            miner_payouts = []
            minerpayoutids = resp.get("minerpayoutids", None) or []
            eminerpayouts = rawblock.get("minerpayouts", None) or []
            if len(eminerpayouts) != len(minerpayoutids):
                raise j.clients.goldchain.errors.ExplorerInvalidResponse(
                    "amount of miner payouts and payout ids are not matching: {} != {}".format(
                        len(eminerpayouts), len(minerpayoutids)
                    ),
                    endpoint,
                    resp,
                )
            for idx, mp in enumerate(eminerpayouts):
                id = Hash.from_json(minerpayoutids[idx])
                value = Currency.from_json(mp["value"])
                unlockhash = UnlockHash.from_json(mp["unlockhash"])
                miner_payouts.append(ExplorerMinerPayout(id=id, value=value, unlockhash=unlockhash))
            # get the timestamp and height
            height = int(resp["height"])
            timestamp = int(rawblock["timestamp"])
            # get the block's identifier
            blockid = Hash.from_json(resp["blockid"])
            # return the block, as reported by the explorer
            return ExplorerBlock(
                id=blockid,
                parentid=parentid,
                height=height,
                timestamp=timestamp,
                transactions=transactions,
                miner_payouts=miner_payouts,
            )
        except KeyError as exc:
            # return a KeyError as an invalid Explorer Response
            raise j.clients.goldchain.errors.ExplorerInvalidResponse(str(exc), endpoint, resp) from exc

    def transaction_get(self, txid):
        """
        Get a transaction from an available explorer Node.

        @param txid: the identifier (bytes, bytearray, hash or string) that points to the desired transaction
        """
        txid = self._normalize_id(txid)
        endpoint = "/explorer/hashes/" + txid
        resp = self.explorer_get(endpoint=endpoint)
        resp = j.data.serializers.json.loads(resp)
        try:
            if resp["hashtype"] != "transactionid":
                raise j.clients.goldchain.errors.ExplorerInvalidResponse(
                    "expected hash type 'transactionid' not '{}'".format(resp["hashtype"]), endpoint, resp
                )
            resp = resp["transaction"]
            if resp["id"] != txid:
                raise j.clients.goldchain.errors.ExplorerInvalidResponse(
                    "expected transaction ID '{}' not '{}'".format(txid, resp["id"]), endpoint, resp
                )
            return self._transaction_from_explorer_transaction(resp, endpoint=endpoint, resp=resp)
        except KeyError as exc:
            # return a KeyError as an invalid Explorer Response
            raise j.clients.goldchain.errors.ExplorerInvalidResponse(str(exc), endpoint, resp) from exc

    def transaction_put(self, transaction):
        """
        Submit a transaction to an available explorer Node.

        @param transaction: the transaction to push to the client transaction pool
        """
        if isinstance(transaction, TransactionBaseClass):
            transaction = transaction.json()
        endpoint = "/transactionpool/transactions"
        resp = self.explorer_post(endpoint=endpoint, data=transaction)
        resp = j.data.serializers.json.loads(resp)
        try:
            return str(Hash(value=resp["transactionid"]))
        except KeyError as exc:
            # return a KeyError as an invalid Explorer Response
            raise j.clients.goldchain.errors.ExplorerInvalidResponse(str(exc), endpoint, resp) from exc

    def unlockhash_get(self, target):
        """
        Get all transactions linked to the given unlockhash (target),
        as well as other information such as the multisig addresses linked to the given unlockhash (target).

        target can be any of:
            - None: unlockhash of the Free-For-All wallet will be used
            - str (or unlockhash/bytes/bytearray): target is assumed to be the unlockhash of a personal wallet
            - list: target is assumed to be the addresses of a MultiSig wallet where all owners (specified as a list of addresses) have to sign
            - tuple (addresses, sigcount): target is a sigcount-of-addresscount MultiSig wallet

        @param target: the target wallet to look up transactions for in the explorer, see above for more info
        """
        unlockhash = str(j.clients.goldchain.types.conditions.from_recipient(target).unlockhash)
        endpoint = "/explorer/hashes/" + unlockhash
        resp = self.explorer_get(endpoint=endpoint)
        resp = j.data.serializers.json.loads(resp)
        try:
            if resp["hashtype"] != "unlockhash":
                raise j.clients.goldchain.errors.ExplorerInvalidResponse(
                    "expected hash type 'unlockhash' not '{}'".format(resp["hashtype"]), endpoint, resp
                )
            # parse the transactions
            transactions = []
            for etxn in resp["transactions"]:
                # parse the explorer transaction
                transaction = self._transaction_from_explorer_transaction(etxn, endpoint=endpoint, resp=resp)
                # append the transaction to the list of transactions
                transactions.append(transaction)
            # collect all multisig addresses
            multisig_addresses = [UnlockHash.from_json(obj=uh) for uh in resp.get("multisigaddresses", None) or []]
            for addr in multisig_addresses:
                if addr.type != UnlockHashType.MULTI_SIG:
                    raise j.clients.goldchain.errors.ExplorerInvalidResponse(
                        "invalid unlock hash type {} for MultiSignature Address (expected: 3)".format(addr.type),
                        endpoint,
                        resp,
                    )

            # sort the transactions by height
            transactions.sort(key=(lambda txn: sys.maxsize if txn.height < 0 else txn.height), reverse=True)

            # return explorer data for the unlockhash
            return ExplorerUnlockhashResult(
                unlockhash=UnlockHash.from_json(unlockhash),
                transactions=transactions,
                multisig_addresses=multisig_addresses,
                client=self,
            )
        except KeyError as exc:
            # return a KeyError as an invalid Explorer Response
            raise j.clients.goldchain.errors.ExplorerInvalidResponse(str(exc), endpoint, resp) from exc

    def coin_output_get(self, id):
        """
        Get a coin output from an available explorer Node.

        Returns (output, creation_txn, spend_txn).

        @param id: the identifier (bytes, bytearray, hash or string) that points to the desired coin output
        """
        return self._output_get(id, expected_hash_type="coinoutputid")

    def blockstake_output_get(self, id):
        """
        Get a blockstake output from an available explorer Node.

        Returns (output, creation_txn, spend_txn).

        @param id: the identifier (bytes, bytearray, hash or string) that points to the desired blockstake output
        """
        return self._output_get(id, expected_hash_type="blockstakeoutputid")

    def _output_get(self, id, expected_hash_type):
        """
        Get an output from an available explorer Node.

        Returns (output, creation_txn, spend_txn).

        @param id: the identifier (bytes, bytearray, hash or string) that points to the desired output
        @param expected_hash_type: one of ('coinoutputid', 'blockstakeoutputid')
        """
        if expected_hash_type not in ("coinoutputid", "blockstakeoutputid"):
            raise j.exceptions.Value(
                "expected hash type should be one of ('coinoutputid', 'blockstakeoutputid'), not {}".format(
                    expected_hash_type
                )
            )
        id = self._normalize_id(id)
        endpoint = "/explorer/hashes/" + id
        resp = self.explorer_get(endpoint=endpoint)
        resp = j.data.serializers.json.loads(resp)
        try:
            hash_type = resp["hashtype"]
            if hash_type != expected_hash_type:
                raise j.clients.goldchain.errors.ExplorerInvalidResponse(
                    "expected hash type '{}', not '{}'".format(expected_hash_type, hash_type), endpoint, resp
                )
            tresp = resp["transactions"]
            lresp = len(tresp)
            if lresp not in (1, 2):
                raise j.clients.goldchain.errors.ExplorerInvalidResponse(
                    "expected one or two transactions to be returned, not {}".format(lresp), endpoint, resp
                )
            # parse the transaction(s)
            creation_txn = tresp[0]
            spend_txn = None
            if lresp == 2:
                if tresp[1]["height"] > creation_txn["height"]:
                    spend_txn = tresp[1]
                else:
                    spend_txn = creation_txn
                    creation_txn = tresp[1]
            creation_txn = self._transaction_from_explorer_transaction(creation_txn, endpoint=endpoint, resp=resp)
            if spend_txn is not None:
                spend_txn = self._transaction_from_explorer_transaction(spend_txn, endpoint=endpoint, resp=resp)
            # collect the output
            output = None
            for out in creation_txn.coin_outputs if hash_type == "coinoutputid" else creation_txn.blockstake_outputs:
                if str(out.id) == id:
                    output = out
                    break
            if output is None:
                raise j.clients.goldchain.errors.ExplorerInvalidResponse(
                    "expected output {} to be part of creation Tx, but it wasn't".format(id), endpoint, resp
                )
            # return the output and related transaction(s)
            return (output, creation_txn, spend_txn)
        except KeyError as exc:
            # return a KeyError as an invalid Explorer Response
            raise j.clients.goldchain.errors.ExplorerInvalidResponse(str(exc), endpoint, resp) from exc

    def _transaction_from_explorer_transaction(
        self, etxn, endpoint="/?", resp=None
    ):  # keyword parameters for error handling purposes only
        if resp is None:
            resp = {}
        # parse the transactions
        transaction = j.clients.goldchain.types.transactions.from_json(obj=etxn["rawtransaction"], id=etxn["id"])
        # add the parent (coin) outputs
        coininputoutputs = etxn.get("coininputoutputs", None) or []
        if len(transaction.coin_inputs) != len(coininputoutputs):
            raise j.clients.goldchain.errors.ExplorerInvalidResponse(
                "amount of coin inputs and parent outputs are not matching: {} != {}".format(
                    len(transaction.coin_inputs), len(coininputoutputs)
                ),
                endpoint,
                resp,
            )
        for (idx, rco) in enumerate(coininputoutputs):
            co = CoinOutput.from_json(obj=rco)
            co.id = transaction.coin_inputs[idx].parentid
            transaction.coin_inputs[idx].parent_output = co
            # add the coin input (custodyfee) info if available
            if 'custody' in rco and 'iscustodyfee' in rco['custody'] and not rco['custody']['iscustodyfee']:
                transaction.coin_inputs[idx].parent_output.custody_fee = Currency.from_json(rco['custody']['custodyfee'])
                transaction.coin_inputs[idx].parent_output.spendable_value = Currency.from_json(rco['custody']['spendablevalue'])
                transaction.coin_inputs[idx].parent_output.spent = rco['custody']['spent']
        # add the coin output ids
        coinoutputids = etxn.get("coinoutputids", None) or []
        if len(transaction.coin_outputs) != len(coinoutputids):
            raise j.clients.goldchain.errors.ExplorerInvalidResponse(
                "amount of coin outputs and output identifiers are not matching: {} != {}".format(
                    len(transaction.coin_outputs), len(coinoutputids)
                ),
                endpoint,
                resp,
            )
        for (idx, id) in enumerate(coinoutputids):
            transaction.coin_outputs[idx].id = Hash.from_json(obj=id)
        # add the coin output (custodyfee) info if available
        coinoutputcustodyfees = etxn.get('coinoutputcustodyfees', None) or []
        if len(coinoutputcustodyfees) > 0:
            if len(transaction.coin_outputs) != len(coinoutputcustodyfees):
                raise j.clients.goldchain.errors.ExplorerInvalidResponse(
                    "amount of coin outputs and output info are not matching: {} != {}".format(
                        len(transaction.coin_outputs), len(coinoutputcustodyfees)), endpoint, resp)
            for (idx, coinoutputcustodyfee) in enumerate(coinoutputcustodyfees):
                if 'iscustodyfee' in coinoutputcustodyfee and not coinoutputcustodyfee['iscustodyfee']:
                    transaction.coin_outputs[idx].custody_fee = Currency.from_json(coinoutputcustodyfee['custodyfee'])
                    transaction.coin_outputs[idx].spendable_value = Currency.from_json(coinoutputcustodyfee['spendablevalue'])
                    transaction.coin_outputs[idx].spent = coinoutputcustodyfee['spent']
        # add the parent (blockstake) outputs
        blockstakeinputoutputs = etxn.get("blockstakeinputoutputs", None) or []
        if len(transaction.blockstake_inputs) != len(blockstakeinputoutputs):
            raise j.clients.goldchain.errors.ExplorerInvalidResponse(
                "amount of blockstake inputs and parent outputs are not matching: {} != {}".format(
                    len(transaction.blockstake_inputs), len(blockstakeinputoutputs)
                ),
                endpoint,
                resp,
            )
        for (idx, bso) in enumerate(blockstakeinputoutputs):
            bso = BlockstakeOutput.from_json(obj=bso)
            bso.id = transaction.blockstake_inputs[idx].parentid
            transaction.blockstake_inputs[idx].parent_output = bso
        # add the blockstake output ids
        blockstakeoutputids = etxn.get("blockstakeoutputids", None) or []
        if len(transaction.blockstake_outputs) != len(blockstakeoutputids):
            raise j.clients.goldchain.errors.ExplorerInvalidResponse(
                "amount of blokstake outputs and output identifiers are not matching: {} != {}".format(
                    len(transaction.blockstake_inputs), len(blockstakeoutputids)
                ),
                endpoint,
                resp,
            )
        for (idx, id) in enumerate(blockstakeoutputids):
            transaction.blockstake_outputs[idx].id = Hash.from_json(obj=id)
        # set the unconfirmed state
        transaction.unconfirmed = etxn.get("unconfirmed", False)
        # set the height of the transaction only if confirmed
        if not transaction.unconfirmed:
            transaction.height = int(etxn.get("height", -1))
            transaction.transaction_time = int(etxn.get("timestamp", -1))
            transaction.transaction_order = int(etxn.get("order", -1))
            transaction.blockid = etxn.get('parent')
            # add the miner payouts
            miner_payouts = []
            rewardIndex = 0 if self.network_type == 'DEV' else -1
            payoutDelay = 10 if self.network_type == 'DEV' else 720
            for (idx, mp) in enumerate(etxn.get('minerpayouts', [])):
                dmp = MinerPayout.from_json(mp)
                dmp.is_reward = (idx == rewardIndex)
                dmp.unlockheight = transaction.height + payoutDelay
                miner_payouts.append(dmp)
            transaction.miner_payouts = miner_payouts
            if rewardIndex == -1: # take first one available
                if len(transaction.miner_payouts) >= 1:
                    transaction.fee_payout_id = transaction.miner_payouts[0].id
                    transaction.fee_payout_address = transaction.miner_payouts[0].unlockhash
            elif len(transaction.miner_payouts) >= 2:
                transaction.fee_payout_id = transaction.miner_payouts[1].id
                transaction.fee_payout_address = transaction.miner_payouts[1].unlockhash
        # return the transaction
        return transaction

    @property
    def explorer_get(self):
        """
        Utility method that gets the data on the given endpoint,
        but in a method so it can be overriden, internally, for Testing purposes.
        """
        return self._explorer_get

    def _explorer_get(self, endpoint):
        """
        Private utility method that gets the data on the given endpoint,
        but in a method so it can be overriden for Testing purposes.
        """
        return j.clients.goldchain.explorer.get(addresses=self.explorer_addresses, endpoint=endpoint)

    @property
    def explorer_post(self):
        """
        Utility method that sets the data on the given endpoint,
        but in a method so it can be overriden, internally, for Testing purposes.
        """
        return self._explorer_post

    def _explorer_post(self, endpoint, data):
        """
        Private utility method that sets the data on the given endpoint,
        but in a method so it can be overriden for Testing purposes.
        """
        return j.clients.goldchain.explorer.post(addresses=self.explorer_addresses, endpoint=endpoint, data=data)

    def _normalize_id(self, id):
        return str(Hash(value=id))


class ExplorerBlockchainInfo:
    def __init__(self, last_block):
        self._last_block = last_block

    @property
    def last_block(self):
        """
        Last known block.
        """
        return self._last_block

    @property
    def blockid(self):
        """
        ID of last known block.
        """
        return str(self.last_block.id)

    @property
    def height(self):
        """
        Current height of the blockchain.
        """
        return self.last_block.height

    @property
    def timestamp(self):
        """
        The timestamp of the last registered block on the chain.
        """
        return self.last_block.timestamp

    def __repr__(self):
        return "Block {} at height {}, published on {}, is the last known block.".format(
            self.blockid, self.height, j.data.time.epoch2HRDateTime(self.timestamp)
        )


class ExplorerUnlockhashResult:
    def __init__(self, unlockhash, transactions, multisig_addresses, client=None):
        """
        All the info found for a given unlock hash, as reported by an explorer.
        """
        self._unlockhash = unlockhash
        self._transactions = transactions
        self._multisig_addresses = multisig_addresses
        # client is optionally used to get additional info in a lazy manner should it be needed
        if client is not None and not isinstance(client, GoldChainClient):
            raise j.exceptions.Value("client cannot be set to a value of type {}".format(type(client)))
        self._client = client

    @property
    def unlockhash(self):
        """
        Unlock hash looked up.
        """
        return self._unlockhash

    @property
    def transactions(self):
        """
        Transactions linked to the looked up unlockhash.
        """
        return self._transactions

    @property
    def multisig_addresses(self):
        """
        Addresses of multisignature wallets co-owned by the looked up unlockhash.
        """
        return self._multisig_addresses

    def __repr__(self):
        return "Found {} transaction(s) and {} multisig address(es) for {}".format(
            len(self._transactions), len(self._multisig_addresses), str(self._unlockhash)
        )

    def balance(self, info=None):
        """
        Compute a balance report for the defined unlockhash,
        based on the transactions of this report.
        """
        if self._unlockhash.type == UnlockHashType.MULTI_SIG:
            balance = self._multisig_balance(info)
        else:
            balance = WalletBalance()
            # collect the balance
            address = str(self.unlockhash)
            for txn in self.transactions:
                for ci in txn.coin_inputs:
                    if str(ci.parent_output.condition.unlockhash) == address:
                        balance.output_add(ci.parent_output, confirmed=(not txn.unconfirmed), spent=True)
                for co in txn.coin_outputs:
                    if str(co.condition.unlockhash) == address:
                        balance.output_add(co, confirmed=(not txn.unconfirmed), spent=False)
        # if a client is set, attach the current chain info to it
        info = self._get_info(info)
        if info is not None:
            balance.chain_height = info.height
            balance.chain_time = info.timestamp
            balance.chain_blockid = info.blockid
        return balance

    def _multisig_balance(self, info):
        balance = None
        # collect the balance
        address = str(self.unlockhash)
        for txn in self.transactions:
            for ci in txn.coin_inputs:
                if str(ci.parent_output.condition.unlockhash) == address:
                    oc = ci.parent_output.condition.unwrap()
                    if not isinstance(oc, ConditionMultiSignature):
                        raise j.exceptions.Value(
                            "multi signature's output condition cannot be of type {} (expected: ConditionMultiSignature)".format(
                                type(oc)
                            )
                        )
                    if balance is None:
                        balance = MultiSigWalletBalance(owners=oc.unlockhashes, signature_count=oc.required_signatures)
                    balance.output_add(ci.parent_output, confirmed=(not txn.unconfirmed), spent=True)
            for co in txn.coin_outputs:
                if str(co.condition.unlockhash) == address:
                    oc = co.condition.unwrap()
                    if not isinstance(oc, ConditionMultiSignature):
                        raise j.exceptions.Value(
                            "multi signature's output condition cannot be of type {} (expected: ConditionMultiSignature)".format(
                                type(oc)
                            )
                        )
                    if balance is None:
                        balance = MultiSigWalletBalance(owners=oc.unlockhashes, signature_count=oc.required_signatures)
                    balance.output_add(co, confirmed=(not txn.unconfirmed), spent=False)
            if isinstance(txn, TransactionV128):
                oc = txn.mint_condition
                balance = MultiSigWalletBalance(owners=oc.unlockhashes, signature_count=oc.required_signatures)
        if balance is None:
            return WalletBalance()  # return empty balance
        return balance

    def _get_info(self, info):
        if info is not None or self._client is None:
            return info
        return self._client.blockchain_info_get()


from typing import NamedTuple


class ExplorerBlock:
    def __init__(self, id, parentid, height, timestamp, transactions, miner_payouts):
        """
        A Block, registered on a TF blockchain, as reported by an explorer.
        """
        self._id = id
        self._parentid = parentid
        self._height = height
        self._timestamp = timestamp
        self._transactions = transactions
        self._miner_payouts = miner_payouts

    @property
    def id(self):
        """
        Identifier of this block.
        """
        return str(self._id)

    @property
    def parentid(self):
        """
        Identifier the parent of this block.
        """
        return str(self._parentid)

    @property
    def height(self):
        """
        Height at which this block is registered.
        """
        return self._height

    @property
    def timestamp(self):
        """
        Timestamp on which this block is registered.
        """
        return self._timestamp

    @property
    def transactions(self):
        """
        Transactions that are included in this block.
        """
        return self._transactions

    @property
    def miner_payouts(self):
        """
        Miner payouts that are included in this block.
        """
        return self._miner_payouts

    def __str__(self):
        return str(self.id)

    __repr__ = __str__


class ExplorerMinerPayout:
    def __init__(self, id, value, unlockhash):
        """
        A single miner payout, as reported by an explorer.
        """
        self._id = id
        self._value = value
        self._unlockhash = unlockhash

    @property
    def id(self):
        """
        Identifier of this miner payout.
        """
        return str(self._id)

    @property
    def value(self):
        """
        Value of this miner payout.
        """
        return self._value

    @property
    def unlockhash(self):
        """
        Unlock hash that received this miner payout's value.
        """
        return str(self._unlockhash)

    def __str__(self):
        return str(self.id)

    __repr__ = __str__


class GoldChainMinterClient:
    """
    GoldChainMinterClient contains all Coin Minting logic.
    """

    def __init__(self, client):
        if not isinstance(client, GoldChainClient):
            raise j.exceptions.Value("client is expected to be a GoldChainClient")
        self._client = client

    def condition_get(self, height=None):
        """
        Get the latest (coin) mint condition or the (coin) mint condition at the specified block height.

        @param height: if defined the block height at which to look up the (coin) mint condition (if none latest block will be used)
        """
        # define the endpoint
        endpoint = "/explorer/mintcondition"
        if height is not None:
            if not isinstance(height, (int, str)):
                raise j.exceptions.Value("invalid block height given")
            height = int(height)
            endpoint += "/%d" % (height)

        # get the mint condition
        resp = self._client.explorer_get(endpoint=endpoint)
        resp = j.data.serializers.json.loads(resp)

        try:
            # return the decoded mint condition
            return j.clients.goldchain.types.conditions.from_json(obj=resp["mintcondition"])
        except KeyError as exc:
            # return a KeyError as an invalid Explorer Response
            raise j.clients.goldchain.errors.ExplorerInvalidResponse(str(exc), endpoint, resp) from exc


class GoldChainAuthcoinClient:
    """
    GoldChainAuthcoinClient contains all Auth Coin logic.
    """

    def __init__(self, client):
        if not isinstance(client, GoldChainClient):
            raise j.exceptions.Value("client is expected to be a GoldChainClient")
        self._client = client

    def condition_get(self, height=None):
        """
        Get the latest auth coin condition or the auth coin condition at the specified block height.

        @param height: if defined the block height at which to look up the auth coin condition (if none latest block will be used)
        """
        # define the endpoint
        endpoint = "/explorer/authcoin/condition"
        if height is not None:
            if not isinstance(height, (int, str)):
                raise j.exceptions.Value("invalid block height given")
            height = int(height)
            endpoint += "/%d" % (height)

        # get the mint condition
        resp = self._client.explorer_get(endpoint=endpoint)
        resp = j.data.serializers.json.loads(resp)

        try:
            # return the decoded mint condition
            return j.clients.goldchain.types.conditions.from_json(obj=resp["authcondition"])
        except KeyError as exc:
            # return a KeyError as an invalid Explorer Response
            raise j.clients.goldchain.errors.ExplorerInvalidResponse(str(exc), endpoint, resp) from exc

    def is_authorized(self, unlockhash):
        """
        Query the explorer backend to see if an address is currently authorized.

        @param unlockhash: UnlockHash for which to look up the authorizaton state
        """
        if not isinstance(unlockhash, UnlockHash):
            raise j.exceptions.Value("Argument must be of type UnlockHash, got type {}".format(type(unlockhash)))
        # define endpoint
        endpoint = "/explorer/authcoin/status?addr={}".format(unlockhash.json())
        # parse response
        resp = self._client.explorer_get(endpoint=endpoint)
        resp = j.data.serializers.json.loads(resp)

        try:
            # parse response, this returns an array of json booleans, we only check 1 address in this function
            # so it's always index 0 we are interested in.
            return resp["auths"][0]
        except KeyError as exc:
            # invalid explorer response
            raise j.clients.goldchain.errors.ExplorerInvalidResponse(str(exc), endpoint, resp) from exc
        except IndexError as exc:
            # also invalid explorer response
            raise j.clients.goldchain.errors.ExplorerInvalidResponse(str(exc), endpoint, resp) from exc
