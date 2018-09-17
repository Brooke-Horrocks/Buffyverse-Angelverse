var {assert} = require("chai");

//import functions to test
var getOlderThan18 = require("../app").getOlderThan18;
var sortOldPeople = require("../app").sortOldPeople;
var listPeople = require("../app").listPeople;

//TEST CASE
var people = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
];

//EXPECTED VALUES
var peopleOlderThan18 = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
];
var sortedOldPeople = [
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },{
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]
var listOfPeople = [
    "<li>Sarah Palin is 47</li>",
    "<li>Frank Zappa is 12</li>",
    "<li>Rick Sanchez is 78</li>",
    "<li>Morty Smith is 29</li>",   
    "<li>Kyle Mooney is 27</li>", 
    "<li>Pasha Datsyuk is 13</li>", 
    "<li>Lev Tolstoy is 82</li>", 
]

describe("Testing older than 18", function(){
    it("should return an array of people over 18", function(){
        assert.deepEqual(getOlderThan18(people), peopleOlderThan18);
    })
});

describe("Testing sort old people", function(){
    it("should return a sorted list of old people by last name", function(){
        assert.deepEqual(sortOldPeople(peopleOlderThan18), sortedOldPeople);
    })
})

describe("Testing list people", function(){
    it("should return a list of people", function(){
        assert.deepEqual(listPeople(people), listOfPeople);
    })
})