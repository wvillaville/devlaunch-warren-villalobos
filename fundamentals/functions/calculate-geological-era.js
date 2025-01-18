const prompt = require('prompt-sync')();

function calculateGeologicalEra(age) {
    if (age < 65.5) {
        return 'Cenozoic';
    } else if (age >= 65.5 && age < 251) {
        return 'Mesozoic';
    } else if (age >= 251 && age < 542) {
        return 'Paleozoic';
    } else {
        return 'Pre-Paleozoic';
    }
}

const age = parseFloat(prompt('Enter the approximate age of the stone in millions of years: '));
const era = calculateGeologicalEra(age);

console.log(`The stone belongs to the ${era} era.`);