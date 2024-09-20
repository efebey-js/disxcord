function argument(message, line) {
    message.content.split(line).slice(1);
}
module.exports = {
    argument
}