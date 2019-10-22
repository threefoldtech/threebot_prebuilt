# mail

## Module Requirements

This module will allow :

- sending emails
- receiving emails
- answer emails
- forward emails
- search for emails
- add account that will be able to send mail through smtp ?
- add account that will be able to receive mail through imap ?
- Do we want a group by e.g. by subject (conversation) or by sender or by date
- add to spam
- add to and clean trashbin
- create/modify/delete folders
- move mails between folders
- label mails
- archive
- attach document to content
- search for addresses list
- add/remove address to/from contact list

- **what else do we need\*** ?

## Technical Requirements

We will rely upon the imap, smtp protocols
What kind of info do we need to interface the 3bot ?
What kind of action do we want to expose through the actor ?

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
