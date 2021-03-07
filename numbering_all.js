let fs = require("fs");


function numbering_all(dirpath){
    let readMe = fs.readFileSync(dirpath,"utf8");
    let k = readMe.split('\n');
    for(let i=0;i<k.length;i++){
        console.log(i+1+" "+k[i]);
    }
}

module.exports = {
    numbering_all : numbering_all
}