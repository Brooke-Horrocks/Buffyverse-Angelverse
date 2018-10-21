var peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Bieber",
    occupation: "Singer"
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
];

// Print all names in the people array
function printNames(arr) {
    var tempNameArray = []

    for(let i = 0; i < arr.length; i++){
        tempNameArray.push(arr[i].name);
    }
    return tempNameArray;
}

// Push names into name array and occupations into occupations array
function pushNamesAndOccupations(arr) {
    var tempNamesArray = [];
    var tempOccupationsArray = [];

    for(let i = 0; i < arr.length; i++){
        tempNamesArray.push(arr[i].name);
        tempOccupationsArray.push(arr[i].occupation);
    }
    return `Names: ${tempNamesArray} \nOccupations: ${tempOccupationsArray}`
}

// Push every other name starting with Harrison ford to names array and every other occupation starting with singer to occupations array
function everyOther(arr) {
    var tempNamesArray = [];
    var tempOccupationsArray = [];

    for(let i = 0; i < arr.length; i++){
        if(i % 2 === 0){
            tempNamesArray.push(arr[i].name)
        }else{
            tempOccupationsArray.push(arr[i].occupation)
        }
    }
    return `Names: ${tempNamesArray} \nOccupations: ${tempOccupationsArray}`
}

console.log(printNames(peopleArray));
console.log() //to break up outputs with space
console.log(pushNamesAndOccupations(peopleArray))
console.log() //to break up outputs with space
console.log(everyOther(peopleArray));