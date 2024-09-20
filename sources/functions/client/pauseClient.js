function pauseClient() {
    const code = `client.destroy();`
    eval(code)
    console.error("oxsof --PAUSED++: oxsof-client-pause")
}
module.exports = {
    pauseClient
}