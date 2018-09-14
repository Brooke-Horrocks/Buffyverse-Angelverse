var reader = require("readline-sync");

console.log("Welcome to Azeroth!");
var userName = reader.question("What is your name? ");

var player = {
    playerName: userName, 
    hp: 10, 
    inventory: ["map"]
};

var enemies = [
    murloc = {
        name: "murloc",
        hp: 4, 
        itemToDrop: "minor healing potion"
    },
    kobold = {
        name: "kobold",
        hp: 6, 
        itemToDrop: "dagger"
    }, 
    ogre = {
        name: "ogre", 
        hp: 8, 
        itemToDrop: "worn gloves"
    }
];

var mainOptions = ["walk", "use health potion"];
var encounterOptions = ["stay and fight", "run"];

function printPlayer(){
    return `Name: ${player.playerName}.\nHealth: ${player.hp}/10.\nInventory: ${player.inventory}`;
}


while(player.hp !== 0){
    var index = reader.keyInSelect(mainOptions, "What do you want to do next?");
    if(selection === 0){
        //write the walk function and add random enemy functionality
    } else if(selection === 1){
        //check if player has a health potion, if so, use it and increase health, otherwise, tell user no health potion
    } else {
        console.log("You look around aimlessly.");
    }
}


console.log("You died. You can either resurrect with the spirit healer or run back to your body (Hopefully you're a night elf).");