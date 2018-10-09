const twoSum = (arr, num) => {
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === num) return [i, j];
        }
    }
    return "No numbers adding up found";
}

module.exports = twoSum;