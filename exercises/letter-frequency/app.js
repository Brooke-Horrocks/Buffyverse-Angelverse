var phrase = "slimy smelly solution";

//My solution
function arrayIndex(str){
    var charCounterObj = {
        noDupesString: ""
    };
    for(var i = 0; i < str.length; i++){
        if(charCounterObj[str[i]]){ //charCounterObj[str[i]] is a truthy value
            charCounterObj[str[i]]++;
        } else {
            charCounterObj[str[i]] = 1;
            charCounterObj.noDupesString += str[i];
        }
    }
    return charCounterObj;
}

//Instructor solution demonstrating for in loop to loop through object
function arrayIndex(str){
    var charCounterObj = {};
    for(var i = 0; i < str.length; i++){
        if(charCounterObj[str[i]]){ //charCounterObj[str[i]] is a truthy value
            charCounterObj[str[i]]++;
        } else {
            charCounterObj[str[i]] = 1;
            charCounterObj.noDupesString += str[i];
        }
    }

    var noDupesString = "";
    for(var key in charCounterObj){
        noDupesString += key;
    }

    return charCounterObj;
}

console.log(arrayIndex(phrase));