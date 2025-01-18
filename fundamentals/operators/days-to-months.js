const prompt = require('prompt-sync')();

const days = parseInt(prompt('Enter the number of days: '));

const months = Math.floor(days / 30);
const remainingDays = days % 30;

console.log(`${days} days is equivalent to ${months} months and ${remainingDays} days.`);
