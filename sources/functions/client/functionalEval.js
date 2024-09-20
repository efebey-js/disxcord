const { pauseClient } = require("./pauseClient")
const { discordjsEval } = require("./discord's")
const { argument } = require("./argument")
const { allowedIDs } = require("./allowedIDs")
const { getChannelPropertie } = require("./getChannel")
const { sendMessage } = require("./sendMessage")
const { reply } = require("./reply")
const { authorID } = require("./authorID")
const { username } = require("./username")
const { clientPing } = require("./ping")
function functionalEval(func) {
    eval(func)
}
module.exports = {
    functionalEval
}