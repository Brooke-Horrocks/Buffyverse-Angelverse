function randomPasswordGenerator(number){
    var min =33;
    var max = 122;
    var password = "";

    for(var i = 0; i < number; i++){
        password += String.fromCharCode(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return password;
}

console.log("\n" + randomPasswordGenerator(5) + "\n");
console.log("\n" + randomPasswordGenerator(8) + "\n");
console.log("\n" + randomPasswordGenerator(10) + "\n");
console.log("\n" + randomPasswordGenerator(7) + "\n");