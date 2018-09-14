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