const name = 'John'
const age = 101
const pets = ["cat", "dog"]

const petObjects = []

for (let i = 0; i < pets.length; i++){
  const pet = {type: pets[i]}
  if (pets[i] === "cat"){
    var petName = "fluffy"
  } else {
    var petName = "spot"
  }
  pet.name = petName;
  petObjects.push(pet);
}

console.log(petObjects);

//------------------------------------------------------------------------------------------------------------------------------------

const carrots = ["bright orange", "ripe", "rotten"];
const vegetables = carrots.map(carrot => ({type: "carrot", name: carrot}));

console.log(vegetables);

//------------------------------------------------------------------------------------------------------------------------------------

const people = [
  {
      name: 'Princess Peach',
      friendly: false
  },
  {
      name: 'Luigi',
      friendly: true
  },
  {
      name: 'Mario',
      friendly: true
  },
  {
      name: 'Bowser',
      friendly: false
  }
];

const friends = people.filter(person => !!person.friendly);

console.log(friends);

//------------------------------------------------------------------------------------------------------------------------------------

// function doMathSum(a, b){
//   return a + b
// }

const doMathSum = (a, b) => a + b;

// var produceProduct = function(a, b){
//   return a * b
// }

const produceProduct = (a, b) => a * b;

console.log(doMathSum(1, 2));
console.log(produceProduct(2, 2));

//------------------------------------------------------------------------------------------------------------------------------------

const printPerson = (fName = "Jane", lName = "Doe", age = 100) => `Hi ${fName} ${lName}, how does it feel to be ${age}?`;
console.log(printPerson());
console.log(printPerson("Brooke"));
console.log(printPerson("Brooke", "Horrocks"));
console.log(printPerson("Brooke", "Horrocks", 27));

//------------------------------------------------------------------------------------------------------------------------------------

const animals = [
  {type: "dog", name: "theodore"}, 
  {type: "cat", name: "whiskers"}, 
  {type: "pig", name: "piglette"}, 
  {type: "dog", name: "sparky"}
];

// const dogs = animals.filter((animal) => animal.type === "dog" ? true : false;
const dogs = animals.filter(animal => {return animal.type === "dog";});

console.log(dogs);

//------------------------------------------------------------------------------------------------------------------------------------

const printVacation = (name, location) => `Hi ${name}! Welcome to ${location}.`;
console.log(printVacation("Brooke", "New York City"));