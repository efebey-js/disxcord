function username(id, message = message) {
    if(id == ""){message.author.id}
    const user = this.discordProperties.users.cache.get(id);
    user.username
}
module.exports = {
    username
}