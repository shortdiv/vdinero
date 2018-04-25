const currency = {
  usd: {
    'symbol': '$',
    'code': 'USD',
    'delimiter': ',',
    'decimal': '.',
    'separator': 1000,
    'precision': 2
  },
  rupee: {
    'symbol': '₹',
    'code': 'INR',
    'delimiter': ',',
    'decimal': '.',
    'separator': 100000, // 1,00,000 1,00,00,000
    'precision': 2
  },
  yuan: {
    'symbol': '¥',
    'code': 'CNY',
    'delimiter': ',',
    'decimal': '.',
    'separator': 1000,
    'precision': 2
  },
  euro: {
    'symbol': '€',
    'code': 'EUR',
    'delimiter': '.',
    'decimal': ',',
    'separator': 1000,
    'precision': 2
  }
}

module.exports = { currency }
