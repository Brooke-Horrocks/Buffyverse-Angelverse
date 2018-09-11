function isCaps(letter){
    return letter === letter.toUpperCase();
}

function changeCase(string){
    var newString = "";
    for(var i = 0; i < string.length; i++){
        if(isCaps(string[i])){
            newString += string[i].toLowerCase();
        } else {
            newString += string[i].toUpperCase();
        }
    }
    return newString;
}

console.log(changeCase("Hello"));
console.log(changeCase("racEcar"));
console.log(changeCase("bAnAnA"));