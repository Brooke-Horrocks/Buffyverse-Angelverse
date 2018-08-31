//TODO: Learn how to use try/catch in JS, then change if/else statements for error catching to try/catch blocks

//Function demonstrating the toLowerCase and toUpperCase methods with error catching if/else statements
function changeStringCase(str) {
    if(typeof str === "string") {
        if(str.length > 0) {
            console.log(`${str.toLowerCase()} ~and~ ${str.toUpperCase()}`);
        } else {
            console.log("The string entered is empty. Please try again.");
        }
    } else {
        console.log("The paramter entered is not a string. Please try again.");
    }
}

//Function demonstrating split and concat methods with error catching if/else statements
function splitAndConcatStrings(str1, str2) {
    if(typeof str1 === "string" && typeof str2 === "string"){
        if(str1.length && str2.length > 0) {
            console.log(`First string split: ${str1.split(" ")}. Second string split: ${str2.split(" ")}`);
            console.log(`Both strings concatenated: ${str1.concat(str2)}`);
        } else {
            console.log("At least one string entered is empty. Please try again.");
        }
    } else {
        console.log("At least one of the parameters entered is not a string. Please try again.");
    }    
}

//Function demonstrating indexOf and lastIndexOf methods with error catching if/else if/else statements
function findExclamationPointsIndices(str) {
    if(typeof str === "string") {
        if(str.length > 0){
            countExclamationPoints = 0;
            for(var i = 0; i < str.length; i++){
                if(str[i] === "!") {
                    countExclamationPoints++;
                }
            }
            if(countExclamationPoints === 0) {
                console.log("No exclamation points used.");
            } else if(countExclamationPoints === 1) {
                console.log("Only one exclamation point was used.");
            } else {
                console.log(`The index of the first ! is ${str.indexOf("!")} and the index of the last ! is ${str.lastIndexOf("!")}.`)
            }
        } else {
            console.log("The string entered is empty. Please try again.")
        }
    } else {
        console.log("The parameter entered is not a string. Please try again.")
    }
}

//Calling each function and testing error catching if/else if/else statements
console.log();
changeStringCase("Testing the string methods to change the case");
changeStringCase("");
changeStringCase(2);
changeStringCase(true);
console.log();
splitAndConcatStrings("This is a test, ", "let's see if it works");
splitAndConcatStrings("", "Testing with first empty string.");
splitAndConcatStrings("Testing with second empty string.", "");
splitAndConcatStrings("", "");
splitAndConcatStrings(2, "Testing with different primative type for first string.");
splitAndConcatStrings("Testing with different primative type for first string.", false);
splitAndConcatStrings(true, 5);
console.log();
findExclamationPointsIndices("Testing with no exclamation points.");
findExclamationPointsIndices("Testing with only one exclamation point!");
findExclamationPointsIndices("Testing! with two exclamation points!");
findExclamationPointsIndices("Testing! with several! exclamation points!");
findExclamationPointsIndices("")
findExclamationPointsIndices(2);
findExclamationPointsIndices(true);
console.log();