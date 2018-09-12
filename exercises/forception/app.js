var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";

function forception(arr, str){
    var newArray = [];
    for(var i = 0; i < people.length; i++){
        newArray.push(arr[i]);
        for(var j = 0; j < alphabet.length; j++){
            newArray.push(str[j]);
        }
    }
    return newArray.toString();
}

console.log(forception(people, alphabet));