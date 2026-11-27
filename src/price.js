function parsePrice(value) {
    return parseFloat(value.replace('₴', ''));
}

function formatPrice(value) {
    return `₴${value.toFixed(2)}`;
}

function addPrices(price1, price2) {
    return formatPrice(parsePrice(price1) + parsePrice(price2));
}

module.exports = { parsePrice, formatPrice, addPrices };
