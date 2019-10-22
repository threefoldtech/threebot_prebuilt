# ffbrowser

## Module Requirements

This module will allow :

- launch a browser in browser
- **what else do we need** ?

## Technical Requirements

Serve a static html browser
We will rely upon the jimber tech
What kind of info do we need on a ff browser ?.

### Demo

For demo purposes we can use the existing service https://browser.threefold.io/

- description
- link https://browser.threefold.io/

We can probably rely on static html where we call the browser service from threebot location, connect to remote websockets.

### Real life

We probably need to run browsers in a central service (like FFconnect MTU's) and get the url from the correct MTU once the user browses to it.

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
