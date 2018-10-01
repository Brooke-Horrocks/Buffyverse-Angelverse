//Solution assuming the inner arrays are all of the same data type
//Example: [1, 2, 3] or ['a', 'b', 'c'] instead of [1, 'a', true]
const checkTypes = (multiArray) => {
    isMatching = false;
    for(let i = 0; i < multiArray.length - 1; i++){
        if(typeof multiArray[i][0] !== typeof multiArray[i+1][0]){
            break;
        } else {
            isMatching = true;
        }
    }
    return isMatching;
}

//Solution assuming that array can be a mix of data types
checkTypesAgain = (multiArray) => {
    var arrType = typeof multiArray[0][0]
    for(var i = 1; i < multiArray.length; i++){
      for(var y = 0; y < multiArray[i].length; y++){
      if(typeof multiArray[i][y] !== arrType) return false
      }
    }
    return true
  }

module.exports = {checkTypes, checkTypesAgain};

console.log(checkTypesAgain([[true, false, true], [false, false, true]]));