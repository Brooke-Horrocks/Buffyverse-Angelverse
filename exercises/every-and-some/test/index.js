const { assert } = require("chai");
const { every, some } = require("../app");

//test inputs for every
const case1 = [
    [1, 2, "3", 4, 5],
    num => typeof num === "number"
]
const case2 = [
    ["1", "2", "3", "4"],
    str => typeof str === "string"
]

//test inputs for some
const case3 = [
    [1, 2, "3", 4, 5],
    num => typeof num === "number"
]
const case4 = [
    ["1", "2", "3", "4"],
    str => typeof str === "number"
]

describe("Testing every function", ()=>{
    it("should return false", ()=>{
        assert.isFalse(every(...case1));
    })
    it("should return true", ()=>{
        assert.isTrue(every(...case2));
    })
})

describe("Testing some function", ()=>{
    it("should return true", ()=>{
        assert.isTrue(some(...case3));
    })
    it("should return false", ()=>{
        assert.isFalse(some(...case4));
    })
})