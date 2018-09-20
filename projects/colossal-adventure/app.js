const reader = require("readline-sync");

console.log("Welcome to Azeroth!");
var userName = reader.question("What is your name? ");

const player = {
    playerName: userName, 
    hp: 20, 
    inventory: ["Map"]
};

class Enemy{
    constructor(name, hp, itemToDrop, dyingSound, attackPower = Math.ceil(Math.random() * 5 + 2)){
        this.name = name;
        this.hp = hp;
        this.itemToDrop = itemToDrop;
        this.dyingSound = dyingSound;
        this.attackPower = attackPower;
    }
    die(){
        console.log(this.dyingSound);
    }
}

//function to randomly generate enemy
function selectMonster(){
    switch(Math.ceil(Math.random() * 3)){
        case 1:
            return new Enemy("Kobold", 4, "Dagger (+2 damage)", "You no take candle!");
        case 2:
            return new Enemy("Murloc", 6, "Minor Healing Potion", "Mrrrglglllggggr");
        case 3:
            return new Enemy("Gnoll", 8, "Robe of Protection (+2 armor)", "No hurt!");
    }
}

//function to print player stats
function printPlayer(){
    return `\nName: ${player.playerName}.\nHealth: ${player.hp}/20.\nInventory: ${player.inventory}\n`;
}

//game loop
while(player.hp > 0){

    //array of main options
    const mainOptions = ["Walk", "Use health potion", "Print stats", "Remove items from inventory"];
    const index = reader.keyInSelect(mainOptions, "What do you want to do next? ");
    if(index === 0){
        
        //33% chance to generate enemy
        if(Math.random() < .34){
            var playerDamageAmt = Math.ceil(Math.random() * 5);
            if(player.inventory.indexOf("Dagger") !== -1){
                playerDamageAmt += 2;
            }
            
            //calling function to generate random enemy
            const currentEnemy = selectMonster();
            const enemyBeginningHealth = currentEnemy.hp;

            console.log(`\nA ${currentEnemy.name} appears.`);
            const staysToFight = reader.keyInYNStrict("Do you stay and fight? ");
            
            if(staysToFight){
                
                //fight encounter loop
                while(currentEnemy.hp > 0 && player.hp > 0){
                    if(player.hp > 0) {
                        currentEnemy.hp -= playerDamageAmt;
                        console.log(`\nYou attack the ${currentEnemy.name} for ${playerDamageAmt}. It has ${currentEnemy.hp}/${enemyBeginningHealth} health left.`);
                    }
                    if(currentEnemy.hp > 0) {
                        if(player.inventory.indexOf("Robe of Protection") !== -1){
                            player.hp -= (currentEnemy.attackPower - 2);
                            console.log(`The ${currentEnemy.name} attacked you for ${currentEnemy.attackPower - 2}. You have ${player.hp}/20 health left.\n`);
                        }else{
                            player.hp -= currentEnemy.attackPower;
                            console.log(`The ${currentEnemy.name} attacked you for ${currentEnemy.attackPower}. You have ${player.hp}/20 health left.\n`);
                        }
                    }
                }
                if(player.hp > 0 && (player.inventory.length < 5)){
                    player.inventory.push(currentEnemy.itemToDrop);
                    currentEnemy.die();
                    console.log(`The ${currentEnemy.name} dropped a ${currentEnemy.itemToDrop}. It has been added to your inventory.\n`);
                } else if(player.hp > 0){
                    console.log(`The ${currentEnemy.name} dropped a ${currentEnemy.itemToDrop}. Inventory is full, unable to pick up.\n`);
                }
            } else {
                
                //50% chance enemy will hit player once while trying to escape
                if(Math.random() < .51){
                    player.hp -= currentEnemy.attackPower;
                    console.log(`\nThe ${currentEnemy.name} was able to hit you while you ran. Your health was damaged by ${currentEnemy.attackPower}. Your health is now ${player.hp}/20.`);
                } else {
                    console.log("\nYou escape successfully.");
                }
            }
        } else {
            console.log("\nYou're safe for now.")
        }
    } else if(index === 1){
        if(player.inventory.indexOf("Minor Healing Potion") !== -1){
            player.hp += 5;
            player.inventory.splice(player.inventory.indexOf("Minor Healing Potion"), 1);
            console.log(`\nYou have healed five health. You now have ${player.hp}/20 health.\nNew Inventory: ${player.inventory}.`);
        } else {
            console.log("\nYou do not have a health potion to use.\n");
        }
    }else if(index === 2){
        console.log(printPlayer());
    } else if(index === 3) {
        const itemToRemove = reader.keyInSelect(player.inventory, "\nWhich item would you like to remove? ");
        if(itemToRemove !== -1){
            console.log(`The ${player.inventory[itemToRemove]} was removed.`);
            player.inventory.splice(itemToRemove, 1);
        } else{
            console.log("\nNothing was removed.")
        }
    } else {
        console.log("\nYou look around aimlessly.");
    }
}

console.log("You died. You can either resurrect with the spirit healer or run back to your body (Hopefully you're a night elf).");