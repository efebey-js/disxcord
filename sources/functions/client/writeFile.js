const fs = require("node:fs")
function writeFile(extension, name, text) {
    if(extension == "") {
        throw new Error("/Extension\ is not specified.")
    } else if(name == "") {
        throw new Error("/Name\ is not specified.")
    }  else if(text == "") {
        throw new Error("/Text\ is not specified.")
    }
fs.writeFile(`${name}${extension}`, text)
}
module.exports = {
    writeFile
}