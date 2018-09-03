const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
  describe('normal hill', () => {
    it('jump more than k-point', () => {
      const actual = calculateDistancePoints(93, 'normal', 90);
      const expected = 66;
      assert.equal(actual, expected);
    });
    
    it('jump less than k-point', () => {
      const actual = calculateDistancePoints(93, 'normal', 95);
      const expected = 56;
      assert.equal(actual, expected);
    });

    it('jump exactly k-point', () => {
      const actual = calculateDistancePoints(95, 'normal', 95);
      const expected = 60;
      assert.equal(actual, expected);
    });
  });

  describe('large hill', () => {
    it('jump less than k-point', () => {
      const actual = calculateDistancePoints(103, 'large', 120);
      const expected = 29.4;
      assert.equal(actual, expected);
    });

    it('jump more than k-point', () => {
      const actual = calculateDistancePoints(122.5, 'large', 120);
      const expected = 64.5;
      assert.equal(actual, expected);
    });

    it('jump exactly k-point', () => {
      const actual = calculateDistancePoints(125, 'large', 125);
      const expected = 60;
      assert.equal(actual, expected);
    });
  });

  describe('mamut', () => {
    it('jump more than k-point', () => {
      const actual = calculateDistancePoints(215, 'mammoth', 180);
      const expected = 162;
      assert.equal(actual, expected);
    });

    it('jump less than k-point', () => {
      const actual = calculateDistancePoints(182, 'mammoth', 190);
      const expected = 110.4;
      assert.equal(actual, expected);
    });

    it('jump exactly k-point', () => {
      const actual = calculateDistancePoints(185.5, 'mammoth', 185.5);
      const expected = 120;
      assert.equal(actual, expected);
    });
  });

  describe('wrong hill size', () => {
    it("", () => {
      const actual = calculateDistancePoints(215, 'qwert', 180);
      const expected = 'Hill size should be one of three [normal, large, mammoth]';
      assert.equal(actual, expected);
    });
  });
});