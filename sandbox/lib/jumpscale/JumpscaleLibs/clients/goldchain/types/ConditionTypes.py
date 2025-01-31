from Jumpscale import j

import hashlib
from datetime import datetime, timedelta

from .PrimitiveTypes import BinaryData

_CONDITION_TYPE_NIL = 0
_CONDITION_TYPE_UNLOCK_HASH = 1
_CONDITION_TYPE_ATOMIC_SWAP = 2
_CONDITION_TYPE_LOCKTIME = 3
_CONDITION_TYPE_MULTI_SIG = 4

_CONDITION_TYPE_CUSTODY_FEE = 128


class ConditionFactory(j.baseclasses.object):
    """
    Condition Factory class
    """

    def from_json(self, obj):
        ct = obj.get("type", 0)
        if ct == _CONDITION_TYPE_NIL:
            return ConditionNil.from_json(obj)
        if ct == _CONDITION_TYPE_UNLOCK_HASH:
            return ConditionUnlockHash.from_json(obj)
        if ct == _CONDITION_TYPE_ATOMIC_SWAP:
            return ConditionAtomicSwap.from_json(obj)
        if ct == _CONDITION_TYPE_LOCKTIME:
            return ConditionLockTime.from_json(obj)
        if ct == _CONDITION_TYPE_MULTI_SIG:
            return ConditionMultiSignature.from_json(obj)
        if ct == _CONDITION_TYPE_CUSTODY_FEE:
            return ConditionCustodyFee.from_json(obj)
        raise j.exceptions.Value("unsupport condition type {}".format(ct))

    def from_recipient(self, recipient, lock=None):
        """
        Create automatically a recipient condition based on any accepted pythonic value (combo).
        """

        # define base condition
        if isinstance(recipient, ConditionBaseClass):
            condition = recipient
        else:
            condition = None
            if recipient is None:
                # free-for-all wallet
                condition = self.nil_new()
            elif isinstance(recipient, (UnlockHash, str)):
                # single sig wallet
                condition = self.unlockhash_new(unlockhash=recipient)
            elif isinstance(recipient, (bytes, bytearray)):
                # single sig wallet
                condition = self.unlockhash_new(unlockhash=recipient.hex())
            elif isinstance(recipient, list):
                # multisig to an all-for-all wallet
                condition = self.multi_signature_new(min_nr_sig=len(recipient), unlockhashes=recipient)
            elif isinstance(recipient, tuple):
                # multisig wallet with custom x-of-n definition
                if len(recipient) != 2:
                    raise j.exceptions.Value(
                        "recipient is expected to be a tupple of 2 values in the form (sigcount,hashes) or (hashes,sigcount), cannot be of length {}".format(
                            len(recipient)
                        )
                    )
                # allow (sigs,hashes) as well as (hashes,sigs)
                if isinstance(recipient[0], int):
                    condition = self.multi_signature_new(min_nr_sig=recipient[0], unlockhashes=recipient[1])
                else:
                    condition = self.multi_signature_new(min_nr_sig=recipient[1], unlockhashes=recipient[0])
            else:
                raise j.exceptions.Value("invalid type for recipient parameter: {}".format(type(recipient)))

        # if lock is defined, define it as a locktime value
        if lock is not None:
            condition = self.locktime_new(lock=lock, condition=condition)

        # return condition
        return condition

    def nil_new(self):
        """
        Create a new Nil Condition, which can be fulfilled by any SingleSig. Fulfillment.
        """
        return ConditionNil()

    def unlockhash_new(self, unlockhash=None):
        """
        Create a new UnlockHash Condition, which can be
        fulfilled by the matching SingleSig. Fulfillment.
        """
        return ConditionUnlockHash(unlockhash=unlockhash)

    def atomic_swap_new(self, sender=None, receiver=None, hashed_secret=None, lock_time=None):
        """
        Create a new AtomicSwap Condition, which can be
        fulfilled by the AtomicSwap Fulfillment.
        """
        return ConditionAtomicSwap(sender=sender, receiver=receiver, hashed_secret=hashed_secret, lock_time=lock_time)

    def locktime_new(self, lock=None, condition=None):
        """
        Create a new LockTime Condition, which can be fulfilled by a fulfillment
        when the relevant timestamp/block has been reached as well as the fulfillment fulfills the internal condition.
        """
        return ConditionLockTime(lock=lock, condition=condition)

    def multi_signature_new(self, min_nr_sig=0, unlockhashes=None):
        """
        Create a new MultiSignature Condition, which can be fulfilled by a matching MultiSignature Fulfillment.
        """
        return ConditionMultiSignature(unlockhashes=unlockhashes, min_nr_sig=min_nr_sig)

    def custody_fee_new(computation_time=0):
        """
        Create a new CustodyFee Condition, which cannot be fulfilled and is used only on Goldchain.
        """
        return ConditionCustodyFee(computation_time=computation_time)

    def output_lock_new(self, value):
        """
        Creates a new output lock.
        """
        return OutputLock(value=value)

    def test(self):
        """
        kosmos 'j.clients.goldchain.types.conditions.test()'
        """

        # some util test methods
        def test_encoded(encoder, obj, expected):
            encoder.add(obj)
            output = encoder.data.hex()
            if expected != output:
                msg = "{} != {}".format(expected, output)
                raise Exception("unexpected encoding result: " + msg)

        def test_sia_encoded(obj, expected):
            test_encoded(j.data.rivine.encoder_sia_get(), obj, expected)

        def test_rivine_encoded(obj, expected):
            test_encoded(j.data.rivine.encoder_rivine_get(), obj, expected)

        # Nil conditions are supported
        for n_json in [{}, {"type": 0}, {"type": 0, "data": None}, {"type": 0, "data": {}}]:
            cn = self.from_json(n_json)
            assert cn.json() == {"type": 0}
            test_sia_encoded(cn, "000000000000000000")
            test_rivine_encoded(cn, "0000")
            assert (
                str(cn.unlockhash) == "000000000000000000000000000000000000000000000000000000000000000000000000000000"
            )

        # UnlockHash conditions are supported
        uh_json = {
            "type": 1,
            "data": {"unlockhash": "000000000000000000000000000000000000000000000000000000000000000000000000000000"},
        }
        cuh = self.from_json(uh_json)
        assert cuh.json() == uh_json
        test_sia_encoded(cuh, "012100000000000000000000000000000000000000000000000000000000000000000000000000000000")
        test_rivine_encoded(cuh, "0142000000000000000000000000000000000000000000000000000000000000000000")
        assert str(cuh.unlockhash) == "000000000000000000000000000000000000000000000000000000000000000000000000000000"

        # AtomicSwap conditions are supported
        as_json = {
            "type": 2,
            "data": {
                "sender": "01e89843e4b8231a01ba18b254d530110364432aafab8206bea72e5a20eaa55f70b1ccc65e2105",
                "receiver": "01a6a6c5584b2bfbd08738996cd7930831f958b9a5ed1595525236e861c1a0dc353bdcf54be7d8",
                "hashedsecret": "abc543defabc543defabc543defabc543defabc543defabc543defabc543defa",
                "timelock": 1522068743,
            },
        }
        cas = self.from_json(as_json)
        assert cas.json() == as_json
        test_sia_encoded(
            cas,
            "026a0000000000000001e89843e4b8231a01ba18b254d530110364432aafab8206bea72e5a20eaa55f7001a6a6c5584b2bfbd08738996cd7930831f958b9a5ed1595525236e861c1a0dc35abc543defabc543defabc543defabc543defabc543defabc543defabc543defa07edb85a00000000",
        )
        test_rivine_encoded(
            cas,
            "02d401e89843e4b8231a01ba18b254d530110364432aafab8206bea72e5a20eaa55f7001a6a6c5584b2bfbd08738996cd7930831f958b9a5ed1595525236e861c1a0dc35abc543defabc543defabc543defabc543defabc543defabc543defabc543defa07edb85a00000000",
        )
        assert str(cas.unlockhash) == "026e18a53ec6e571985ea7ed404a5d51cf03a72240065952034383100738627dbf949046789e30"

        # MultiSig conditions are supported
        ms_json = {
            "type": 4,
            "data": {
                "unlockhashes": [
                    "01e89843e4b8231a01ba18b254d530110364432aafab8206bea72e5a20eaa55f70b1ccc65e2105",
                    "01a6a6c5584b2bfbd08738996cd7930831f958b9a5ed1595525236e861c1a0dc353bdcf54be7d8",
                ],
                "minimumsignaturecount": 2,
            },
        }
        cms = self.from_json(ms_json)
        assert cms.json() == ms_json
        test_sia_encoded(
            cms,
            "0452000000000000000200000000000000020000000000000001e89843e4b8231a01ba18b254d530110364432aafab8206bea72e5a20eaa55f7001a6a6c5584b2bfbd08738996cd7930831f958b9a5ed1595525236e861c1a0dc35",
        )
        test_rivine_encoded(
            cms,
            "049602000000000000000401e89843e4b8231a01ba18b254d530110364432aafab8206bea72e5a20eaa55f7001a6a6c5584b2bfbd08738996cd7930831f958b9a5ed1595525236e861c1a0dc35",
        )
        assert str(cms.unlockhash) == "0313a5abd192d1bacdd1eb518fc86987d3c3d1cfe3c5bed68ec4a86b93b2f05a89f67b89b07d71"

        # LockTime conditions are supported:
        # - wrapping a nil condition
        lt_n_json = {"type": 3, "data": {"locktime": 500000000, "condition": {"type": 0}}}
        clt_n = self.from_json(lt_n_json)
        assert clt_n.json() == lt_n_json
        test_sia_encoded(clt_n, "0309000000000000000065cd1d0000000000")
        test_rivine_encoded(clt_n, "03120065cd1d0000000000")
        assert str(clt_n.unlockhash) == "000000000000000000000000000000000000000000000000000000000000000000000000000000"
        # - wrapping an unlock hash condition
        lt_uh_json = {"type": 3, "data": {"locktime": 500000000, "condition": uh_json}}
        clt_uh = self.from_json(lt_uh_json)
        assert clt_uh.json() == lt_uh_json
        test_sia_encoded(
            clt_uh,
            "032a000000000000000065cd1d0000000001000000000000000000000000000000000000000000000000000000000000000000",
        )
        test_rivine_encoded(
            clt_uh, "03540065cd1d0000000001000000000000000000000000000000000000000000000000000000000000000000"
        )
        assert (
            str(clt_uh.unlockhash) == "000000000000000000000000000000000000000000000000000000000000000000000000000000"
        )
        # - wrapping a multi-sig condition
        lt_ms_json = {"type": 3, "data": {"locktime": 500000000, "condition": ms_json}}
        clt_ms = self.from_json(lt_ms_json)
        assert clt_ms.json() == lt_ms_json
        test_sia_encoded(
            clt_ms,
            "035b000000000000000065cd1d00000000040200000000000000020000000000000001e89843e4b8231a01ba18b254d530110364432aafab8206bea72e5a20eaa55f7001a6a6c5584b2bfbd08738996cd7930831f958b9a5ed1595525236e861c1a0dc35",
        )
        test_rivine_encoded(
            clt_ms,
            "03a80065cd1d000000000402000000000000000401e89843e4b8231a01ba18b254d530110364432aafab8206bea72e5a20eaa55f7001a6a6c5584b2bfbd08738996cd7930831f958b9a5ed1595525236e861c1a0dc35",
        )
        assert (
            str(clt_ms.unlockhash) == "0313a5abd192d1bacdd1eb518fc86987d3c3d1cfe3c5bed68ec4a86b93b2f05a89f67b89b07d71"
        )

        # FYI, Where lock times are used, it should be known that these are pretty flexible in definition
        assert OutputLock().value == 0
        assert OutputLock(value=0).value == 0
        assert OutputLock(value=1).value == 1
        assert OutputLock(value=1549483822).value == 1549483822
        # if current_timestamp is not defined, the current time is used: int(datetime.now().timestamp)
        assert OutputLock(value="+7d", current_timestamp=1).value == 604801
        assert OutputLock(value="+7d12h5s", current_timestamp=1).value == 648006
        assert OutputLock(value="30/11/2020").value == 1606694400
        assert (
            OutputLock(value="11/30").value == OutputLock(value="30/11/{}".format(datetime.now().year)).value
        )  # year is optional
        assert OutputLock(value="30/11/2020 23:59:59").value == 1606780799
        assert OutputLock(value="30/11/2020 23:59").value == 1606780740  # seconds is optional


