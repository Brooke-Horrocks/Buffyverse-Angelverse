const validateIpAddress = (ipAddress) => {
    isValid = false;
    ipAddyArray = ipAddress.split(".");
    if(ipAddyArray.length === 4){
        for(let i = 0; i < 4; i++){
            let currentNum = ipAddyArray[i];
            if(currentNum > 255 || currentNum < 0 || !Number(currentNum) || currentNum === ""){
                isValid = false;
                break;
            } else {
                isValid = true;
            }
        }
    }
    return isValid;
}

module.exports = { validateIpAddress };