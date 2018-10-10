const gameOfThrees = (n, counter) => {
    //base case
    if(n === 1) return counter;

    const addOne = (n + 1);
    const minusOne = (n - 1)
    
    //recursion
    if(n % 3 === 0) return gameOfThrees(n / 3, counter + 1)
    if(addOne % 3 === 0) return gameOfThrees(addOne / 3, counter + 1)
    if(minusOne % 3 === 0) return gameOfThrees(minusOne / 3, counter + 1)
}

//test cases
console.log(gameOfThrees(1, 0));
console.log(gameOfThrees(9, 0));
console.log(gameOfThrees(5, 0));
console.log(gameOfThrees(15, 0));
console.log(gameOfThrees(33, 0));
console.log(gameOfThrees(600, 0));
console.log(gameOfThrees(10000, 0));
console.log(gameOfThrees(500000, 0))