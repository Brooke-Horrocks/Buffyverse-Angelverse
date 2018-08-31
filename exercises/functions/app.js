function sumOfTwoNumbers(num1, num2) {
    console.log(num1 + num2);
}

function findLargestNumber(num1, num2, num3) {
    if(num1 > num2 && num1 > num3) {
        console.log(num1);
    } else if (num2 > num1 && num2 > num3) {
        console.log(num2);
    } else{
        console.log(num3);
    }
}

function evenOrOdd(num) {
    if(num % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

function concatString(str) {
    if(str.length < 20) {
        console.log(str.concat(str));
    } else {
        console.log(str.substr(0, str.length / 2 - 1)); 
    }
}

function fibonacciSequence(num) {
    var num1 = 0, num2 = 1, num3 = 1, sequence = "1, ";
    for(var i = 2; i <= num; i++){
        num3 = num1 + num2;
        num1 = num2;
        num2 = num3;
        sequence += `${num3}, `
    }
    console.log(`Sequence: ${sequence}`)
    console.log(`Sum: ${num3}`);
}

function solveQuadraticEquation(a, b, c) {
    var plusCase, minusCase, solutions = [];
    plusCase = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    minusCase = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    solutions.push(plusCase, minusCase);
    console.log(`${solutions[0]} and ${solutions[1]}`)
}

sumOfTwoNumbers(2, 9);
findLargestNumber(7, 9, 11);
evenOrOdd(3);
concatString("abcdefghijklmnopqrstuvwxyz");
concatString("Test");
fibonacciSequence(7);
solveQuadraticEquation(3, -11, -4)