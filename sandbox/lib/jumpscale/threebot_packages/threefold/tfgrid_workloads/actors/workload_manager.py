import time, binascii
from Jumpscale import j
import time


class workload_manager(j.baseclasses.threebot_actor):
    def _init(self, **kwargs):
        bcdb = j.data.bcdb.get("tf_workloads")
        self.reservation_model = bcdb.model_get(url="tfgrid.reservation.1")
        self.workload_zdb_model = bcdb.model_get(url="tfgrid.reservation.zdb.1")
        self.workload_container_model = bcdb.model_get(url="tfgrid.reservation.container.1")
        self.workload_network_model = bcdb.model_get(url="tfgrid.reservation.network.1")
        self.signature_model = bcdb.model_get(url="tfgrid.reservation.signing.signature.1")

        tb_bcdb = j.data.bcdb.get("threebot_phonebook")
        self.user_model = tb_bcdb.model_get(url="threebot.phonebook.user.1")
        self.nacl = j.data.nacl.default

    def _validate_signature(self, payload, signature, key):
        """
        :param payload: the payload
        :param signature: the signature to be verified
        :param key: public key to verify the signature
        """
        key = binascii.unhexlify(key)
        signature = binascii.unhexlify(signature.encode())
        return self.nacl.verify(payload.encode(), signature, verify_key=key)

    def _validate_signing_signature(self, payload, signature):
        """
        :param payload: the payload
        :param signature: the signature object (tfgrid.reservation.signing.signature)
        """
        user = self.user_model.get(signature.tid)
        if not user:
            return False
        return self._validate_signature(payload, signature.signature, user.pubkey)

    def _request_check(self, payload, request, signatures):
        """
        Make sure that at least the quorum_min number of signers signed with a valid signature
        """
        signers = 0
        for signature in signatures:
            if signature.tid not in request.signers:
                continue

            if self._validate_signing_signature(payload, signature):
                signers += 1

            if signers >= request.quorum_min:
                return True
        else:
            return False

    def _validate_customer_signature(self, jsxobj):
        """
        Checks if the signature of the customer is valid or not
        """
        user = self.user_model.get(jsxobj.customer_tid)
        if not user:
            return False
        return self._validate_signature(jsxobj.json, jsxobj.customer_signature, user.pubkey)

    def _validate_farmers_signature(self, jsxobj):
        """
        Checks that all the farmers signed with a valid signature
        """
        farmers_tids = set()
        for workload_type in ["zdbs", "networks", "volumes", "containers"]:
            for workload in getattr(jsxobj.data_reservation, workload_type):
                farmers_tids.add(workload.farmer_tid)

        for signature in jsxobj.signatures_farmer:
            if signature.tid not in farmers_tids:
                continue

            if self._validate_signing_signature(jsxobj.json, signature):
                farmers_tids.remove(signature.tid)

            if not farmers_tids:
                return True
        else:
            return False

    def _reservation_get(self, reservation_id):
        """
        internal method to fetch the reservation object
        will do following
        - fetch from BCDB

        and return using _reservation_check
        """
        try:
            jsxobj = self.reservation_model.get(reservation_id)
            return self._reservation_check(jsxobj)
        except j.exceptions.NotFound:
            raise j.exceptions.NotFound("reservation with id: (%s) not found" % reservation_id)

    def _reservation_check(self, jsxobj):
        """
        will do
            - check signature of the customer to see json ok (created by a valid customer)
                - 'next_action' -> sign
            - check the signatures of all signing requests
                - if the provisioning requests done the 'next_action' -> pay
                - if the farmer signed (means he received payment) the 'next_action' -> deploy
                - if the delete requests done the 'next_action' -> delete
            - if something invalid e.g. signature of customer not ok then 'next_action' -> invalid

        will return the updated jsxobj
        """
        payload = jsxobj.json
        if jsxobj.data_reservation.expiration_reservation < time.time():
            jsxobj.next_action = "delete"

        elif jsxobj.next_action == "create":
            if jsxobj.data_reservation.expiration_provisioning > time.time():
                if jsxobj.customer_signature:
                    if self._validate_customer_signature(jsxobj):
                        jsxobj.next_action = "sign"
                    else:
                        jsxobj.next_action = "invalid"
            else:
                jsxobj.next_action = "invalid"

        elif jsxobj.next_action == "sign":
            signatures = jsxobj.signatures_provision
            request = jsxobj.data_reservation.signing_request_provision
            if self._request_check(payload, request, signatures):
                jsxobj.next_action = "pay"

        elif jsxobj.next_action == "pay":
            if self._validate_farmers_signature(jsxobj):
                jsxobj.next_action = "deploy"

        elif jsxobj.next_action == "deploy":
            signatures = jsxobj.signatures_delete
            request = jsxobj.data_reservation.signing_request_delete
            if self._request_check(payload, request, signatures):
                jsxobj.next_action = "delete"

        jsxobj.save()
        return jsxobj

    def reservation_register(self, reservation, schema_out):
        """
        ```in
        reservation = (O) !tfgrid.reservation.1
        ```

        ```out
        reservation = (O) !tfgrid.reservation.1
        ```
        """
        reservation.next_action = "create"
        reservation = self.reservation_model.new(reservation)
        reservation.save()
        return reservation

    def reservation_get(self, reservation_id, schema_out):
        """
        ```in
        reservation_id = (I)
        ```

        ```out
        !tfgrid.reservation.1
        ```
        """
        return self._reservation_get(reservation_id)

    def sign_provision(self, reservation_id, tid, signature):
        """
        :param reservation_id: is the id of the reservation, unique in BCDB
        :param tid: the threebot id of who signs (in HEX format hexifly in python)
        :param signature: the signature with private key of signer on the json (do reservation_get_json to get json)

        ```in
        reservation_id = (I)
        tid = (I)
        signature = (S)
        ```
        """
        reservation = self._reservation_get(reservation_id)
        signature_obj = self.signature_model.new()
        signature_obj.tid = tid
        signature_obj.signature = signature
        reservation.signatures_provision.append(signature_obj)
        reservation.save()
        return True

    def sign_delete(self, reservation_id, tid, signature):
        """
        :param reservation_id: is the id of the reservation, unique in BCDB
        :param tid: the threebot id of who signs (in HEX format hexifly in python)
        :param signature: the signature with private key of signer on the json (do reservation_get_json to get json)

        ```in
        reservation_id = (I)
        tid = (I)
        signature = (S)
        ```
        """
        reservation = self._reservation_get(reservation_id)
        signature_obj = self.signature_model.new()
        signature_obj.tid = tid
        signature_obj.signature = signature
        reservation.signatures_delete.append(signature_obj)
        reservation.save()
        return True

    def sign_farmer(self, reservation_id, tid, signature):
        """
        :param reservation_id: is the id of the reservation, unique in BCDB
        :param tid: the threebot id of who signs (in HEX format hexifly in python)
        :param signature: the signature with private key of signer on the json (do reservation_get_json to get json)

        ```in
        reservation_id = (I)
        tid = (I)
        signature = (S)
        ```
        """
        reservation = self._reservation_get(reservation_id)
        farmers_tids = set()
        for workload_type in ["zdbs", "networks", "volumes", "containers"]:
            for workload in getattr(reservation.data_reservation, workload_type):
                farmers_tids.add(workload.farmer_tid)
        if tid not in farmers_tids:
            raise j.exceptions.NotFound("Can not find a farmer with tid: {}".format(tid))
        signature_obj = self.signature_model.new()
        signature_obj.tid = tid
        signature_obj.signature = signature
        reservation.signatures_farmer.append(signature_obj)
        reservation.save()
        return True

    def sign_customer(self, reservation_id, signature):
        """
        :param reservation_id: is the id of the reservation, unique in BCDB
        :param signature: the signature with private key of signer on the json (do reservation_get_json to get json)

        ```in
        reservation_id = (I)
        signature = (S)
        ```
        """
        reservation = self._reservation_get(reservation_id)
        reservation.customer_signature = signature
        reservation.save()
        return True