class OutputLock:
    # as defined by Rivine
    _MIN_TIMESTAMP_VALUE = 500 * 1000 * 1000

    def __init__(self, value=None, current_timestamp=None):
        if current_timestamp is None:
            current_timestamp = int(datetime.now().timestamp())
        elif not isinstance(current_timestamp, int):
            raise j.exceptions.Value("current timestamp has to be an integer")

        if value is None:
            self._value = 0
        elif isinstance(value, OutputLock):
            self._value = value.value
        elif isinstance(value, int):
            if value < 0:
                raise j.exceptions.Value("output lock value cannot be negative")
            self._value = int(value)
        elif isinstance(value, str):
            value = value.lstrip()
            if value[0] == "+":
                # interpret string as a duration
                offset = j.data.types.duration.fromString(value[1:])
                self._value = current_timestamp + offset
            else:
                # interpret string as a datetime
                self._value = j.data.types.datetime.fromString(value)
        elif isinstance(value, timedelta):
            self._value = current_timestamp + int(value.total_seconds())
        elif isinstance(value, datetime):
            self._value = int(value.timestamp())
        else:
            raise j.exceptions.Value("cannot set OutputLock using invalid type {}".format(type(value)))

    def __int__(self):
        return self._value

    def __str__(self):
        if self.is_timestamp:
            return j.data.time.epoch2HRDateTime(self._value)
        return str(self._value)

    __repr__ = __str__

    @property
    def value(self):
        """
        The internal lock (integral) value.
        """
        return self._value

    @property
    def is_timestamp(self):
        """
        Returns whether or not this value is a timestamp.
        """
        return self._value >= OutputLock._MIN_TIMESTAMP_VALUE

    def locked_check(self, height, time):
        """
        Check if the the output is still locked on the given block height/time.
        """
        if self.is_timestamp:
            return time < self._value
        return height < self._value


