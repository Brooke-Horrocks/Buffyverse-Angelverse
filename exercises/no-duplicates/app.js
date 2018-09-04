//My Solution
//The String indexOf method is a for loop itself so technically performing a nested for loop which may be more inefficient
function removeDuplicates(str) {
    if(typeof str === "string") {
        var newStr = "";
        var lettersRemoved = "";
        for(var i = 0; i < str.length; i ++) {
            if(newStr.indexOf(str[i]) === -1) {
                newStr += str[i];
            } else {
                lettersRemoved += str[i];
            }
        }
        if(lettersRemoved[0] !== undefined) {
            console.log(`New String: ${newStr}.`);
            console.log(`Letters Removed: ${lettersRemoved}.`);
            return "";
        } else {
            console.log(`New String: ${newStr}.`)
            console.log("No duplicate letters.")
            return "";
        }   
    } else {
        console.log("Parameter entered is not a string. Please try again.")
        return "";
    }  
}

//Instructor Solution
//Not using String indexOf method so this will be more efficient
function lettersRemoved(str) {
    var recordOfPastChars = {};
    var output = "";

    for(var i = 0; i < str.length; i++) {
        var currentLetter = str[i];
        if(recordOfPastChars[currentLetter] === undefined) {
            recordOfPastChars[currentLetter] = i;
        } else {
            output += currentLetter;
        }
    }

    return output;
}

function removeDupes(str) {
    var recordOfPastChars = {};
    var output = "";

    for(var i = 0; i < str.length; i++) {
        var currentLetter = str[i];
        if(recordOfPastChars[currentLetter] === undefined) {
            output += currentLetter;
            recordOfPastChars[currentLetter] = i;
        }
        return output;
    }
}

console.log();
console.log(removeDuplicates("Bookkeeper Larry"));
console.log(removeDuplicates("Cat"));
console.log(removeDuplicates(true));
console.log(removeDuplicates(2));