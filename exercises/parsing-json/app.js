var xhr = new XMLHttpRequest();

var body = document.querySelector("body");
var data;
var array;

xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200){
        var jsonData = xhr.responseText;
        data = JSON.parse(jsonData);
        array = data.objects[0].pokemon;
        parsePokemon(array);
    }
};

function parsePokemon(arr){
    arr.forEach(function(item){
        var newParagraph = document.createElement("p");
        newParagraph.className = "pokemonName";
        newParagraph.innerHTML = item.name;
        body.prepend(newParagraph);
    })
}

xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true);
xhr.send();