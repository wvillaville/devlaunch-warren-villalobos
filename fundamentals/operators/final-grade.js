
const prompt = require('prompt-sync')();

const grade1 = parseFloat(prompt('Enter the first grade: '));
const grade2 = parseFloat(prompt('Enter the second grade: '));
const grade3 = parseFloat(prompt('Enter the third grade: '));

const averageGrade = (grade1 + grade2 + grade3) / 3;

console.log(`The final average grade is: ${averageGrade.toFixed(2)}`);