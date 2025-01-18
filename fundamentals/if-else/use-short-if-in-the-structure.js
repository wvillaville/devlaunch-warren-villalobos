
const prompt = require('prompt-sync')();

const age = parseInt(prompt('Enter your age: '));

const lifeStage = isNaN(age) || age < 0 ? 'Please enter a valid age.'
    : age < 5 ? 'The institution does not support that age.'
    : age >= 5 && age <= 13 ? 'You are categorized as a child.'
    : age >= 14 && age <= 17 ? 'You are categorized as a teenager.'
    : age >= 18 && age <= 29 ? 'You are categorized as a young adult.'
    : age >= 30 && age <= 60 ? 'You are categorized as an adult.'
    : 'You are categorized as elderly.';

console.log(lifeStage);
