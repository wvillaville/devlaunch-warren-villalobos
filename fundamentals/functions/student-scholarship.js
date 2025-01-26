
const prompt = require('prompt-sync')();

const studentScholarship = (first, second, third, fourth, labGrade) => {
    
    const averageGrade = (first + second + third + fourth) / 4;

    
    const hasLowGrade = first < 8 || second < 8 || third < 8 || fourth < 8;

    
    if (averageGrade >= 9 && !hasLowGrade) {
        console.log('You qualify for the scholarship.');
    } else if (averageGrade >= 8.5 && (labGrade === 'A' || labGrade === 'B')) {
        console.log('You qualify for the scholarship.');
    } else {
        console.log('You do not qualify for the scholarship.');
    }
};

// Ejemplo de uso:
const first = parseFloat(prompt('Enter the first grade: '));
const second = parseFloat(prompt('Enter the second grade: '));
const third = parseFloat(prompt('Enter the third grade: '));
const fourth = parseFloat(prompt('Enter the fourth grade: '));
const labGrade = prompt('Enter the lab grade (A, B, or C): ');

studentScholarship(first, second, third, fourth, labGrade);
