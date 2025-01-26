
const prompt = require('prompt-sync')();

const checkEmailFormat = (email) => {
    if (email === email.toLowerCase()) {
        console.log('Email format is correct.');
    } else {
        console.log('Error: Email address must be in lowercase.');
    }
};


const email = prompt('Enter your email address: ');
checkEmailFormat(email);