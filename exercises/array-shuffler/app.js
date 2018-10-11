const arrayShuffler = arr => {
    const output = [];
    for(let i = 0; arr.length > 0; i++){
        currentElement = Math.floor(Math.random() * (arr.length - 1));
        output.push(arr[currentElement]);
        arr.splice(currentElement, 1);
    }
    return output;
}

const decks = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10], 
    [4, 23, 76, 24, 10]
]

console.log(arrayShuffler(decks[0]));
console.log(arrayShuffler(decks[1]));
console.log(arrayShuffler(decks[2]));