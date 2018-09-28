const multiplicationTable = (x) => {
    const output = [];
    for(let row = 1; row <= x; row++){
        output.push([]);
        for(let col = 1; col <= x; col++){
            output[row - 1].push(row * col);
        }
    }
    return output;
}

console.log(multiplicationTable(10));