from abc import abstractmethod

from .BaseDataType import BaseDataTypeClass


class ConditionBaseClass(BaseDataTypeClass):
    @classmethod
    def from_json(cls, obj):
        ff = cls()
        ct = obj.get("type", 0)
        if ff.type != ct:
            raise j.exceptions.Value("condition is expected to be of type {}, not {}".format(ff.type, ct))
        ff.from_json_data_object(obj.get("data", {}))
        return ff

    @property
    @abstractmethod
    def type(self):
        pass

    @property
    def lock(self):
        return OutputLock()

    @property
    @abstractmethod
    def unlockhash(self):
        """
        The unlock hash for this condition.
        """
        pass

    def unwrap(self):
        """
        Return the most inner condition, should it apply to this condition,
        otherwise the condition itself will be returned.
        """
        return self

    @abstractmethod
    def from_json_data_object(self, data):
        pass

    @abstractmethod
    def json_data_object(self):
        pass

    def json(self):
        obj = {"type": self.type}
        data = self.json_data_object()
        if data:
            obj["data"] = data
        return obj

    @abstractmethod
    def sia_binary_encode_data(self, encoder):
        pass

    def sia_binary_encode(self, encoder):
        """
        Encode this Condition according to the Sia Binary Encoding format.
        """
        encoder.add_array(bytearray([int(self.type)]))
        data_enc = j.data.rivine.encoder_sia_get()
        self.sia_binary_encode_data(data_enc)
        encoder.add_slice(data_enc.data)

    @abstractmethod
    def rivine_binary_encode_data(self, encoder):
        pass

    def rivine_binary_encode(self, encoder):
        """
        Encode this Condition according to the Rivine Binary Encoding format.
        """
        encoder.add_int8(int(self.type))
        data_enc = j.data.rivine.encoder_rivine_get()
        self.rivine_binary_encode_data(data_enc)
        encoder.add_slice(data_enc.data)


