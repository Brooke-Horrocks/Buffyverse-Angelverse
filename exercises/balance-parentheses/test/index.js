const balanceParentheses = require('../app');
const { assert } = require('chai');

testCases = [
    '()()',
    '(())',
    '()))',
    ')()(',
    '())('
]

describe('Testing the balanceParentheses function', () =>{
    it('should return true', () =>{
        assert.isTrue(balanceParentheses(testCases[0]))
    })
    it('should return true', () =>{
        assert.isTrue(balanceParentheses(testCases[1]))
    })
    it('should return false', () =>{
        assert.isFalse(balanceParentheses(testCases[2]))
    })
    it('should return false', () =>{
        assert.isFalse(balanceParentheses(testCases[3]))
    })
    it('should return false', () =>{
        assert.isFalse(balanceParentheses(testCases[4]))
    })
})