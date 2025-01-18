
const prompt = require('prompt-sync')();

const mariaFood = prompt('Enter Maria\'s favorite food: ');
const pepeFood = prompt('Enter Pepe\'s favorite food: ');
const malvernFood = prompt('Enter Malvern\'s favorite food: ');

// Condition 1: Does Maria share the same favorite food as both Pepe and Malvern?
const allSame = (mariaFood === pepeFood) && (mariaFood === malvernFood);

// Condition 2: Does Maria's favorite food match either Pepe's or Malvern's?
const anySame = (mariaFood === pepeFood) || (mariaFood === malvernFood);

// Condition 3: Does Maria's preference differ from both Pepe's and Malvern's?
const allDifferent = (mariaFood !== pepeFood) && (mariaFood !== malvernFood);

console.log(`Maria's favorite food is: ${mariaFood}`);
console.log(`Pepe's favorite food is: ${pepeFood}`);
console.log(`Malvern's favorite food is: ${malvernFood}`);

console.log(`Does Maria share the same favorite food as both Pepe and Malvern? ${allSame}`);
console.log(`Does Maria's favorite food match either Pepe's or Malvern's? ${anySame}`);
console.log(`Does Maria's preference differ from both Pepe's and Malvern's? ${allDifferent}`);