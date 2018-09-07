function sum(x, y){
    return x + y;
}

function subtract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}

//Note to self: you do not need the parentheses for the functions since they are not being called.
//For example, we can use sum instead of sum()
module.exports = {
    sum: sum,
    subtract: subtract,
    multiply: multiply,
    divide: divide
};