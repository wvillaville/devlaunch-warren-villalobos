
const prompt = require('prompt-sync')();

const age = parseInt(prompt('Enter your age: '));

if (isNaN(age) || age < 0) {
    console.log('Please enter a valid age.');
} else if (age < 5) {
    console.log('The institution does not support that age.');
} else if (age >= 5 && age <= 13) {
    console.log('You are categorized as a child.');
} else if (age >= 14 && age <= 17) {
    console.log('You are categorized as a teenager.');
} else if (age >= 18 && age <= 29) {
    console.log('You are categorized as a young adult.');
} else if (age >= 30 && age <= 60) {
    console.log('You are categorized as an adult.');
} else if (age >= 61) {
    console.log('You are categorized as elderly.');
}
