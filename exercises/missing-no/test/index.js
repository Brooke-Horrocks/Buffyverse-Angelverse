var {assert} = require("chai");
var findMissingNo = require("../app");

testCases = [
    [2,1,3,5],
    [12,10, 9],
    [-3,0,-2,3,2,-1],
    [3,5,4,8,1,2,7]
];

describe("Testing findMissingNo function", function(){
    it("should return 4", function(){
        assert.strictEqual(findMissingNo(testCases[0]), 4);
    })
    it("should return 11", function(){
        assert.strictEqual(findMissingNo(testCases[1]), 11);        
    })
    it("should return 1", function(){
        assert.strictEqual(findMissingNo(testCases[2]), 1);
    })
    it("should return 6", function(){
        assert.strictEqual(findMissingNo(testCases[3]), 6);
    })
})