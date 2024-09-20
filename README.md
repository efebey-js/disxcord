# News:

**Nothing**

# Disxcord's Client

**What is oxclient? Disxcord, like discord.js or aoi.js. Disxcord and oxclient is a api request sender to create bots(useful bots)**

# Used languages
**Node.js - 1(used 1st) |**
**discord.js - 2(used 2st)**

# Setup
```bash
npm i disxcord
```

**After installing the depencedie, your index.js should be like this:**

```javascript
//Imports
const { Disxcord, EventBuilder } = require("disxcord")

//Setup Discord.js client
const client = new Disxcord({
   events: ["All"],
   intents: ["All"]
})
client.start("YourBotToken", false, "name") //Returns client's username

client.basicCommand({
  name: "ping", //Basic command name
  code: `sendMessage(message, "pong!")`, //Basic Command's code
  prefixed: true,
  commandprefix: "+" //If prefixed false drop this empty
});
```

# Credits
**@frexinn: "messageCreate" event, "getChannelPropertie" function |**
**@layslover: Setups and functions**

## Websites

**Support server(discord):**
[Discord](https://discord.gg/devboys)