import gevent
from gevent import monkey

monkey.patch_all(thread=False)
import logging
from nacl import signing

import json
import os
import binascii
from Jumpscale import j
import time


def main(self):
    bcdb = j.data.bcdb.get("tf_workloads")
    customer_signing_key = signing.SigningKey.generate()
    farmer_signing_key = signing.SigningKey.generate()
    signer_signing_key = signing.SigningKey.generate()
    ph_bcdb = j.data.bcdb.get("threebot_phonebook")
    model = ph_bcdb.model_get(url="threebot.phonebook.user.1")

    threebots = [
        {"role": "signer", "pubkey": binascii.hexlify(signer_signing_key.verify_key.encode())},
        {"role": "farmer", "pubkey": binascii.hexlify(farmer_signing_key.verify_key.encode())},
        {"role": "customer", "pubkey": binascii.hexlify(customer_signing_key.verify_key.encode())},
    ]
    tbots = {}
    for threebot in threebots:
        tbot = model.new()
        role = threebot["role"]
        tbot.email = "{}@{}.com".format(role, role)
        tbot.pubkey = threebot["pubkey"]
        tbot.save()
        tbots[role] = tbot

    # TEST01: REGISTER RESERVATION
    reservation_model = bcdb.model_get(url="tfgrid.reservation.1")
    reservation = reservation_model.new()
    reservation.customer_tid = tbots["customer"].id
    # create volume
    volume_model = bcdb.model_get(url="tfgrid.reservation.volume.1")
    volume = volume_model.new()
    volume.farmer_tid = tbots["farmer"].id
    volume.save()
    reservation.data_reservation.volumes.append(volume)
    # create sigining request
    request_model = bcdb.model_get(url="tfgrid.reservation.signing.request.1")
    request = request_model.new()
    request.signers = [tbots["signer"].id]
    request.quorum_min = 1
    request.save()
    reservation.data_reservation.signing_request_provision = request
    reservation.data_reservation.signing_request_delete = request
    reservation.customer_tid = tbots["customer"].id
    ttime = time.time()
    reservation.data_reservation.expiration_provisioning = int(ttime + 3 * 60)
    reservation.data_reservation.expiration_reservation = int(ttime + 5 * 60)
    reservation.json = json.dumps(reservation.data_reservation._ddict)
    reservation_data = reservation._ddict
    # Register reservation
    cl = j.clients.gedis.get(name="threebot")
    reservation = cl.actors.workload_manager.reservation_register(reservation_data)
    assert reservation.next_action == "CREATE"

    # TEST02: GET RESERVATION
    reservation = cl.actors.workload_manager.reservation_get(reservation.id)
    assert reservation.next_action == "CREATE"
    # TEST03: SING RESERVATION
    signature = customer_signing_key.sign(reservation.json.encode())
    cl.actors.workload_manager.sign_customer(reservation.id, binascii.hexlify(signature.signature))
    reservation = cl.actors.workload_manager.reservation_get(reservation.id)
    assert reservation.next_action == "SIGN"
    # TEST04: FILL SIGNING REQUESTS
    signature = signer_signing_key.sign(reservation.json.encode())
    cl.actors.workload_manager.sign_provision(reservation.id, tbots["signer"].id, binascii.hexlify(signature.signature))
    reservation = cl.actors.workload_manager.reservation_get(reservation.id)
    assert reservation.next_action == "PAY"
    # TEST05: FILL FARMER SIGNATURE
    signature = farmer_signing_key.sign(reservation.json.encode())
    cl.actors.workload_manager.sign_farmer(reservation.id, tbots["farmer"].id, binascii.hexlify(signature.signature))
    reservation = cl.actors.workload_manager.reservation_get(reservation.id)
    assert reservation.next_action == "DEPLOY"
    # TEST06: FILL SING DELETE
    signature = signer_signing_key.sign(reservation.json.encode())
    cl.actors.workload_manager.sign_delete(reservation.id, tbots["signer"].id, binascii.hexlify(signature.signature))
    reservation = cl.actors.workload_manager.reservation_get(reservation.id)
    assert reservation.next_action == "DELETE"
