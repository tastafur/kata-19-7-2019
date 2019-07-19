const expect = require('chai').expect
const { lookAndSay } = require('./index')
describe('Look-and-say sequence', () => {
    it('should return one concat with the digit when the input one digit', () => {
        expect('11').to.be.equal(lookAndSay(1))
    })

    it('should return three concat with the digit when the input one digit', () => {
        expect('13').to.be.equal(lookAndSay(3))
    })

    it('should return number of times the digit is repeated concat with the digit when the input is more than one the digit and all the digits all the same', () => {
        expect('51').to.be.equal(lookAndSay(11111))
    })

    it('should return the number of times that a digit is repeated and this digit for each block of similar numbers when the input is a sequence of numbers', () => {
        expect('111221').to.be.equal(lookAndSay(1211))
    })

    it('should return the number of times that a digit is repeated and this digit for each block of similar numbers when the input is a sequence of numbers for 312211', () => {
        expect('13112221').to.be.equal(lookAndSay(312211))
    })
})