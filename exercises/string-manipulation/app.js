var reader = require("readline-sync");

var firstName = reader.question("\nWhat is your first name? ");
console.log("Thanks " + firstName.toUpperCase() + ".");

var lastName = reader.question("\nHow about your last name? ");
console.log("Nice to meet you " + firstName.concat(" ", lastName) + ", I'm Brooke.");

var age = reader.question("\nHow old are you? ");
console.log("Okay, " + firstName + ", you are " + age + ". That's cool. I'm 27 years old.")

var likes = reader.question("\n" + firstName + ", why don't you tell me some things that you like to do? ");
console.log("\nOkay so this is what I got: " + likes + "... \nThat was kind of long. " + likes.length + " characters to be exact. Here is the last half of what you told me: " + likes.slice(likes.length / 2));

var startSomewhereElse = reader.keyInYN("\nWould you like me to start somewhere else in your likes? ");
if(startSomewhereElse) {
    console.log("\nWhere would you like me to start?");
    var startPoint = reader.question("Choose a number between 0 and " + (likes.length - 1) + ". ");
} else {
    console.log("Oh okay, that's cool.");
}

if(startSomewhereElse){  
    console.log("Okay here it is: " + likes.slice(startPoint));
}

var areBesties = reader.keyInYN("\nYo, " + firstName + ", so are we best friends now? ");
if(areBesties){
    console.log("Yaaaaaasss I knew it. Let's go do some of the things you like to do.");
} else {
    console.log("Okay fine, I didn't like you anyway. PEACE BRUH.")
}