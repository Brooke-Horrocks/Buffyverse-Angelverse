testNumberArray = [1, 5, 100];
testStringArray = ["john", "JACOB", "jinGleHeimer", "schmidt"];
testObjectArray = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]

var doubledArray = testNumberArray.map(function(number){
    return number * 2;
})

var numbersToStrings = testNumberArray.map(function(number){
    return number.toString();
})

var capitalizedNames = testStringArray.map(function(str){
    return str[0].toUpperCase() + str.slice(1, str.length).toLowerCase();
})

var namesOnly = testObjectArray.map(function(object){
    return object.name;
})

var canGoToMatrix = testObjectArray.map(function(object){
    if(object.age > 18){
        return object.name + " can go to the Matrix";
    } else {
        return object.name + " is under age!!";
    }
})

var readyToPutInDOM = testObjectArray.map(function(object){
    return `<h1>${object.name}</h1><h2>${object.age}</h2>`;
})

console.log(doubledArray);
console.log(numbersToStrings);
console.log(capitalizedNames);
console.log(namesOnly);
console.log(canGoToMatrix);
console.log(readyToPutInDOM);