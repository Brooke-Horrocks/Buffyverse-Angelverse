var reader = require("readline-sync");

console.log("Welcome to Azeroth!");
var userName = reader.question("What is your name? ");

var player = {
    playerName: userName, 
    hp: 10, 
    inventory: ["map"],
    hasHealingPotion: false
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
    gnoll = {
        name: "gnoll", 
        hp: 8, 
        itemToDrop: "worn gloves"
    }
];

var mainOptions = ["walk", "use health potion"];

function printPlayer(){
    return `Name: ${player.playerName}.\nHealth: ${player.hp}/10.\nInventory: ${player.inventory}\n`;
}


while(player.hp !== 0){
    var index = reader.keyInSelect(mainOptions, "What do you want to do next? ");
    if(index === 0){
        if(Math.random() < .34){
            console.log(`A ${enemies[Math.floor(Math.random() * 3)].name} appears.`);
            var selection = reader.keyInYNStrict("Do you stay and fight? ");
            if(selection){
                //TODO write combat sequence
            } else {
                //TODO write run sequence
            }
        } else {
            console.log("You're safe for now.")
        }
    } else if(index === 1){
        if(player.hasHealingPotion){
            player.hp += 5;
            console.log("You have healed five health.\n");
        } else {
            console.log("You do not have a health potion to use.\n");
        }
    } else {
        console.log("You look around aimlessly.");
    }
}

console.log("You died. You can either resurrect with the spirit healer or run back to your body (Hopefully you're a night elf).");