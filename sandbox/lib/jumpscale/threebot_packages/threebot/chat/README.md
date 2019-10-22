# chat package

## Registaration

using the package manager
```
JSX> cl = j.servers.threebot.local_start_default()          
JSX> cl.actors.package_manager.package_add("/sandbox/code/github/threefoldtech/jumpscaleX_threebot/ThreeBotPackages/threebot/chat") 
JSX> cl.actors.package_manager.package_start("chat") 
```

## Interacting with Chatflows

- go to `3BOT_URL/chat` to see list of available chats
- go to `3BOT_URL/chat/session/CHATFLOW_NAME` to go to specific chatflow