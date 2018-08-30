var cat = "cat";
var dog = "dog";
var trueString = "true";
var undefinedVariable;
var myNum = 11;
var person = {
    name: "Bobby",
    age: 12
}

if(5 > 3) {
    console.log("is greater than");
}

if(3 === cat.length) {
    console.log("is the length");
}

if(cat === "dog") {
    console.log("the same");
} else {
    console.log("not the same");
}

if(person.age >= 18){
    console.log(person.name + " is allowed to go to the movie");
} else {
    console.log(person.name + " is not allowed to go to the movie");
}

if(person.name.charAt(0) === "B"){
    console.log(person.name + " is allowed to go to the movie");
} else {
    console.log(person.name + " is not allowed to go to the movie");
}

if((person.age >= 18) && (person.name.charAt(0) === "B")) {
    console.log(person.name + " is allowed to go to the movie");
} else {
    console.log(person.name + " is not allowed to go to the movie");
}

if(1 === "1") {
    console.log("strict");
} else if (1 == "1") {
    console.log("abstract");
} else {
    console.log("not equal at all");
}

if(((1 <= 2) && (2 === 4)) || (((3 * 4) > 10) && ((5 + 10) > 10))) {
    console.log("yes");
}

if(typeof dog === "string") {
    console.log("the variable dog is a string");
} else {
    console.log("the variable dog is not a string");
}

if(typeof trueString === "boolean") {
    console.log("the variable trueString is a boolean");
} else {
    console.log("the variable trueString is not a boolean");
}

if(undefinedVariable === undefined) {
    console.log("the variable is undefined");
} else {
    console.log("the variable is defined");
}

if("s".charCodeAt(0) === 12) {
    console.log("s equals 12");
} else if("s".charCodeAt(0) > 12) {
    console.log("s is greater than 12");
} else {
    console.log("s is less than 12");
}

var oddOrEven = (((myNum % 2) === 0) ? "variable myNum is even" : "variable myNum is odd");

console.log(oddOrEven);