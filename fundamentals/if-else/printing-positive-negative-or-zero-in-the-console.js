const prompt = require('prompt-sync')();

const number = parseFloat(prompt('Enter a number: '));

if (isNaN(number)) {
    console.log('Please enter a number');
} else if (number > 0) {
    console.log('Positive');
} else if (number < 0) {
    console.log('Negative');
} else {
    console.log('Zero');
}

