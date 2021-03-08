let fs = require("fs");

let {read} = require("./read");
let {singleline_break} = require("./singleline_break");
let {numbering_all} = require("./numbering_all");
let {numbering_nonemp} = require("./numbering_nonemp");


let input = process.argv.slice(2);

if(input.length==1){
    if(fs.existsSync(input[0])){
        read(input[0]);
    }
    else{
        console.log("You have entered file which doesn't exist");
    }
}
else if(input.length==2){
    if(input[0]=="-s"){
        if(fs.existsSync(input[1])){
            singleline_break(input[1]);
        }
        else{
            console.log("You have entered file which doesn't exist");
        }
    }
    else if(input[0]=="-n"){
        if(fs.existsSync(input[1])){
            numbering_all(input[1]);
        }
        else{
            console.log("You have entered file which doesn't exist");
        }
    }
    else if(input[0]=="-b"){
        if(fs.existsSync(input[1])){
            numbering_nonemp(input[1]);
        }
        else{
            console.log("You have entered file which doesn't exist");
        }
    }
    else{
        for(let i=0;i<input.length;i++){
            if(fs.existsSync(input[i])){
                read(input[i]);
                console.log("---------------------------------------------------------")//separating line
            }
            else{
                console.log("You have entered file which doesn't exist");
            }
        }
    }
}
else if(input.length>=3){
    if((input[0]=="-n" && input[1]=="-b") || (input[1]=="-n" && input[0]=="-b")){
        console.log("Both -n and -b can't be entered in same line");
    } 
    else if((input[0]=="-s" && input[1]=="-b") || (input[1]=="-s" && input[0]=="-b")){
        for(let i=2;i<input.length;i++){
            if(fs.existsSync(input[i])){
                numbering_nonemp(input[i]);
                console.log("---------------------------------------------------------")//separating line
            }
            else{
                console.log("You have entered file which doesn't exist");
            }
        }
    }
    else if((input[0]=="-n" && input[1]=="-b") || (input[1]=="-n" && input[0]=="-b")){
        for(let i=2;i<input.length;i++){
            if(fs.existsSync(input[i])){
                numbering_nonemp(input[i]);
                console.log("---------------------------------------------------------")//separating line
            }
            else{
                console.log("You have entered file which doesn't exist");
            }
        }
    }
    else if(input[0]=="-n" || input[0]=="-b" || input[0]=="-s"){
        if(input[0]=="-n"){
            for(let i=1;i<input.length;i++){
                if(fs.existsSync(input[i])){
                    numbering_all(input[i]);
                    console.log("---------------------------------------------------------")//separating line
                }
                else{
                    console.log("You have entered file which doesn't exist");
                }
            }
        }
        else if(input[0]=="-s"){
            for(let i=1;i<input.length;i++){
                if(fs.existsSync(input[i])){
                    singleline_break(input[i]);
                    console.log("---------------------------------------------------------")//separating line
                }
                else{
                    console.log("You have entered file which doesn't exist");
                }
            }
        }
        else if(input[0]=="-b"){
            for(let i=1;i<input.length;i++){
                if(fs.existsSync(input[i])){
                    numbering_nonemp(input[i]);
                    console.log("---------------------------------------------------------")//separating line
                }
                else{
                    console.log("You have entered file which doesn't exist");
                }
            }
        }
    }
    else{
        for(let i=0;i<input.length;i++){
            if(fs.existsSync(input[i])){
                read(input[i]);
                console.log("---------------------------------------------------------")//separating line
            }
            else{
                console.log("You have entered file which doesn't exist");
            }
        }
    }
}