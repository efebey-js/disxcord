const { allowedIDs } = require("../../functions/client/allowedIDs");
const { argument } = require("../../functions/client/argument");
const { authorID } = require("../../functions/client/authorID");
const { discordjsEval } = require("../../functions/client/discord's");
const { functionalEval } = require("../../functions/client/functionalEval");
const { getChannelPropertie } = require("../../functions/client/getChannel");
const { pauseClient } = require("../../functions/client/pauseClient");
const { reply } = require("../../functions/client/reply");
const { sendMessage } = require("../../functions/client/sendMessage");
const { username } = require("../../functions/client/username");
const { writeFile } = require("../../functions/client/writeFile");
const { clientPing } = require("../../functions/client/ping");

class ParameterBuilderTool{
    constructor() {
    }
    param(p) {
        console.log("Has been setted /ParameterBuilderTool\ 's into \"p\"")
        return p;
    }
}
const All = [
    "ready",
    "messageCreate",
    "channelCreate",
    "channelDelete",
    "guildBanRemove",
    "guildBanAdd",
    "interactionCreate",
    "messageReactionRemove",
    "guildMemberRemove",
    "guildMemberAdd",
    "guildDelete",
    "guildCreate",
    "voiceStateUpdate",
    "inviteCreate",
    "inviteDelete"
]
const events = [
    "ready",
    "messageCreate",
    "channelCreate",
    "channelDelete",
    "guildBanRemove",
    "guildBanAdd",
    "interactionCreate",
    "messageReactionRemove",
    "guildMemberRemove",
    "guildMemberAdd",
    "guildDelete",
    "guildCreate",
    "voiceStateUpdate",
    "inviteCreate",
    "inviteDelete"
]
const upperThings = [
    "A",
    "B",
    "C",
    "Ç",
    "D",
    "E",
    "F",
    "G",
    "Ğ",
    "H",
    "I",
    "İ",
    "O",
    "P",
    "R",
    "S",
    "Ş",
    "T",
    "U",
    "Ü",
    "V",
    "Y",
    "Z"
]
class FunctionBuilder{
    constructor(name, code, params = []) {
        window[name] = new Function(...params, code)
    }
}
class Disxcord {
    constructor(events = [All], intents = ["All"]) {
        const { Client, GatewayIntentBits } = require("discord.js");
        this.events = events
        this.discordProperties = new Client({
                intents: [
                    GatewayIntentBits.Guilds,                     
                    GatewayIntentBits.GuildMembers,                                    
                    GatewayIntentBits.GuildEmojisAndStickers,       
                    GatewayIntentBits.GuildIntegrations,            
                    GatewayIntentBits.GuildWebhooks,                
                    GatewayIntentBits.GuildInvites,                 
                    GatewayIntentBits.GuildVoiceStates,             
                    GatewayIntentBits.GuildPresences,               
                    GatewayIntentBits.GuildMessages,                
                    GatewayIntentBits.GuildMessageReactions,        
                    GatewayIntentBits.GuildMessageTyping,           
                    GatewayIntentBits.DirectMessages,               
                    GatewayIntentBits.DirectMessageReactions,       
                    GatewayIntentBits.DirectMessageTyping,          
                    GatewayIntentBits.MessageContent
                ]
    });
}
basicCommand({ name, code, prefixed, commandprefix }) {
    const commandHandler = (message) => {
        if(message.author.bot) return {
            returned: console.warn("client: oxsof-WARN: The message content proccess applied but message's author is a bot.")
        }
        if (prefixed) {
            if (message.content == `${commandprefix}${name}`) {
                eval(code);
            }
        } else {
            if (message.content == `${name}`) {
                eval(code);
            }
        }
    };

    this.discordProperties.on("messageCreate", commandHandler);
}
Cache(catchedThingName = []) {
    if(catchedThingName == "channels") {
    const channel = this.discordProperties.channels.cache();
    }
else if(catchedThingName == "guilds") {
    const guild = this.discordProperties.guilds.cache();
}
else if(catchedThingName == "users") {
    const user = this.discordProperties.users.cache();
}
else if(catchedThingName == "roles") {
    const guild = this.discordProperties.guilds.cache();
    const id = this.discordProperties.guilds.cache.get(guild)
    const role = guild.roles.cache();
}
else if(catchedThingName == "messages") {
    const channel = this.discordProperties.channels.cache()
    const message = this.discordProperties.channel.messages.cache()
}
else if(catchedThingName == "emojis") {
const emoji = this.discordProperties.emojis.cache();
}
else if(catchedThingName == "reactions") {
    const guild = this.discordProperties.guilds.cache();
    const channel = this.discordProperties.channels.cache();
    const message = this.discordProperties.guild.channels.messages.cache();
    const reaction = this.discordProperties.guild.channels.message.reactions.cache();
}
else if(catchedThingName == "voiceState") {
    const guild = this.discordProperties.guilds.cache();
    const voiceState = this.discordProperties.guild.voiceStates.cache();
}
}
Fetch(fetch = []) {
    if(fetch == "channels") {
    const channel = this.discordProperties.channels.fetch();
    }
else if(fetch == "guilds") {
    const guild = this.discordProperties.guilds.fetch();
}
else if(fetch == "users") {
    const user = this.discordProperties.users.fetch();
}
else if(fetch == "roles") {
    const guild = this.discordProperties.guilds.fetch();
    const role = guild.roles.fetch();
}
else if(fetch == "messages") {
    const channel = this.discordProperties.channels.fetch()
    const message = this.discordProperties.channel.messages.fetch
}
else if(fetch == "emojis") {
const emoji = this.discordProperties.emojis.fetch();
}
else if(fetch == "reactions") {
    const guild = this.discordProperties.guilds.fetch();
    const channel = this.discordProperties.channels.fetch();
    const message = this.discordProperties.guild.channels.messages.fetch();
    const reaction = this.discordProperties.guild.channels.message.reactions.fetch();
}
else if(fetch == "voiceState") {
    const guild = this.discordProperties.guilds.fetch();
    const voiceState = this.discordProperties.guild.voiceStates.fetch();
}
}
start(token, disableLogs = false, format) {
    this.discordProperties.login(token).then(() => {
        if (disableLogs == false) {
            console.error(("client: oxsof--STARTED +%"))
        }
        if(format == "name") {
            console.warn(`add + ADD: formats == ${format} = ${this.discordProperties.user.username}`)
    }
    if(format == "id") {
     console.warn(`add + ADD: formats == ${format} + ${this.discordProperties.user.id}`)
    }
    if(format == "tag") {
        console.warn(`add + ADD: formats == ${format} + ${this.discordProperties.user.tag}`)
    }
    if(format == "avatar") {
        console.warn(`add + ADD: formats == ${format} + ${this.discordProperties.user.avatarURL(this.discordProperties.user.id)}`)}
}).catch(console.error);
}
    listenEvent(eventName) {
        if(eventName.startsWith(events) == false) {
            throw new Error(`Cannot find a event named "${eventName}"`)
        }
        this.discordProperties.on(eventName)
    }
    once(eventName) {
        this.discordProperties.once(eventName, this)
    }
    }
module.exports = {
    Disxcord,
    ParameterBuilderTool,
    FunctionBuilder
}
