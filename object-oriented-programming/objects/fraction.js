
/*
En este escenario, se te proporcionarán varias fracciones, y tu tarea será realizar diversas
operaciones con ellas, tales como suma, resta, multiplicación y división.

El objetivo es obtener el numerador y el denominador resultantes de estas operaciones.

Para lograrlo, deberás definir dos atributos: el numerador y el denominador.

Además, implementarás métodos correspondientes para cada operación, devolviendo un objeto
resultante con el numerador y denominador calculados.

Dando la posibilidad de operar estas fracciones de 2 formas distintas, tanto de funciones aparte
del objeto como incluidos como parte de su funcional dentro del objeto mismo.

const fraction1 = createFraction (3, 4)
const fraction2 = createFraction (2, 3)

add(fraction1, fraction2)

const fraction3 = createFractionWith Functions (3, 4)
const fraction4 = createFraction (2, 3)

fraction3.add(fraction4)                                                                               You, 3 minutes ago Uncommitted changes

*/

const prompt = require('prompt-sync')();

function createFraction(numerator, denominator) {       
    this.numerator = numerator;
    this.denominator = denominator;

    this.add = (fraction) => {
        const newNumerator = this.numerator * fraction.denominator + fraction.numerator * this.denominator;
        const newDenominator = this.denominator * fraction.denominator;
        return { newNumerator, newDenominator };
    };

    this.subtract = (fraction) => {
        const newNumerator = this.numerator * fraction.denominator - fraction.numerator * this.denominator;
        const newDenominator = this.denominator * fraction.denominator;
        return { newNumerator, newDenominator };
    };

    this.multiply = (fraction) => {
        const newNumerator = this.numerator * fraction.numerator;
        const newDenominator = this.denominator * fraction.denominator;
        return { newNumerator, newDenominator };
    };

    this.divide = (fraction) => {
        const newNumerator = this.numerator * fraction.denominator;
        const newDenominator = this.denominator * fraction.numerator;
        return { newNumerator, newDenominator };
    };
}

const fraction1 = new createFraction(3, 4);
const fraction2 = new createFraction(2, 3);

const result = fraction1.add(fraction2);
console.log(result);

const fraction3 = new createFraction(3, 4);
const fraction4 = new createFraction(2, 3);

const result2 = fraction3.subtract(fraction4);
console.log(result2);

const fraction5 = new createFraction(3, 4);
const fraction6 = new createFraction(2, 3);

const result3 = fraction5.multiply(fraction6);
console.log(result3);

const fraction7 = new createFraction(3, 4);
const fraction8 = new createFraction(2, 3);

const result4 = fraction7.divide(fraction8);
console.log(result4);

