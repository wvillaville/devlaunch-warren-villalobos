
const prompt = require('prompt-sync')();

const birthdate = prompt("What is your birthdate in format (YYYY/MM/DD)? ");
const birthday = new Date(birthdate);
const today = new Date();

let age = today.getFullYear() - birthday.getFullYear();

if (age >= 18) {
    console.log("Person is admitted to the bar");
} else {
    console.log("Person is not admitted to the bar");
}