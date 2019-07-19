const expect = require('chai').expect
const { lockAndSay } = require('./index')
describe('Look-and-say sequence', () => {
    it('should return one concat with the digit when the input one digit', () => {
        expect('11').to.be.equal(lockAndSay(1))
    })

    it('should return three concat with the digit when the input one digit', () => {
        expect('13').to.be.equal(lockAndSay(3))
    })

    it('should return number of times the digit is repeated concat with the digit when the input is more than one the digit and all the digits all the same', () => {
        expect('51').to.be.equal(lockAndSay(11111))
    })
})