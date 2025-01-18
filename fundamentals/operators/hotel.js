
const prompt = require('prompt-sync')();

const cost_per_night = 100;
const discount = 0.05;
const total_nights = parseInt(prompt('Enter the number of nights to stay: '));

const totalCost = (cost_per_night * total_nights) * (1 - discount);

console.log(`The total cost of the stay is: $${totalCost.toFixed(2)}`);
