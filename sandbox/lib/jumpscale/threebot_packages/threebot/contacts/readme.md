# contacts

## Module Requirements

This module will allow :

- add/modify/delete a contact
- list contacts
- search contacts
- send/share contacts ?

## questions

will it be integrated to the phonebook ? ?
do we need a link to some 3botids ?

## Technical Requirements

What kind of backend will we use ? standar format ?

## Threebot Actors and Models

For external entities to be able to access that threebot tft explorer we must define some methods to be called via redis protocol.
This is what we call actors and lives in the actors folder. To have an overview on how to call it please refer to the test method in the factory file.
The structure of data during those client /server exchanges are called models and are defined as schema in the models folder.

to sum up an external client would call this threebot actors method through redis protocol exchanging data according to the models.

![3Bot module example with mail module](../doc/images/3bot_actors_models.jpg)

## RUN

to start the threebot server manually

```bash
kosmos -p 'j.servers.threebot.default.start(background=False,web=False)'
```
