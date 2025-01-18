

// Write a code that converts the following details from a supermarket trip statement to variables: 
// I go to the GreenCenter supermarket to do my usual shopping and plan to buy apples and oranges. 
// When I'm there, I see that bananas and grapes are not there, so I change my list a bit. 
// I see 3 cashiers are working, so I get ready to pay. My things cost $100 in total. 
// I give $150 in cash and get $50 back as change.

const supermarketName = "GreenCenter";
const initialShoppingList = "apples and oranges";
const unavailableItems = "bananas and grapes";
const finalShoppingList = "apples and oranges"; 
const numberOfCashiers = 3;
const totalCost = 100; 
const cashGiven = 150; 
const changeReceived = cashGiven - totalCost;

console.log(`Supermarket: ${supermarketName}`);
console.log(`Initial Shopping List: ${initialShoppingList}`);
console.log(`Unavailable Items: ${unavailableItems}`);
console.log(`Final Shopping List: ${finalShoppingList}`);
console.log(`Number of Cashiers: ${numberOfCashiers}`);
console.log(`Total Cost: $${totalCost}`);
console.log(`Cash Given: $${cashGiven}`);
console.log(`Change Received: $${changeReceived}`);