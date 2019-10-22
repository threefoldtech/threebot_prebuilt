# Requirements

do we relaly want all the transactions ?
maybe a wallet balance for a start

we want every threebot to be able to :

- verify a transaction with a transaction hash (is it really necessary ?)
- verify a wallet balance - for sure
- verify a name registration ? probably not

# Technical Requirements

A golang service exists that can watch blockchain transactions and fill up a database with aggregated data. This service could call that threebot to feed him the information about the blockchain state and transactions so that a threebot user can ask about the blockchain state without having a full node on the blockchain.

We should find an efficient way to send data (not all the transactions one by one) maybe a bulk of transactions and the corresponding updated state for wallet and name registry and defined that data structure as schema in the models directory.
We should then be able to fill up the methods interface of that actor inside the actors directory.

## Threebot Actors and Models

For external entities to be able to access that threebot tft explorer we must define some methods to be called via redis protocol.
This is what we call actors and lives in the actors folder. To have an overview on how to call it please refer to the test method in the factory file.
The structure of data during those client /server exchanges are called models and are defined as schema in the models folder.

to sum up an external client would call this threebot actors method through redis protocol exchanging data according to the models.

# RUN

to start the threebot server manually

```bash
kosmos -p 'j.servers.threebot.default.start(background=False,web=False)'
```
