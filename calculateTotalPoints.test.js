const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('', () => {
  describe('calculateTotalPoints', () => {
    it('normal - should return 131.8', () => {
      const actual = calculateTotalPoints(
        111,
        'normal',
        98,
        [19, 19.5, 19, 19, 19],
        -14.4,
        3.2
      );

      const expected = 131.8;

      assert.equal(actual, expected);
    });

    it('big - should return 137.3', () => {
      const actual = calculateTotalPoints(
        134,
        'big',
        120,
        [19, 20, 19.5, 19, 18.5],
        -5.4,
        0
      );

      const expected = 137.3;

      assert.equal(actual, expected);
    });

    it('mamooth - should return 208.3', () => {
      const actual = calculateTotalPoints(
        227.5,
        'mammoth',
        200,
        [18, 18.5, 17.5, 18.5, 18.5],
        -8.4,
        8.7
      );

      const expected = 208.3;

      assert.equal(actual, expected);
    });
  });
});
