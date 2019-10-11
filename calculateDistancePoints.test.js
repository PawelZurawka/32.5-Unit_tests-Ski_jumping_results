const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('', () => {
  describe('calculateDistancePoints', () => {
    it('distance 99.5m, normal hill, k-point 98m - score 63', () => {
      const actual = calculateDistancePoints(99.5, 'normal', 98);

      const expected = 63;

      assert.equal(actual, expected);
    });

    it('distance 155m, big hill, k-point 140m - score 87', () => {
      const actual = calculateDistancePoints(155, 'big', 140);

      const expected = 87;

      assert.equal(actual, expected);
    });

    it('distance 225m, mammoth hill, k-point 200m - score 150', () => {
      const actual = calculateDistancePoints(225, 'mammoth', 200);

      const expected = 150;

      assert.equal(actual, expected);
    });

    it('distance 90m, normal hill, k-point 98m distance shorter then k-point - score 44', () => {
      const actual = calculateDistancePoints(90, 'normal', 98);

      const expected = 44;

      assert.equal(actual, expected);
    });

    it('distance 105m, normal hill, k-point 98m distance longer then k-point - score 45', () => {
      const actual = calculateDistancePoints(105, 'normal', 98);

      const expected = 74;

      assert.equal(actual, expected);
    });

    it('distance 98m, normal hill, k-point 98m distance equal to k-point - score 45', () => {
      const actual = calculateDistancePoints(98, 'normal', 98);

      const expected = 60;

      assert.equal(actual, expected);
    });
  });
});
