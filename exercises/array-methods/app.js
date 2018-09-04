var fruit = ["banana", 
"apple", 
"orange", 
"watermelon"];
var vegetables = ["carrot", 
"tomato", 
"pepper", 
"lettuce"];

vegetables.pop();
console.log(`Vegetables: ${vegetables}`);

fruit.shift();
console.log(`Fruit: ${fruit}`);

fruit.push(fruit.indexOf("orange"));
console.log(`Fruit: ${fruit}`);

console.log(vegetables.length);
vegetables.push(vegetables.length);
console.log(`Vegetables: ${vegetables}`);

food = fruit.concat(vegetables);
console.log(`Food: ${food}`);

food.splice(4, 2);
console.log(`Food: ${food}`);

food.reverse();
console.log(`Food: ${food}`);

var foodString = food.toString();
console.log(`Food string: ${foodString}`);