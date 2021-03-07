let fs = require("fs");


function numbering_nonemp(dirpath){
    let readMe = fs.readFileSync(dirpath,"utf8");
    let k = readMe.split('\n');
    let t = 1;
    for(let i=0;i<k.length;i++){
        if(k[i].length>0){
            console.log(t+" "+k[i]);
            t+=1;
        }
        else{
            console.log(k[i]);
        }
    }
}

module.exports = {
    numbering_nonemp : numbering_nonemp
}