
const prompt = require('prompt-sync')();

const classifyWeight = (weight) => {
    weight = weight * 2.2;
    if (weight < 100) {
        console.log('Underweight');
    } else if (weight >= 100 && weight <= 150) {
        console.log('Normal weight');
    } else if (weight > 150) {
        console.log('Overweight');
    }
};

const weight = prompt('Enter your weight: ');
classifyWeight(weight);
