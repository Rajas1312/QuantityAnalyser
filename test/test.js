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

    it('given addition of lengths when equal should pass the test', () => {
        assert.equal(quantityTesting.addUnits(unit.getInch1() * 2, unit.getInch1() * 2), unit.getInch1() * 4);
    })

    it('given addition of lengths when equal should pass the test', () => {
        assert.equal(quantityTesting.addUnits(unit.getFoot() * 1, unit.getInch() * 2), unit.getInch() * 14);
    })

    it('given addition of lengths when equal should pass the test', () => {
        assert.equal(quantityTesting.addUnits(unit.getFoot() * 1, unit.getFoot() * 1), unit.getInch() * 24);
    })

    it('given addition of lengths when equal should pass the test', () => {
        assert.equal(quantityTesting.addUnits(unit.getInch1() * 2, unit.getCentimeter() * 2.5), unit.getInch1() * 3);
    })

    it('given volume when equal should pass the test', () => {
        assert.equal(unit.getGallons(), unit.getLitre() * 3.78);
    })

    it('given volume when equal should pass the test', () => {
        assert.equal(unit.getLitre(), unit.getMl() * 1000);
    })

    it('given addition  when equal should pass the test', () => {
        assert.equal(quantityTesting.addUnits(unit.getGallons() * 1, unit.getLitre() * 3.78), unit.getLitre() * 7.56);
    })

    it('given addition  when equal should pass the test', () => {
        assert.equal(quantityTesting.addUnits(unit.getLitre() * 1, unit.getMl() * 1000), unit.getLitre() * 2);
    })

    it('given weights when equal should pass the test', () => {
        assert.equal(unit.getKilos(), unit.getGrams() * 1000);
    })

    it('given weights when equal should pass the test', () => {
        assert.equal(unit.getTons(), unit.getKilos() * 1000);
    })

    it('given addition  when equal should pass the test', () => {
        assert.equal(quantityTesting.addUnits(unit.getTons() * 1, unit.getGrams() * 1000), unit.getKilos() * 1001);
    })











})
