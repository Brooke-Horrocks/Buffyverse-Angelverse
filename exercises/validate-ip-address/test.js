const { assert } = require("chai");
const { validateIpAddress } = require("./app");

testCases = ["172.16.254.1", "193.234.1.856", "-32.09.212.32", "123.43.212.03.21", "222.94.!26.43", "123.4r3.e.01", "123.123.123."];

describe("Testing the Validate IP Address", () => {
    it("should be true for correct case", () =>{
        assert.isTrue(validateIpAddress(testCases[0]));
    })
    it("should be false for number higher than 255", () =>{
        assert.isFalse(validateIpAddress(testCases[1]));
    })
    it("should be false for negative numbers", () =>{
        assert.isFalse(validateIpAddress(testCases[2]));
    })
    it("should be false for more numbers than allowed", () =>{
        assert.isFalse(validateIpAddress(testCases[3]));
    })
    it("should be false for special characters", () =>{
        assert.isFalse(validateIpAddress(testCases[4]));
    })
    it("should be false for letters", () =>{
        assert.isFalse(validateIpAddress(testCases[5]));
    })
    it("should be false for empty string", () =>{
        assert.isFalse(validateIpAddress(testCases[6]));
    })
})