from enum import IntEnum


class UnlockHashType(IntEnum):
    NIL = 0
    PUBLIC_KEY = 1
    ATOMIC_SWAP = 2
    MULTI_SIG = 3

    CUSTODY_FEE = 128

    @classmethod
    def from_json(cls, obj):
        if type(obj) is str:
            obj = int(obj)
        elif not isinstance(obj, int):
            raise j.exceptions.Value(
                "UnlockHashType is expected to be JSON-encoded as an int, not {}".format(type(obj))
            )
        return cls(obj)  # int -> enum

    def json(self):
        return int(self)


class UnlockHash(BaseDataTypeClass):
    """
    An UnlockHash is a specially constructed hash of the UnlockConditions type,
    with a fixed binary length of 33 and a fixed string length of 78 (string version includes a checksum).
    """

    _TYPE_SIZE_HEX = 2
    _CHECKSUM_SIZE = 6
    _CHECKSUM_SIZE_HEX = _CHECKSUM_SIZE * 2
    _HASH_SIZE = 32
    _HASH_SIZE_HEX = _HASH_SIZE * 2
    _TOTAL_SIZE_HEX = _TYPE_SIZE_HEX + _CHECKSUM_SIZE_HEX + _HASH_SIZE_HEX

    def __init__(self, type=None, hash=None):
        self._type = UnlockHashType.NIL
        self.type = type
        self._hash = j.clients.goldchain.types.hash_new()
        self.hash = hash

    @classmethod
    def from_json(cls, obj):
        if not isinstance(obj, str):
            raise j.exceptions.Value("UnlockHash is expected to be JSON-encoded as an str, not {}".format(type(obj)))
        if len(obj) != UnlockHash._TOTAL_SIZE_HEX:
            raise j.exceptions.Value(
                "UnlockHash is expexcted to be of length {} when JSON-encoded, not of length {}".format(
                    UnlockHash._TOTAL_SIZE_HEX, len(obj)
                )
            )

        t = UnlockHashType(int(obj[: UnlockHash._TYPE_SIZE_HEX], 16))
        h = j.clients.goldchain.types.hash_new(
            value=obj[UnlockHash._TYPE_SIZE_HEX : UnlockHash._TYPE_SIZE_HEX + UnlockHash._HASH_SIZE_HEX]
        )
        uh = cls(type=t, hash=h)

        if t == UnlockHashType.NIL:
            expectedNH = b"\x00" * UnlockHash._HASH_SIZE
            if h.value != expectedNH:
                raise j.exceptions.Value("unexpected nil hash {}".format(h.value.hex()))
        else:
            expected_checksum = uh._checksum()[: UnlockHash._CHECKSUM_SIZE].hex()
            checksum = obj[-UnlockHash._CHECKSUM_SIZE_HEX :]
            if expected_checksum != checksum:
                raise j.exceptions.Value("unexpected checksum {}, expected {}".format(checksum, expected_checksum))

        return uh

    @property
    def type(self):
        return self._type

    @type.setter
    def type(self, value):
        if value == None:
            value = UnlockHashType.NIL
        elif not isinstance(value, UnlockHashType):
            raise j.exceptions.Value("UnlockHash's type has to be of type UnlockHashType, not {}".format(type(value)))
        self._type = value

    @property
    def hash(self):
        return self._hash

    @hash.setter
    def hash(self, value):
        self._hash.value = value

    def __str__(self):
        checksum = self._checksum()[: UnlockHash._CHECKSUM_SIZE].hex()
        return "{}{}{}".format(bytearray([int(self._type)]).hex(), str(self._hash), checksum)

    def _checksum(self):
        if self._type == UnlockHashType.NIL:
            return b"\x00" * UnlockHash._CHECKSUM_SIZE
        e = j.data.rivine.encoder_rivine_get()
        e.add_int8(int(self._type))
        e.add(self._hash)
        return bytearray.fromhex(j.data.hash.blake2_string(e.data))

    __repr__ = __str__

    json = __str__

    def __eq__(self, other):
        other = UnlockHash._op_other_as_unlockhash(other)
        return self.type == other.type and self.hash == other.hash

    def __ne__(self, other):
        other = UnlockHash._op_other_as_unlockhash(other)
        return self.type != other.type or self.hash != other.hash

    def __hash__(self):
        return hash(str(self))

    @staticmethod
    def _op_other_as_unlockhash(other):
        if isinstance(other, str):
            other = UnlockHash.from_json(other)
        elif not isinstance(other, UnlockHash):
            raise j.exceptions.Value("UnlockHash of type {} is not supported".format(type(other)))
        return other

    def sia_binary_encode(self, encoder):
        """
        Encode this unlock hash according to the Sia Binary Encoding format.
        """
        encoder.add_byte(int(self._type))
        encoder.add(self._hash)

    def rivine_binary_encode(self, encoder):
        """
        Encode this unlock hash according to the Rivine Binary Encoding format.
        """
        encoder.add_int8(int(self._type))
        encoder.add(self._hash)


