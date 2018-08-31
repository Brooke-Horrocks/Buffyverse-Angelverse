var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]
var officeItems = [
    "stapler", 
    "monitor", 
    "computer", 
    "desk",
    "lamp", 
    "computer",
    "lamp",
    "stapler",
    "computer",
    "computer"
]
var lightToggler = [2, 3, 3]
var computerCounter = 0;
var isLightOn = false;

for(let i = 0; i < officeItems.length; i++) {
    if(officeItems[i] === "computer") {
        computerCounter++;
    } 
}

console.log(`We have ${computerCounter} computers in the office.`);

for(let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) {
        peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male" ? 
        console.log(`${peopleWhoWantToSeeMadMaxFuryRoad[i].name} is not old enough. He can't go in.`)
        :
        console.log(`${peopleWhoWantToSeeMadMaxFuryRoad[i].name} is not old enough. She can't go in.`);
    } else {
        peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male" ?
        console.log(`${peopleWhoWantToSeeMadMaxFuryRoad[i].name} is old enough. He can go in.`)
        :
        console.log(`${peopleWhoWantToSeeMadMaxFuryRoad[i].name} is old enough. She can go in.`)      
    }
}

// works but is a lot slower
// for(let i = 0; i < lightToggler.length; i++) {
//     for(let j = 0; j < lightToggler[i]; j ++) {
//         isLightOn = !isLightOn;
//     }
// }

for(let i = 0; i < lightToggler.length; i++) {
    if(lightToggler[i] % 2 !== 0) {
        isLightOn = !isLightOn;
    }
}

console.log(`Is the light on? ${isLightOn}`);