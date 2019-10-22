# Reservation

The reservation model consists of 2 parts: the reservation data, and the
reservation state. The data is is created entirely when the reservation is created,
and is immutable after this. The state is mutable, and after the reservation has been
created, this will be updated continuously by both the customer threebot and the farmer
threebot (and possibly other threebots who will sign to trigger actions).

## Reservation data

The reservation data is composed of the individual workloads to be deployed, information
about who can sign for the actual deployment and deletion of the workloads, and expiry
times for the reservation. All fields in the data object are immutable after the
reservation is created (i.e. the customer signs the data). Modifications afterwards
will cause the customer signature to become invalid.

## Reservation state

The reservation state is updated throughout the lifetime of the reservation. It also
contains the signatures needed to have the farmer threebot take action. In order for
the farmer threebot to start provisioning the workloads, or delete the workloads,
the `signing_request_provision` and `signing_request_delete`, respectively, need to be filled with
valid signatures. A valid signature is a signature for the reservation data, with a
private key owned by one of the threebots listed in the reservation data (in the
`signatures_provision` and `signatures_delete` fields). These fields also define
the minimum amount of signatures required. For example, a signature request for
provisioning might list 3 threebot ids which can sign, but only specify a `quorum_min`
of 2. As such, only 2 out of the 3 listed threebot ids would need to sign before the
farmer threebot is allowed to deploy the reserved workloads.

### signature validity

