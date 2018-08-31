function removeA(str) {
    for(var i = 0; i < str.length; i++) {
        str = str.replace("a", "");
        str = str.replace("A", "");
    }
    console.log(str);
}

removeA("I can't see any A in my sentences! Aaaaaah!");