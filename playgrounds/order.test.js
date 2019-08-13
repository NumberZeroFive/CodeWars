const testOrder = require('./order');

describe('test order', () => {
  test('should return sorted order', () => {
    expect(testOrder('is2 Thi1s T4est 3a')).toBe('Thi1s is2 3a T4est');
  });
});
