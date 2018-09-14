//import of chai
var { assert } = require("chai");

//import of getLongestString function
var getLongestString = require("../app.js");

//put each case we are testing into an object
var testCases = {
    one: ["", "a", "bb", "cc", "dd", "ee"],
    two: ["abc", "abcd", "ab", "xyzz"],
    three: [""]
}

//describe function for our tests and description
describe("Testing the getLongestString function", function(){
    //it statements testing each case from our testCases object
    it("Should return bb", function(){
        assert.strictEqual(getLongestString(testCases.one), "bb")
    })
    it("Should return abcd", function(){
        assert.strictEqual(getLongestString(testCases.two), "abcd")
    })
    it("should return an empty string", function(){
        assert.strictEqual(getLongestString(testCases.three), "")
    })
})

//describe function showing comparison between two arrays
describe("assert method demo", function(){
    it("should return true", function(){
        assert.deepEqual([1, 2, 3], [1, 2, 3])
    })
    it("should return false", function(){
        assert.strictEqual([1, 2, 3], [1, 2, 3])
    })
})

/* two arrays with the same contents are not equal because they are stored in different memory, example:
[1, 2, 3] === [1, 2, 3] // --> FALSE!!

unless you have the second array point to the same memory, example:
var numbers = [1, 2, 3];
var sameNumbers = numbers;
numbers === sameNumbers // --> TRUE!! */