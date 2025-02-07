

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

import promptSync from 'prompt-sync';

const prompt = promptSync();

interface Fraction {
    numerator: number;
    denominator: number;
}

function createFraction(numerator: number, denominator: number): Fraction {
    if (denominator === 0) {
        throw new Error("Denominator cannot be zero.");
    }
    return { numerator, denominator };
}

function add(f1: Fraction, f2: Fraction): Fraction {
    return createFraction(
        f1.numerator * f2.denominator + f2.numerator * f1.denominator,
        f1.denominator * f2.denominator
    );
}

function subtract(f1: Fraction, f2: Fraction): Fraction {
    return createFraction(
        f1.numerator * f2.denominator - f2.numerator * f1.denominator,
        f1.denominator * f2.denominator
    );
}

function multiply(f1: Fraction, f2: Fraction): Fraction {
    return createFraction(
        f1.numerator * f2.numerator,
        f1.denominator * f2.denominator
    );
}

function divide(f1: Fraction, f2: Fraction): Fraction {
    if (f2.numerator === 0) {
        throw new Error("Cannot divide by a fraction with a numerator of zero.");
    }
    return createFraction(
        f1.numerator * f2.denominator,
        f1.denominator * f2.numerator
    );
}

// Ejemplos de uso
const fraction1: Fraction = createFraction(3, 4);
const fraction2: Fraction = createFraction(2, 3);

const sum = add(fraction1, fraction2);
console.log(`Suma: ${sum.numerator}/${sum.denominator}`);

const difference = subtract(fraction1, fraction2);
console.log(`Resta: ${difference.numerator}/${difference.denominator}`);

const product = multiply(fraction1, fraction2);
console.log(`Multiplicación: ${product.numerator}/${product.denominator}`);

const quotient = divide(fraction1, fraction2);
console.log(`División: ${quotient.numerator}/${quotient.denominator}`);
