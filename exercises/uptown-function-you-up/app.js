var lyrics = ["This", "hit", "that", "ice", "cold", 
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty", "test"];

function printLyrics(arr) {
    return arr.join(" ");
}

function printLyricsBackwards(arr) {
    return arr.slice().reverse().join(" ");
}

function printEveryOtherLyric(arr) {
    var everyOtherLyric = "";
    for(var i = 0; i < arr.length; i++) {
        if(i % 2 === 0) {
            everyOtherLyric += `${arr[i]} `;
        }
    }
    return everyOtherLyric;
}

//my initial solution
function swapLyricPlaces(arr) {
    var lyricsSwapped = "";
    if(arr.length % 2 !== 0) { 
        for(var i = 0; i < arr.length - 1; i++) {
            var temp = `${arr[i]}`;
            arr.splice(i, 1);
            arr.splice(i++, 0, temp);
            lyricsSwapped += `${arr[i]} ${temp} `; 
        }
        lyricsSwapped += `${arr[arr.length - 1]}`
    } else {
        for(var i = 0; i < arr.length; i++) {
            var temp = `${arr[i]}`;
            arr.splice(i, 1);
            arr.splice(i++, 0, temp);
            lyricsSwapped += `${arr[i]} ${temp} `; 
        }
    }
    return lyricsSwapped;
}

//solution with instructor
function swapLyricPlaces2(arr) {
    var lyricsSwapped = "";
    if(arr.length % 2 !== 0) {
        for(var i = 0; i < arr.length - 1; i += 2) {
            lyricsSwapped += `${arr[i + 1]} ${arr[i]} `;
        }
        lyricsSwapped += arr[arr.length - 1]
    } else {
        for(var i = 0; i < arr.length; i += 2) {
            lyricsSwapped += `${arr[i + 1]} ${arr[i]} `;
        }
    }
    return lyricsSwapped;
}

//my initial solution
function printLyricsRandomOrder(arr) {
    var randomLyrics = arr.slice().sort().toString();
    for(var i = 0; i < randomLyrics.length; i++) {
        randomLyrics = randomLyrics.replace(",", " ");
    }
    return randomLyrics;
}

//solution with class/instructor
function random(arr) {
    var output =[];
    var length = arr.length
    for (var i=0; i<length ; i++) {
        var getRandom = Math.floor(Math.random() * arr.length);
        output.push(arr[getRandom]);
        arr.splice(getRandom, 1);
    }
    return output.join(' ');
} 

console.log();
console.log(printLyrics(lyrics));
console.log();
console.log(printLyricsBackwards(lyrics));
console.log();
console.log(printEveryOtherLyric(lyrics));
console.log();
console.log(swapLyricPlaces(lyrics));
console.log();
console.log(swapLyricPlaces2(lyrics));
console.log();
console.log(printLyricsRandomOrder(lyrics));
console.log();
console.log(random(lyrics));
console.log();