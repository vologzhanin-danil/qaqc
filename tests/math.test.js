const multiply = require('../src/math');

test('Unit: множення чисел', () => {
    expect(multiply(4, 5)).toBe(20);
    expect(multiply(-3, 2)).toBe(-6);
});
