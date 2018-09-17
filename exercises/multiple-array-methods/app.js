//filter method does not change the original array
function getOlderThan18(people){
    return people.filter(function(person){
        return person.age >= 18;
    });
}

//sort method does change original array. Slice will copy it and sort will change the copy. localeCompare compares two full strings
function sortOldPeople(oldPeople){
    return oldPeople.slice().sort(function(a, b){
        return a.lastName.localeCompare(b.lastName);
    })
}

function listPeople(people){
    return people.map(function(person){
        return `<li>${person.firstName} ${person.lastName} is ${person.age}</li>`
    })
}

module.exports = {
    getOlderThan18: getOlderThan18, 
    sortOldPeople: sortOldPeople,
    listPeople: listPeople
}