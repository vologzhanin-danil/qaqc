const isEmailValid = require('../src/validator');

test('Unit: перевірка email', () => {
    expect(isEmailValid('student@example.com')).toBe(true);
    expect(isEmailValid('student.example.com')).toBe(false);
});
