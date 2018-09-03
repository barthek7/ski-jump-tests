const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
    describe('all different notes', () => {
        it('All integers', () => {
            const actual = calculateStylePoints([15, 18, 19, 14, 16]);
            const expected = 49;
            assert.equal(actual, expected);
        });

        it('Contains double numbers', () => {
            const actual = calculateStylePoints([18, 18.5, 17.5, 19.5, 20]);
            const expected = 56;
            assert.equal(actual, expected);
        });

        it('Contains only double numbers', () => {
            const actual = calculateStylePoints([12.5, 15.5, 17.5, 19.5, 18.5]);
            const expected = 51.5;
            assert.equal(actual, expected);
        });
    });
    describe('Same notes', () => {
        it('Not rejected notes', () => {
            const actual = calculateStylePoints([18, 17, 18, 19, 20]);
            const expected = 55;
            assert.equal(actual, expected);
        });

        it('One note rejected', () => {
            const actual = calculateStylePoints([20, 17, 18, 19, 20]);
            const expected = 57;
            assert.equal(actual, expected);
        });
        it('Contains double numbers', () => {
            const actual = calculateStylePoints([18.5, 17.5, 17.5, 19.5, 20]);
            const expected = 55.5;
            assert.equal(actual, expected);
        });
    });

    describe('More than two same notes', () => {
        it('Contains three same integer notes', () => {
            const actual = calculateStylePoints([20, 20, 18, 19, 20]);
            const expected = 59;
            assert.equal(actual, expected);
        });

        it('Contains three same double notes', () => {
            const actual = calculateStylePoints([20, 19.5, 19.5, 19.5, 20]);
            const expected = 59;
            assert.equal(actual, expected);
        });

        it('Five same integer notes', () => {
            const actual = calculateStylePoints([19, 19, 19, 19, 19]);
            const expected = 57;
            assert.equal(actual, expected);
        });

        it('Five same double notes', () => {
            const actual = calculateStylePoints([19.5, 19.5, 19.5, 19.5, 19.5]);
            const expected = 58.5;
            assert.equal(actual, expected);
        });
    });
});