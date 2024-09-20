function clientPing() {
    const ping = Date.now() - message.createdTimestamp;
    if(isNaN(ping) == true) {
        const ping = ping.replace(/NaN/, "0");
    }
    return ping;
  }