A signature is created by signing a piece of data using a private key. Afterwards,
the corresponding public key can be used to check if the signature is valid. A
[signature field](#signingsignature) is valid if it meets the following conditions:

- It contains at least the minimum amount of signatures required, as defined in
the `quorum_min` field of the corresponding [signing request field](#signingrequest), 1 if there is no such
corresponding signing request.
- All signatures are valid with a public key owned by a referenced threebot (referenced
in the aforementioned accompanying [signing request field](#signingrequest) or possibly other field).

#### signature algorithm

- signature algorithm: [ed25519](https://ed25519.cr.yp.to/)
- public key size: 32 bytes
- private key size: 32 bytes
- signature size: 64 bytes

## models

The following is an overview of the models available in the [models](./models) subdirectory,
their fields, and what these fields are used for.

### reservation

The [reservation object](./models/reservation.toml) is the high level object for dealing with a reservation
on the threefold grid. It is composed of the [reservation.data](#reservationdata) object, which holds
all data for the workloads covered by this reservation (and is immutable after it is created),
and additional info for the reservation state.

- data: As explained, the data field holds the [reservation.data](#reservationdata) object, which contains all
low level workloads to be provisioned. After the reservation is created, this field is
immutable.
- json: A representation of the `data` object, in json form. It is directly derived from
the `data` field. As such, it is also immutable. This is the actual input for the signature algorithm.

Next to the reservation data, there is also a reservation state. These fields describe
the current state of the reservation, as well as the signatures provided by authorized threebots
to advance the state of the reservation.

- next_action: This field describes what action should be performed next. Given the enum
values, we can roughly describe a reservation life cycle as follows: After a reservation
is initially created, the customer (or rather, his threebot) needs to `sign` the reservation.
After this, the threebot uses funds in its wallet to `pay`, the amount depending on
the workloads specified in the reservation. Once this is done, the node can
`deploy` these workloads. After the reservation expires, the node can
`delete` the provisioned workloads. This puts the reservation in its final `deleted` state,
ending its life cycle.
- signatures_provision: A list of `signatures` needed to start the provisioning (deploy) step,
i.e. after enough valid signatures are provided here, the nodes can start to deploy
the workloads defined. Validity of signatures and amount of valid signatures required
is defined by the `signing_request_provision` field in the `data` object.
- signature_farmer: the [signatures](#signingsignature) of the farmer threebots, which declares that the farmer
agrees to provision the workloads as defined by the reservation once there is consensus
about the provisioning (see previous field). Every farmer who deploys a workload will need to sign
this. To find out which threebots need to sign, you can iterate over the workloads
defined in the [reservation data](#reservationdata), and collect a set of unique farmer id's from them.
- signatures_delete: Much like `signatures_provision`, however it is used when a currently
deployed workload needs to be deleted (before it expires). It is tied to the `signing_request_delete`
field in the `data` object.
- epoch: The date of the last modification?
- results: A list of [reservation results](#reservationresult). Every workload which is defined in the reservation
will return a result describing the status. This allows fine grained error handling for individual
workloads.

### reservation.data

The reservation data contains all required info for the workloads to be deployed,
as well as info about who can sign to start the provisioning and deletion, and the expiry
dates for the reservation. As the JSON representation of the data is signed by the customer
after creating the reservation, all of these fields are immutable after being created.

- description: Description of the reservation/workloads.
- containers: Container workloads to be provisioned, see https://github.com/threefoldtech/zosv2/blob/master/docs/provision/provision.md
- volumes: Volume workloads to be provisioned, see https://github.com/threefoldtech/zosv2/blob/master/docs/provision/provision.md
- zdbs: ZDB workloads to be provisioned, see https://github.com/threefoldtech/zosv2/blob/master/docs/provision/provision.md
- networks: Network workloads to be provisioned, see https://github.com/threefoldtech/zosv2/blob/master/docs/provision/provision.md
- expiration_provisioning: The expiry time of the provisioning step. If the provisioning signatures
in `signing_request_provision` are not collected before this time, the reservation is
considered invalid and a new one must be created.
- expiration_reservation: The expiry time of the reservation, i.e. the provisioned workloads.
The farmer(s) agree(s) to keep the provisioned workloads available until at least this
time.
- signing_request_provision: The list of threebots which can sign for the provisioning to happen,
and the minimum amount of signatures required to do so, as described in [signing request](#siginingrequest).
- signing_request_delete: The list of threebots which can sign for the early deletion of the workloads
to happen, and the minimum amount of signatures required to do so, as described in [signing request](#signingrequest).

### signing.request

A signing request defines who (which threebots) can sign for a particular action,
and the minimum amount of required signatures. The minimum amount of people needed
can be anything between 1 and the number of signers.

- signers: A list of threebot ids who can sign. To verify the signature, the public
key of the threebot can be loaded, and then used to verify the signature.
- quorum_min: The minimum amount of reqeusted signatures. At least this amount of
threebots need to sign before the signature request is considered fulfilled.

As an example of how this might be applied in practice, consider the following
signing request:

- signers: [threebot_a, threebot_b, threebot_c]
- quorum_min: 1

This means that any of the 3 listed threebots can sign the data, and the request
is fulfilled as soon as anyone signs. For instance, a workload for testing is used
by 3 developers, and any of those can choose to have the workload deployed or deleted.
If however another person signs (perhaps a 4th developer who is new in the company),
the signature will not be valid, as he is not listed in the `signers` field, and therefore
he is not able to deploy the workload.

Note that `quorum_min` is a _minimum_ and as such, it is possible, and legal, for more than 1 of the listed persons to sign.
I.e. if both `threebot_a` and `threebot_b` sign, the request is still fulfilled.

### signing.signature

A signature has the actual `signature` bytes, as well as the id of the threebot
which signed. The threebot id is used to verify that this threebot is acutally
allowed to sign, and to fetch its public key to verify the signature. Additionally,
the time of signing is also recorded.

- tid: Id of the threebot which signed.
- signature: The actual signature in binary form
- epoch: Time of signing

### reservation.result

A result is used by zero-os to add a response to a reservation. This result
can inform users if an error occurred, or more commonly, it can relay back vital
information such as the IP address of a container after it is started. The result
object has a `workload_id` field, which is used to map the result to the actual
workload. With the workload request, the `node_id` can be inspected, to get the
nodes public key. The key can then be used to verify the signature of the data,
proving that it is indeed this node which created the reply, and that the `data_json`
has not been tampered with after it was created.

- category: The type of workload for which the reply is.
- workload_id: The id of the workload for which the reply is. This will be the same
as one of the `workload_id`s in the [reservation data](#reservationdata).
- data_json: The full data as a json object.
- signature: The bytes of the signature. The signature is created by the node which
creates the reply. The data signed is the `data_json` field. This proves authenticity
of the reply as well as integrity of the response data.
- state: Did the workload deploy ok ("ok") or not ("error").
- message: Content of the message sent by the node.
- epoch: Time at which the result has been created.

### workload id

can be used to identify a network or volume or ...

- reservation_id+workload_id
    - both are 4 byte int
    - can be represented in hex easily for using on a system
    - is truly unique because the reservation id links to the reservation obj on BCDB
    - the workload_id is incremental id inside the the reservation obj (unique)
