/* Loops exercise but some of these can be done without loops */

testNumArray = [72, 17, 22, 84, 42, 93, 20, 34, 92, 55];
testNumArray2 = [72, 17, 22, 84, 33, 93, 20, 34, 92, 55];

//print each char in string individually
function printCharsInString(str){
    for(var i = 0; i < str.length; i++){
        console.log(str[i]);
    }
}

//find the char in the str and print index, otherwise if not found, let user know
function findCharInString(str, char){
    if(str.indexOf(char) !== -1){
        return "\nThe character was located at index " + str.indexOf(char);
    } else {
        return "\nThat character was not located in the string";
    }
}

//find the number 42 in an array and print index, otherwise if not found, let user know
function findNum42(arr){
    if(arr.indexOf(42) !== -1){
        return "\nThe number 42 was located at index " + arr.indexOf(42);
    } else {
        return "\nThe number 42 was not located in the array";
    }
}

//find lowest number in array without using Math.min()
function findLowestNumber(arr){
    var lowestNum = arr[0];
    for(var i = 1; i < arr.length; i++){
        lowestNum > arr[i] ? lowestNum = arr[i] : lowestNum = lowestNum;
    }
    return "\nThe lowest number in the array is " + lowestNum;
}


printCharsInString("Test");
console.log(findCharInString("Test", "e"));
console.log(findCharInString("Test", "z"));
console.log(findNum42(testNumArray));
console.log(findNum42(testNumArray2));
console.log(findLowestNumber(testNumArray));