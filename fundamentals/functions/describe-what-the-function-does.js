
const prompt = require('prompt-sync')();

function isPalindromeNumber(number) {
    if (number < 0) {
        return false;
    }

    const originalString = number.toString();
    const reversedString = originalString.split("").reverse().join("");

    
    return originalString === reversedString;
}

console.log(isPalindromeNumber(121));


