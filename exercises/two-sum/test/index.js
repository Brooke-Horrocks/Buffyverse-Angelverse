const { assert } = require("chai");
const twoSum = require("../app");

testCases = [
    [[1, 2, 3], 4],
    [[4, 7, 6], 11],
    [[11, 4, 2, 8, 18, 10], 22],
    [[6, 3, 8, 5], 15]
]

describe("Testing the twoSum function", ()=>{
    it("should return [0, 2]", ()=>{
        assert.deepEqual(twoSum(testCases[0][0], testCases[0][1]), [0, 2]);
    })
    it("should return [0, 1]", ()=>{
        assert.deepEqual(twoSum(testCases[1][0], testCases[1][1]), [0, 1]);
    })
    it("should return [1, 4]", ()=>{
        assert.deepEqual(twoSum(testCases[2][0], testCases[2][1]), [1, 4]);
    })
    it("should return 'No numbers adding up found'", ()=>{
        assert.strictEqual(twoSum(testCases[3][0], testCases[3][1]), "No numbers adding up found");
    })
})