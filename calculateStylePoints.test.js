const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('', () => {
  describe('calculateStylePoints', () => {
    it('should return 52 - all different notes', () => {
      const actual = calculateStylePoints([18, 19, 18, 15, 16]);

      const expected = 52;

      assert.equal(actual, expected);
    });

    it('should return 54 - all same notes', () => {
      const actual = calculateStylePoints([18, 18, 18, 18, 18]);

      const expected = 54;

      assert.equal(actual, expected);
    });

    it('should return 50.5 - all different notes with halfs', () => {
      const actual = calculateStylePoints([18.5, 16.5, 15.5, 14.5, 19.5]);

      const expected = 50.5;

      assert.equal(actual, expected);
    });

    it('should return 0 - all 0 point notes', () => {
      const actual = calculateStylePoints([0, 0, 0, 0, 0]);

      const expected = 0;

      assert.equal(actual, expected);
    });

    it('should return 15 - two equal lower notes', () => {
      const actual = calculateStylePoints([6, 7, 5, 4, 4]);

      const expected = 15;

      assert.equal(actual, expected);
    });

    it('should return 26 - two equal highest notes', () => {
      const actual = calculateStylePoints([10, 10, 6, 7, 9]);

      const expected = 26;

      assert.equal(actual, expected);
    });
  });
});
