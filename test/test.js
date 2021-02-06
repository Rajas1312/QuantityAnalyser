const quantityTesting = require('../source/quantityAnalyser')
let assert = require('chai').assert
let unit = require('../source/unit')
describe('positive quantity analysis', () => {

    it('given lengths when equal should return true', () => {
        assert.isTrue(quantityTesting.compareLengths(unit.getFoot() * 3, unit.getYard() * 1));
    })

    it('given lengths when unequal should return false', () => {
        assert.isFalse(quantityTesting.compareLengths(unit.getFoot() * 1, unit.getYard() * 1));
    })

    it('given lengths when unequal should return false', () => {
        assert.isFalse(quantityTesting.compareLengths(unit.getInch() * 1, unit.getYard() * 1));
    })

    it('given lengths when equal should return true', () => {
        assert.isTrue(quantityTesting.compareLengths(unit.getYard() * 1, unit.getInch() * 36));
    })

    it('given lengths when equal should return true', () => {
        assert.isTrue(quantityTesting.compareLengths(unit.getInch() * 36, unit.getYard() * 1));
    })

    it('given lengths when equal should return true', () => {
        assert.isTrue(quantityTesting.compareLengths(unit.getYard() * 1, unit.getFoot() * 3));
    })

    it('given lengths when equal should return true', () => {
        assert.isTrue(quantityTesting.compareLengths(unit.getInch1() * 2, unit.getCentimeter() * 5));

    })




})
