
const prompt = require('prompt-sync')();

const radius = parseFloat(prompt('Enter the radius of the cylinder in meters: '));
const height = parseFloat(prompt('Enter the height of the cylinder in meters: '));

const pi = 3.14159;

const volume = pi * (radius ** 2) * height;

console.log(`The volume of the cylinder is: ${volume.toFixed(2)} cubic meters.`);

