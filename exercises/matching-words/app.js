const pirateInscription = 'Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas.';

//My solution
const matchingWords = (str) => {
    let tempArray = str.toLowerCase().split(" ");
    let matchingArray = [];

    for(let i = 0; i < tempArray.length; i++){
        if((i !== tempArray.lastIndexOf(tempArray[i])) && !matchingArray.includes(tempArray[i])){
            matchingArray.push(tempArray[i]);
        }
    }

    return matchingArray;
}

//Instructor solution
const matchWords = str => {
    const toArray = str.toLowerCase().split(" ");
    const count = {};
    const output = [];
    for(let i = 0; i < toArray.length; i++){
        if(!count[toArray[i]]){
            count[toArray[i]] = 1;
        } else if(count[toArray[i]] === 1){
            count[toArray[i]]++;
            output.push(toArray[i]);
        }
    }
    return output;
}

//Both function calls
console.log(matchingWords(pirateInscription));
console.log(matchWords(pirateInscription));