class ConditionNil(ConditionBaseClass):
    """
    ConditionNil class
    """

    @property
    def type(self):
        return _CONDITION_TYPE_NIL

    @property
    def unlockhash(self):
        return UnlockHash(type=UnlockHashType.NIL)

    def from_json_data_object(self, data):
        if data not in (None, {}):
            raise j.exceptions.Value("unexpected JSON-encoded nil condition {} (type: {})".format(data, type(data)))

    def json_data_object(self):
        return None

    def sia_binary_encode_data(self, encoder):
        pass  # nothing to do

    def rivine_binary_encode_data(self, encoder):
        pass  # nothing to do


class ConditionUnlockHash(ConditionBaseClass):
    """
    ConditionUnlockHash class
    """

    def __init__(self, unlockhash=None):
        self._unlockhash = None
        self.unlockhash = unlockhash

    @property
    def type(self):
        return _CONDITION_TYPE_UNLOCK_HASH

    @property
    def unlockhash(self):
        if self._unlockhash is None:
            return UnlockHash()
        return self._unlockhash

    @unlockhash.setter
    def unlockhash(self, value):
        if value is None:
            self._unlockhash = None
            return
        if isinstance(value, UnlockHash):
            self._unlockhash = value
            return
        self._unlockhash = UnlockHash.from_json(value)

    def from_json_data_object(self, data):
        self.unlockhash = UnlockHash.from_json(data["unlockhash"])

    def json_data_object(self):
        return {"unlockhash": self.unlockhash.json()}

    def sia_binary_encode_data(self, encoder):
        encoder.add(self.unlockhash)

    def rivine_binary_encode_data(self, encoder):
        encoder.add(self.unlockhash)


