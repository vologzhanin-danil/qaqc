const { formatPrice, addPrices } = require('../src/price');

test('Unit: форматування ціни', () => {
    expect(formatPrice(100)).toBe('₴100.00');
    expect(formatPrice(19.9)).toBe('₴19.90');
});

test('Integration: додавання двох цін', () => {
    expect(addPrices('₴100', '₴50.5')).toBe('₴150.50');
    expect(addPrices('₴0.25', '₴0.75')).toBe('₴1.00');
});
