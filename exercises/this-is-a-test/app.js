function getLongestString(arr){
    var longestString = "";
    for(var i = 0; i < arr.length; i++){
        if(arr[i].length > longestString.length) {
            longestString = arr[i];
        }
    }
    return longestString;
}

module.exports = getLongestString;