class AtomicSwapSecret(BinaryData):
    SIZE = 32

    """
    Atomic Swap Secret Object, a special type of BinaryData
    """

    def __init__(self, value=None):
        super().__init__(value, fixed_size=AtomicSwapSecret.SIZE, strencoding="hex")

    @classmethod
    def from_json(cls, obj):
        if not isinstance(obj, str):
            raise j.exceptions.Value("secret is expected to be an encoded string when part of a JSON object")
        return cls(value=obj)

    @classmethod
    def random(cls):
        return cls(value=j.data.idgenerator.generateXByteID(AtomicSwapSecret.SIZE))


class AtomicSwapSecretHash(BinaryData):
    SIZE = 32

    """
    Atomic Swap Secret Hash, a special type of BinaryData
    """

    def __init__(self, value=None):
        super().__init__(value, fixed_size=AtomicSwapSecretHash.SIZE, strencoding="hex")

    @classmethod
    def from_json(cls, obj):
        if not isinstance(obj, str):
            raise j.exceptions.Value("secret hash is expected to be an encoded string when part of a JSON object")
        return cls(value=obj)

    @classmethod
    def from_secret(cls, secret):
        if not isinstance(secret, AtomicSwapSecret):
            raise j.exceptions.Value(
                "secret is expected to be of type AtomicSwapSecret, not to be of type {}".format(type(secret))
            )
        return cls(value=hashlib.sha256(secret.value).digest())


