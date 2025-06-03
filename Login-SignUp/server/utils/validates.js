const usernameRegex = /^(?=.*[A-Z]).{5,}$/;
const emailRegex = /^\S+@\S+\.\S+$/;
const mobileRegex = /^[0-9]{10}$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const allowedRoles = ['ui/ux', 'react', 'node', 'java'];

function validateSignup({ username, email, mobile, password, role }) {
    return (
        usernameRegex.test(username) &&
        emailRegex.test(email) &&
        mobileRegex.test(mobile) &&
        passwordRegex.test(password) &&
        allowedRoles.includes(role)
    );
}

function validatePassword(password) {
    return passwordRegex.test(password);
}

module.exports = {
    validateSignup,
    validatePassword,
    allowedRoles,
};