var fruit = ["banana", 
"apple", 
"orange", 
"watermelon"];
var vegetables = ["carrot", 
"tomato", 
"pepper", 
"lettuce"];

//removing last element
vegetables.pop();
console.log(`Vegetables: ${vegetables}`);

//removing first element
fruit.shift();
console.log(`Fruit: ${fruit}`);

//finding index of orange and adding to end of array
fruit.push(fruit.indexOf("orange"));
console.log(`Fruit: ${fruit}`);

//print length and push that number to end of array
console.log(vegetables.length);
vegetables.push(vegetables.length);
console.log(`Vegetables: ${vegetables}`);

//combining both arrays
food = fruit.concat(vegetables);
console.log(`Food: ${food}`);

//removing two elements from array starting at index 4
food.splice(4, 2);
console.log(`Food: ${food}`);

//reversing order of array
food.reverse();
console.log(`Food: ${food}`);

//converting array to string and printing string
var foodString = food.toString();
console.log(`Food string: ${foodString}`);