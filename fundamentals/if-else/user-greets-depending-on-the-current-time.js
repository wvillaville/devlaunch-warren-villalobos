
const prompt = require('prompt-sync')();

const time = prompt('Enter the current time 24 hrs format (HH:MM): ');
const [hours, minutes] = time.split(':');

if (isNaN(hours) || isNaN(minutes) || hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
    console.log('Please enter a valid time in the format HH:MM');
} else if (hours >= 5 && hours < 12) {
    console.log('Good Morning!');
} else if (hours >= 12 && hours < 18) {
    console.log('Good Afternoon!');
} else {
    console.log('Good Night!');
}