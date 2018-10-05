const adjDiff = arr => {
    let output = [];
    if(arr.length < 3){
        return "Array length is less than 3"
    }else if(arr.length === 3){
        return arr;
    } else{
        output = [arr[0], arr[1], arr[2]];
        let outputLength = arr[0].length + arr[1].length + arr[2].length;
        for(let i = 0; i < arr.length - 3; i++){
            if(outputLength < (arr[i + 1].length + arr[i + 2].length + arr[i + 3].length)){
                output = [arr[i + 1], arr[i + 2], arr[i + 3]];
                outputLength = arr[i + 1].length + arr[i + 2].length + arr[i + 3].length;
            }
        }
        return output;
    }
}

module.exports = adjDiff;