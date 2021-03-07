let fs = require("fs");

function read(dirpath){
    let readMe = fs.readFileSync(dirpath,"utf8");
    console.log(readMe);
}

module.exports = {
    read : read
}