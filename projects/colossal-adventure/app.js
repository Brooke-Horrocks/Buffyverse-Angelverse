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
    gnoll = {
        name: "gnoll", 
        hp: 8, 
        itemToDrop: "pair of worn gloves"
    }
];

var mainOptions = ["walk", "use health potion", "print stats"];

function printPlayer(){
    return `\nName: ${player.playerName}.\nHealth: ${player.hp}/10.\nInventory: ${player.inventory}\n`;
}


while(player.hp > 0){
    var index = reader.keyInSelect(mainOptions, "What do you want to do next? ");
    if(index === 0){
        if(Math.random() < .34){
            var enemyDamageAmt = Math.ceil(Math.random() * 5);
            var playerDamageAmt = Math.ceil(Math.random() * 5);
            var currentEnemy = Object.assign({}, enemies[Math.floor(Math.random() * 3)]);
            var enemyBeginningHealth = currentEnemy.hp;

            console.log(`\nA ${currentEnemy.name} appears.`);
            var selection = reader.keyInYNStrict("Do you stay and fight? ");
            
            if(selection){
                while(currentEnemy.hp > 0 && player.hp > 0){
                    if(player.hp > 0) {
                        currentEnemy.hp -= playerDamageAmt;
                        console.log(`\nYou attack the ${currentEnemy.name} for ${playerDamageAmt}. It has ${currentEnemy.hp}/${enemyBeginningHealth} health left.`);
                    }
                    if(currentEnemy.hp > 0) {
                        player.hp -= enemyDamageAmt;
                        console.log(`The ${currentEnemy.name} attacked you for ${enemyDamageAmt}. You have ${player.hp}/10 health left.\n`);
                    }
                }
                if(player.hp > 0){
                    player.inventory.push(currentEnemy.itemToDrop);
                    console.log(`The ${currentEnemy.name} dropped a ${currentEnemy.itemToDrop}. It has been added to your inventory.\n`);
                }
            } else {
                if(Math.random() < .51){
                    player.hp -= enemyDamageAmt;
                    console.log(`\nThe ${currentEnemy.name} was able to hit you while you ran. Your health was damaged by ${enemyDamageAmt}. Your health is now ${player.hp}/10.`);
                } else {
                    console.log("\nYou escape successfully.");
                }
            }
        } else {
            console.log("\nYou're safe for now.")
        }
    } else if(index === 1){
        if(player.inventory.indexOf("minor healing potion") !== -1){
            player.hp += 5;
            player.inventory.splice(player.inventory.indexOf("minor healing potion"), 1);
            console.log(`\nYou have healed five health. You now have ${player.hp}/10 health.\nNew Inventory: ${player.inventory}.`);
        } else {
            console.log("\nYou do not have a health potion to use.\n");
        }
    }
    else if(index === 2){
        console.log(printPlayer());
    } else {
        console.log("\nYou look around aimlessly.");
    }
}

console.log("You died. You can either resurrect with the spirit healer or run back to your body (Hopefully you're a night elf).");