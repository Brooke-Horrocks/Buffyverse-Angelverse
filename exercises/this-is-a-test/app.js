//function to return longest string in an array
function getLongestString(arr){
    var longestString = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i].length > longestString.length) {
            longestString = arr[i];
        }
    }
    return longestString;
}

//export of getLongestString function
module.exports = getLongestString;