const prompt = require('prompt-sync')();

const clientName = prompt('Enter your name: '); 
const rechargeAmount = parseFloat(prompt('Enter the recharge amount: '));
const subscriptionDuration = parseInt(prompt('Enter the duration of your subscription in years: '));

if (isNaN(rechargeAmount) || isNaN(subscriptionDuration)) {
    console.log('Invalid input. Please enter numeric values for recharge amount and subscription duration.');
    process.exit(1); /
}

const isEligibleForPromotion = (rechargeAmount >= 20 && rechargeAmount <= 80) && subscriptionDuration >= 1;

let totalRechargeAmount = rechargeAmount;

if (isEligibleForPromotion) {
    if (rechargeAmount < 38 && subscriptionDuration <= 3) {
        totalRechargeAmount = rechargeAmount * 2;
    } else if (subscriptionDuration > 3) {
        totalRechargeAmount = rechargeAmount * 3;
    }
}

console.log(`Client Name: ${clientName}`);
console.log(`Original Recharge Amount: $${rechargeAmount.toFixed(2)}`);
console.log(`Total Recharge Amount with Promotion: $${totalRechargeAmount.toFixed(2)}`);