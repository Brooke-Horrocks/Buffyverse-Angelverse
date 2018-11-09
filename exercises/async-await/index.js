const flipCoin = (counter = 0) => new Promise((resolve, reject) => {
    const result = Math.random() < .5;
    setTimeout(() => {
        if(result) resolve(counter)
        reject(counter)
    }, 1500)
});

const handleHeads = counter => console.log(counter + 1);
const handleTails = counter => console.log(counter + 0);

const viewTally = counter => console.log(counter);

flipCoin()
    .then(handleHeads)
    .then(flipCoin)
    .then(handleHeads)
    .then(flipCoin)
    .then(viewTally)
    .catch(handleTails)

console.log("Call it in the air...");