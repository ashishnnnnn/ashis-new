let fs = require("fs");

function singleline_break(dirpath){
    let readMe = fs.readFileSync(dirpath,"utf8");
    let k = readMe.split('\n');
    for(let i=0;i<k.length;i++){
        if(k[i].length>0){
            console.log(k[i]);
        }
    }
}

module.exports = {
    singleline_break : singleline_break
}