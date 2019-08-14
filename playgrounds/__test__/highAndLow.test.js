const testHighAndLow = require('../highAndLow');

describe('test high and low number', () => {
  test("testHighAndLow  ('1 2 3 4 5') return 5 1", () => {
    expect(testHighAndLow('1 2 3 4 5')).toBe('5 1');
  });
  test("testHighAndLow  ('1 2 -3 4 5') return 5 -3", () => {
    expect(testHighAndLow('1 2 -3 4 5')).toBe('5 -3');
  });
  test("testHighAndLow  ('1 9 3 4 -5') return 9 -5", () => {
    expect(testHighAndLow('1 9 3 4 -5')).toBe('9 -5');
  });
  test("testHighAndLow  ('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6') return 542 -214", () => {
    expect(testHighAndLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6')).toBe('542 -214');
  });
});
