var {assert} = require("chai");
var isPalindrome = require("../app.js");

var testValues = ["Star Rats!", "palindrome", "I madam, I made radio! So I dared! Am I mad?? Am I?!"];

describe("Testing the palindrome finder function", function(){
    it("should return true", function(){
        assert.isTrue(isPalindrome(testValues[0]));
    })
    it("should return false", function(){
        assert.isFalse(isPalindrome(testValues[1]));
    })
    it("should return true", function(){
        assert.isTrue(isPalindrome(testValues[2]));
    })
})