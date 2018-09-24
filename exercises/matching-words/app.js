const pirateInscription = 'Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas.';

const matchingWords = (str) => {
    let tempArray = str.split(" ");
    let matchingArray = [];

    for(let i = 0; i < tempArray.length; i++){
        if((tempArray.indexOf(tempArray[i]) !== tempArray.lastIndexOf(tempArray[i])) && (matchingArray.includes(tempArray[i]) === false)){
            matchingArray.push(tempArray[i]);
        }
    }

    return matchingArray;
}

console.log(matchingWords(pirateInscription));