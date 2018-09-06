function fizzBuzz(){
    var numArray = [];

    for(var i = 1; i <= 100; i++) {
        var divBy3 = i % 3 === 0;
        var divBy5 = i % 5 === 0;

        if((divBy3) && (divBy5)) numArray.push("fizzbuzz");
        else if(divBy3) numArray.push("fizz");
        else if (divBy5) numArray.push("buzz");
        else numArray.push(i);
    }
    return numArray;
}

function countFizzes(arr){
    var fizzBuzzCounter = {
        fizz: 0,
        buzz: 0,
        fizzbuzz: 0
    };

    for(var i = 0; i < arr.length; i++){
        if(fizzBuzzCounter.hasOwnProperty(arr[i])){
            fizzBuzzCounter[arr[i]]++;
        }
    }
    return fizzBuzzCounter;
}

console.log();
console.log(fizzBuzz());
console.log();
const fizzArray = fizzBuzz();
console.log(countFizzes(fizzArray));