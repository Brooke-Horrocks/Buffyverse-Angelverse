var { assert } = require("chai");

var getLongestString = require("../app.js");

describe("Testing the getLongestString function", function(){
    it("Should return bb", function(){
        assert.equal(getLongestString(["", "a", "bb", "cc", "dd", "ee"]), "bb")
    })
    it("Should return abcd", function(){
        assert.equal(getLongestString(["abc", "abcd", "ab", "xyzz"]), "abcd")
    })
    it("should return an empty string", function(){
        assert.equal(getLongestString([""]), "")
    })
})