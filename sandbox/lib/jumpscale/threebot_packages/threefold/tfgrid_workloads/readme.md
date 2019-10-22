
# Workload Package

Exposes actors to manage reservations and workloads.

To start the package run `j.threebot.package.workloadmanager.start()`.


## Actors


- **reservation_register**: register a resevation by validating it and saving it to bcdb.

    - schema in: [reservation object](./models/tfgrid_reservation_1.toml)
        ```
        reserveration = (O) !tfgrid.reservation.1
        ```

    - schema out: returns the same reservation object with `epoch` and `next_action` fields filled out.
        ```
        reserveration = (O) !tfgrid.reservation.1
        ```

- **reservation_get**: given a reservation id, it returns the reservation object from the database.

    - schema in:
        ```
        reservation_id = (I)
        ```
    - schema out: [reservation object](./models/tfgrid_reservation_1.toml)
        ```
        tfgrid.reservation.1
        ```

- **reservation_list**: returns a list of all reservations with the ability to filter on nodes, state (next action) and epoch (creation date).

    - schema in:
        ```
        node_id = (S)
        state = (S)
        epoch = (I)
        ```

    - schema out: `reservations` containing a list of [reservation objects](./models/tfgrid_reservation_1.toml)

        ```
        reservations = (LO) !tfgrid.reservation.1
        ```

- **workloads_list**: list workloads of reservations in `deploy` or `delete` state, with the ability to filter on nodes, and epoch.

    - schema in:
        ```
        node_id = (S)
        epoch = (I)
        ```
    - schema out: `workloads` containing a list of [workload objects](./models/tfgrid_reservation_workload_1.toml)
        ```
        workloads = (LO) !tfgrid.reservation.workload.1
        ```

- **workload_get**: given a workload id, it returns the workload object.

    - schema in:
        ```
        gwid = (S)
        ```

    - schema out: [workload object](./models/tfgrid_reservation_workload_1.toml)
        ```
        !tfgrid.reservation.workload.1
        ```

- **sign_provision**: Add a new provision signature to a reservation's `signature_provision` list.
    - schema in:
        ```
        reservation_id = (I)
        tid = (I) # threebot id of who signs
        signature = (S) # the signature with private key of signer
        ```

- **sign_delete**: add a signature to a reservations's `signatures_delete` list.
    - schema in:
        ```
        reservation_id = (I)
        tid = (I) # threebot id of who signs
        signature = (S) # the signature with private key of signer
        ```

- **sign_farmer**: add a signature to a reservation's `signatures_farmer` list.
    - schema in:
        ```
        reservation_id = (I)
        tid = (I) # threebot id of who signs
        signature = (S) # the signature with private key of signer
        ```

- **sign_customer**: set a reservation's `customer_signature`.
    - schema in:
        ```
        reservation_id = (I)
        signature = (S) # the signature with private key of signer
        ```

- **set_workload_result**: sets the [result](./models/tfgrid_reservation_result_1.toml) of a workload deployment in the reservation object.
    - schema in:
    ```
    global_workload_id = (S)
    result = (O) !tfgrid.reservation.result.1
    ```

- **workload_deleted**: mark a workload as deleted. NOT IMPLEMENTED YET.
    - schema in:
        ```
        workload_id = (I)
        ```
