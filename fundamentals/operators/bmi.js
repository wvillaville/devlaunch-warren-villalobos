
const prompt = require('prompt-sync')();

const name = prompt('Enter your name: ');
const height = parseFloat(prompt('Enter your height in meters: '));
const weight = parseFloat(prompt('Enter your weight in kilograms: '));

const bmi = weight / (height ** 2);

console.log(`${name}, your BMI is: ${bmi.toFixed(2)}`);

