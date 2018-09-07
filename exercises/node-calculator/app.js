var reader = require("readline-sync");
var operations = require("./operations.js");
var operationSymbols = ["+", "-", "*", "/"];

var num1 = parseInt(reader.question("\nEnter your first number: "));
var num2 = parseInt(reader.question("\nEnter your second number: "));
var userSelection = reader.keyInSelect(operationSymbols, "Which math operation would you like to perform? \n");

switch(userSelection){
    case 0:
        console.log("The answer is: " + operations.sum(num1, num2) + ".\n");
        break;
    case 1:
        console.log("The answer is: " + operations.subtract(num1, num2) + ".\n");
        break;
    case 2:
        console.log("The answer is: " + operations.multiply(num1, num2) + ".\n");
        break;
    case 3:
        console.log("The answer is: " + operations.divide(num1, num2) + ".\n");
        break;
    default:
        console.log("You canceled the operation.\n")
}