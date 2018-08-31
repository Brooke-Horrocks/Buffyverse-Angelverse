function removeA(str) {
    for(var i = 0; i < str.length; i++) {
        str = str.replace(/a/gi, "");
    }
    console.log(str);
}

removeA("I can't see any A in my sentences! Aaaaaah!");