# file server

## questions

do we need an actor ?
actor to wrap the webdav protocol ?

## Module Requirements

This module will allow :

- add/modify/delete/read a file or directory
- list files/directories based on a path
- move files/directories
- rename files/directories
- add authentication for external users to access the filesystem
- create a shareable link for another 3bot to read ? NTH

## Technical Requirements

We will take advantage of the webdav protocol to access the BCDB. A filemanager_ui already exists adn let us access the filesystem

- peoples attached
- location
- description
- link to ffconnect ?
- title

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

- TODO: openresty management to expose the right server functions on openresty
- TODO: some actor to allow us to deal with adding file stores, exposing, ...
- TODO: readme's how to mount webdav and how to get to filemanager web interface
- TODO: add html code for filemanager in the package here

#TODO: OLD?
