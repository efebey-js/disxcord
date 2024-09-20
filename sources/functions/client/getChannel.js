async function getChannelPropertie(id, format) {
    const idk = this.discordProperties.channels.cache.get(channelId)
    const channel = this.discordProperties.channels.fetch.get(id);

    if (!channel) {
        throw new Error('Cannot access to the server');
    }

    return {
        name: channel.name,
        name: channel.type, 
        topic: channel.topic || 'noTopic',
        nsfw: channel.nsfw,
        voiceChannelMemberCount: channel.type === 'GUILD_VOICE' ? channel.members.size : 0,
        createdAt: channel.createdAt
    };
}

module.exports 
= {
    getChannelPropertie
};