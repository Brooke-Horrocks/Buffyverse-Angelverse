var alphabet = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
var reader = require("readline-sync");

function cipher(input, shift){
    var cipherString = "";
    var inputLowerCase = input.toLowerCase();
    if(shift < 27 && shift > 0){
        for(var i = 0; i < input.length; i++){
            var letter = inputLowerCase[i];
            cipherString += alphabet[alphabet.indexOf(letter) + shift];
        }
        return cipherString;
    } else {
        return "The number you gave me is not between 1 and 26";
    }
}

var input = reader.question("\nWhat phrase would you like to encrypt? ");
var shift = parseInt(reader.question("\nHow many letters would you like to shift between 1 and 26? "));

console.log(cipher(input, shift));