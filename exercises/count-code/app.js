function countCode(str){
    return str.match(/co\De/gi).length; 
    // /co is looking for literal co together. 
    // \D is looking for anything that is not a digit (because of capital D). \d would look for a digit specifically
    // And then it looks for literal e
    // g says look at the global str so it doesn't stop at first occurrence
    // i says to ignore the case
}

console.log(countCode("aaacodebbb"));
console.log(countCode("codexxcode"));
console.log(countCode("cozexxcopecote"));