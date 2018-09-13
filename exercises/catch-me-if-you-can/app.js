var user = {
    username: "sam",
    password: "123abc"
}

function sum(x, y){
    if(typeof x !== "number" || typeof y !== "number"){
        throw Error("At least one input is not a number. Both inputs must be a number");
    } else {
        console.log(x + y)
    }
}

function login(username, password){
    if(username !== user.username || password!== user.password){
        throw Error("The username or password entered does not match");
    } else {
        console.log("Login successful!");
    }
}

try{
    sum("1", "2");
}catch(err) {
    console.log(err.message);
}

try{
    sum(1, 2);
}catch(err) {
    console.log(err.message);
}

try {
    login("sam", "123abd");
} catch(err){
    console.log(err.message);
}

try {
    login("sam", "123abc");
} catch(err){
    console.log(err.message);
}