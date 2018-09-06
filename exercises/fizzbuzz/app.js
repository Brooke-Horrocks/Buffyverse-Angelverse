var fizzBuzzObject = {
    fizz: " fizz",
    buzz: " buzz",
    fizzbuzz: " fizzbuzz",
    fizzbuzzCount: 0
}

function fizzBuzz(){
    var numArray = [];
    for(var i = 1; i <= 100; i++) {
        if((i % 3 === 0) && (i % 5 !== 0)) {
            numArray.push(fizzBuzzObject.fizz);
        } else if((i % 3 !== 0) && (i % 5 === 0)) {
            numArray.push(fizzBuzzObject.buzz);
        } else if ((i % 3 === 0) && (i % 5 === 0)) {
            numArray.push(fizzBuzzObject.fizzbuzz);
            fizzBuzzObject.fizzbuzzCount++;
        } else {
            numArray.push(` ${i}`);
        }
    }
    return numArray.toString();
}

console.log();
console.log(fizzBuzz());
console.log();
console.log(`fizzbuzz count: ${fizzBuzzObject.fizzbuzzCount}`);
console.log();