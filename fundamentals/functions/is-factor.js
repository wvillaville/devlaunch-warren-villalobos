
const isFactor = (number, factor) => {
    return number % factor === 0;
};

// Example usage:
console.log(isFactor(10, 5)); // true
console.log(isFactor(10, 3)); // false