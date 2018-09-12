var phrase = "slimy smelly solution";

function arrayIndex(str){
    var charCounterObj = {
        noDupesString: ""
    };
    for(var i = 0; i < str.length; i++){
        if(charCounterObj[str[i]] === undefined){
            charCounterObj[str[i]] = 1;
            charCounterObj.noDupesString += str[i];
        } else {
            charCounterObj[str[i]]++;
        }
    }
    return charCounterObj;
}

console.log(arrayIndex(phrase));