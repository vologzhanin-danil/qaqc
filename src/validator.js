function isEmailValid(email) {
    return email.includes('@') && email.includes('.');
}

module.exports = isEmailValid;
