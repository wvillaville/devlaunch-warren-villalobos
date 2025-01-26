
const prompt = require('prompt-sync')();

const smartPrice = (name, type, price) => {     
    let discount = 0;

    if (type === 'perishable') {
        if (price > 4 && price < 10) {
            discount = 0.05;
        } else if (price >= 10 && price < 15) {
            discount = 0.15;
        }
    } else if (type === 'non-perishable') {
        if (price < 10) {
            discount = 0.07;
        } else {
            discount = 0.25;
        }
    } else {
        console.log('Invalid product type. Please enter "perishable" or "non-perishable".');
        return; 
    }
    const finalPrice = price - (price * discount);
    console.log(`The final price for ${name} is $${finalPrice.toFixed(2)}.`);
}

const name = prompt('Enter the product name: ');
const type = prompt('Enter the product type (perishable/non-perishable): ').toLowerCase();
const price = parseFloat(prompt('Enter the product price: '));
smartPrice(name, type, price);