class ConditionAtomicSwap(ConditionBaseClass):
    """
    ConditionAtomicSwap class
    """

    def __init__(self, sender=None, receiver=None, hashed_secret=None, lock_time=None):
        self._sender = None
        self.sender = sender
        self._receiver = None
        self.receiver = receiver
        self._hashed_secret = None
        self.hashed_secret = hashed_secret
        self._lock_time = 0
        self.lock_time = lock_time

    @property
    def type(self):
        return _CONDITION_TYPE_ATOMIC_SWAP

    @property
    def unlockhash(self):
        e = j.data.rivine.encoder_rivine_get()
        self.sia_binary_encode_data(e)
        # need to encode again to add the length
        data = e.data
        e = j.data.rivine.encoder_sia_get()
        e.add_slice(data)
        hash = bytearray.fromhex(j.data.hash.blake2_string(e.data))
        return UnlockHash(type=UnlockHashType.ATOMIC_SWAP, hash=hash)

    @property
    def sender(self):
        if self._sender is None:
            return UnlockHash()
        return self._sender

    @sender.setter
    def sender(self, value):
        if value is None:
            self._sender = None
        else:
            if isinstance(value, str):
                value = UnlockHash.from_json(value)
            elif not isinstance(value, UnlockHash):
                raise j.exceptions.Value(
                    "Atomic Swap's sender unlock hash has to be of type UnlockHash, not {}".format(type(value))
                )
            if value.type not in (UnlockHashType.PUBLIC_KEY, UnlockHashType.NIL):
                raise j.exceptions.Value(
                    "Atomic Swap's sender unlock hash type cannot be {} (expected: 0 or 1)".format(value.type)
                )
            self._sender = value

    @property
    def receiver(self):
        if self._receiver is None:
            return UnlockHash()
        return self._receiver

    @receiver.setter
    def receiver(self, value):
        if value is None:
            self._receiver = None
        else:
            if isinstance(value, str):
                value = UnlockHash.from_json(value)
            elif not isinstance(value, UnlockHash):
                raise j.exceptions.Value(
                    "Atomic Swap's receiver unlock hash has to be of type UnlockHash, not {}".format(type(value))
                )
            if value.type not in (UnlockHashType.PUBLIC_KEY, UnlockHashType.NIL):
                raise j.exceptions.Value(
                    "Atomic Swap's receiver unlock hash type cannot be {} (expected: 0 or 1)".format(value.type)
                )
            self._receiver = value

    @property
    def hashed_secret(self):
        if self._hashed_secret is None:
            return BinaryData()
        return self._hashed_secret

    @hashed_secret.setter
    def hashed_secret(self, value):
        if value is None:
            self._hashed_secret = None
        else:
            self._hashed_secret = AtomicSwapSecretHash(value=value)

    @property
    def lock_time(self):
        return self._lock_time

    @lock_time.setter
    def lock_time(self, value):
        if value is None:
            self._lock_time = 0
        else:
            lock = OutputLock(value=value)
            if not lock.is_timestamp:
                raise j.exceptions.Value(
                    "ConditionAtomicSwap only accepts timestamps as the lock value, not block heights: {} is invalid".format(
                        value
                    )
                )
            self._lock_time = lock.value

    def from_json_data_object(self, data):
        self.sender = UnlockHash.from_json(data["sender"])
        self.receiver = UnlockHash.from_json(data["receiver"])
        self.hashed_secret = AtomicSwapSecretHash(value=data["hashedsecret"])
        self.lock_time = int(data["timelock"])

    def json_data_object(self):
        return {
            "sender": self.sender.json(),
            "receiver": self.receiver.json(),
            "hashedsecret": self.hashed_secret.json(),
            "timelock": self.lock_time,
        }

    def sia_binary_encode_data(self, encoder):
        encoder.add_all(self.sender, self.receiver, self.hashed_secret, self.lock_time)

    def rivine_binary_encode_data(self, encoder):
        encoder.add_all(self.sender, self.receiver, self.hashed_secret, self.lock_time)


class ConditionLockTime(ConditionBaseClass):
    """
    ConditionLockTime class
    """

    def __init__(self, condition=None, lock=None):
        self._condition = None
        self.condition = condition
        self._lock = None
        self.lock = lock

    @property
    def type(self):
        return _CONDITION_TYPE_LOCKTIME

    @property
    def unlockhash(self):
        return self.condition.unlockhash

    @property
    def lock(self):
        if self._lock is None:
            return OutputLock()
        return self._lock

    @lock.setter
    def lock(self, value):
        self._lock = OutputLock(value=value)

    @property
    def condition(self):
        if self._condition is None:
            return ConditionUnlockHash()
        return self._condition

    @condition.setter
    def condition(self, value):
        if value is None:
            self._condition = None
            return
        if not isinstance(value, ConditionBaseClass):
            raise j.exceptions.Value(
                "ConditionLockTime's condition is expected to be a subtype of ConditionBaseClass, not of type {}".format(
                    type(value)
                )
            )
        self._condition = value

    def unwrap(self):
        return self.condition

    def from_json_data_object(self, data):
        self.lock = int(data["locktime"])
        cond = j.clients.goldchain.types.conditions.from_json(obj=data["condition"])
        if cond.type not in (_CONDITION_TYPE_UNLOCK_HASH, _CONDITION_TYPE_MULTI_SIG, _CONDITION_TYPE_NIL):
            raise j.exceptions.Value("internal condition of ConditionLockTime cannot be of type {}".format(cond.type))
        self.condition = cond

    def json_data_object(self):
        return {"locktime": self.lock.value, "condition": self.condition.json()}

    def sia_binary_encode_data(self, encoder):
        encoder.add(self.lock.value)
        encoder.add_array(bytearray([int(self.condition.type)]))
        self.condition.sia_binary_encode_data(encoder)

    def rivine_binary_encode_data(self, encoder):
        encoder.add(self.lock.value)
        encoder.add_int8(int(self.condition.type))
        self.condition.rivine_binary_encode_data(encoder)


