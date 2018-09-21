const collectAnimals = (...animals) => animals;
console.log(collectAnimals("Dog", "Cat", "Pig"));

//--------------------------------------------------------------------------------------------------------------------------

const fruit = ["apple", "pear"];
const sweets = ["cake", "pie"];
const vegetables = ["carrot"];

const food = {fruit, sweets, vegetables};
console.log(food);

//--------------------------------------------------------------------------------------------------------------------------

const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
};
  
const { location, duration } = vacation;
console.log(`We're going to have a good time in ${location} for ${duration}`);

//--------------------------------------------------------------------------------------------------------------------------

const favoriteActivitiesInOrder = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];
const [ firstFav, secondFav, thirdFav ] = favoriteActivitiesInOrder; 
console.log(`My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`);

//--------------------------------------------------------------------------------------------------------------------------

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

const combineAnimals = (...animals) => [...animals];
console.log(combineAnimals(...realAnimals, ...magicalAnimals, ...mysteriousAnimals));

//--------------------------------------------------------------------------------------------------------------------------

const product = (...numbers) => numbers.reduce((acc, number) => acc * number);
console.log(product(2, 2, 2));

//--------------------------------------------------------------------------------------------------------------------------

const testArray = [1, 2, 3, 4, 5];

const unshift = (arr, ...characters) => [...characters].concat(arr);
console.log(unshift(testArray, 6, 7, 8, 9));