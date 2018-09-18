function isPalindrome(str){
    //regex replace(/[^A-z]/gi, "") is replacing all non letter characters with empty string
    //in regex, ^ means not, g means global (checks whole string), i means ignore case
    str = str.replace(/[^A-z]/gi, "").toLowerCase();
    //Math.floor if odd number indices and middle letter will not be checked
    for(var i = 0; i < Math.floor(str.length / 2); i++){
        //This checkes character at index i and compares to the character at end of string minus i indices
       if(str[i] !== str[str.length - (1 + i)]){
           return false;
       }
    }
    return true;
}

module.exports = isPalindrome;