function allowedIDs(message, d = [], error) {
    if(d.includes(message.author.id) == false) {
        message.channel.send(error)
    }
    }
    module.exports = {
        allowedIDs
    }
