const { assert } = require('chai');
const { checkTypes, checkTypesAgain } = require('./app');

testCases = [
    [
        [1,2,3],
        ["a",1,"c"],
        [true, 'b', true]
    ],
    [
        [true,false,true],
        [false,false,true]
    ]
];

describe('Testing Check Types function', () => {
    it('should return false', () => {
        assert.isFalse(checkTypes(testCases[0]), false);
    })
    it('Should return true', () => {
        assert.isTrue(checkTypes(testCases[1]), true);
    })
});

describe('Testing Check Types Again function', () => {
    it('should return false', () => {
        assert.isFalse(checkTypesAgain(testCases[0]), false);
    })
    it('Should return true', () => {
        assert.isTrue(checkTypesAgain(testCases[1]), true);
    })
});