class ConditionMultiSignature(ConditionBaseClass):
    """
    ConditionMultiSignature class
    """

    def __init__(self, unlockhashes=None, min_nr_sig=0):
        self._unlockhashes = []
        if unlockhashes:
            for uh in unlockhashes:
                self.add_unlockhash(uh)
        self._min_nr_sig = 0
        self.required_signatures = min_nr_sig

    @property
    def type(self):
        return _CONDITION_TYPE_MULTI_SIG

    @property
    def unlockhash(self):
        uhs = sorted(self.unlockhashes, key=lambda uh: str(uh))
        tree = j.clients.goldchain.types.merkle_tree_new()
        tree.push(j.data.rivine.sia_encode(len(uhs)))
        for uh in uhs:
            tree.push(j.data.rivine.sia_encode(uh))
        tree.push(j.data.rivine.sia_encode(self.required_signatures))
        return UnlockHash(type=UnlockHashType.MULTI_SIG, hash=tree.root())

    @property
    def unlockhashes(self):
        return self._unlockhashes

    def add_unlockhash(self, uh):
        if uh is None:
            self._unlockhashes.append(UnlockHash())
        elif isinstance(uh, UnlockHash):
            self._unlockhashes.append(uh)
        elif isinstance(uh, str):
            self._unlockhashes.append(UnlockHash.from_json(uh))
        else:
            raise j.exceptions.Value("cannot add UnlockHash with invalid type {}".format(type(uh)))

    @property
    def required_signatures(self):
        return self._min_nr_sig

    @required_signatures.setter
    def required_signatures(self, value):
        if value is None:
            self._min_nr_sig = 0
            return
        if not isinstance(value, int):
            raise j.exceptions.Value(
                "ConditionMultiSignature's required signatures value is expected to be of type int, not {}".format(
                    type(value)
                )
            )
        self._min_nr_sig = int(value)

    def from_json_data_object(self, data):
        self._min_nr_sig = int(data["minimumsignaturecount"])
        self._unlockhashes = []
        for uh in data["unlockhashes"]:
            uh = UnlockHash.from_json(uh)
            self._unlockhashes.append(uh)

    def json_data_object(self):
        return {"minimumsignaturecount": self._min_nr_sig, "unlockhashes": [uh.json() for uh in self._unlockhashes]}

    def sia_binary_encode_data(self, encoder):
        encoder.add(self._min_nr_sig)
        encoder.add_slice(self._unlockhashes)

    def rivine_binary_encode_data(self, encoder):
        encoder.add_int64(self._min_nr_sig)
        encoder.add_slice(self._unlockhashes)

class ConditionCustodyFee(ConditionBaseClass):
    """
    ConditionCustodyFee class
    """
    def __init__(self, computation_time=None):
        self._computation_time = None
        self.computation_time = computation_time

    @property
    def type(self):
        return _CONDITION_TYPE_CUSTODY_FEE

    @property
    def unlockhash(self):
        return UnlockHash(type=UnlockHashType.CUSTODY_FEE, hash=None)

    @property
    def computation_time(self):
        return self._computation_time
    @computation_time.setter
    def computation_time(self, value):
        if value == None:
            self._computation_time = 0
            return
        if not isinstance(value, int):
            raise j.exceptions.Value("ConditionCustodyFee's computation time value is expected to be of type int, not {}".format(type(value)))
        self._computation_time = value

    def from_json_data_object(self, data):
        self.computation_time = data['computationtime']

    def json_data_object(self):
        return {
            'computationtime': self.computation_time,
        }

    def sia_binary_encode_data(self, encoder):
        encoder.add_int(self.computation_time)

    def rivine_binary_encode_data(self, encoder):
        encoder.add_int64(self.computation_time)
