
const calculateTax = (price) => {
    if (price > 50000) {
        return price * 0.13 - price * 0.5;
    }
    return price * 0.13;
};

const fibonacci = (n) => {
    if (n < 2) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
};


console.log(calculateTax(50000))

console.log(fibonacci(10))