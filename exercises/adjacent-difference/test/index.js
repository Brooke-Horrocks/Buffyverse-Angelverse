const adjDiff = require("../app");
const { assert } = require("chai");

testCases = [
    ["this", "is", "an", "array"],
    ["here", "is", "another", "test", "array"],
    ["only", "three", "strings"],
    ["only", "two"],
    ["Here", "is", "an", "array", "with", "a", "lot", "of", "elements", "to", "test", "and", "confirm", "logic"]
]

describe("Testing Adjacent Difference Function", ()=>{
    it("should return ['is', 'an', 'array']", () => {
        assert.deepEqual(adjDiff(testCases[0]), ["is", "an", "array"]);
    })
    it("should return ['another', 'test', 'array']", () => {
        assert.deepEqual(adjDiff(testCases[1]), ["another", "test", "array"]);
    })
    it("should return ['only', 'three', 'strings']", () => {
        assert.deepEqual(adjDiff(testCases[2]), ["only", "three", "strings"]);
    })
    it("should return 'Array length is less than 3'", () => {
        assert.strictEqual(adjDiff(testCases[3]), "Array length is less than 3");
    })
    it("should return ['and', 'confirm', 'logic']", () => {
        assert.deepEqual(adjDiff(testCases[4]), ['and', 'confirm', 'logic']);
    })
})