const balanceParentheses = str => {
    let counter = 0;
    if(str[0] === "(" && str[str.length - 1] === ")"){
        for(let i = 0; i < str.length; i++){
            str[i] === "(" ? counter-- : counter++;
        }
        return counter === 0 ? true : false;
    }else{
        return false;
    }
}

module.exports = balanceParentheses;