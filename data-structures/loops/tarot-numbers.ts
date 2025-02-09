
/*
tarot-number.ts

En el Tarot, se usa la numerología para entender mejor a una persona. Para encontrar su número
de Tarot, observamos su fecha de nacimiento. Al sumar los dígitos de su fecha de nacimiento,
podemos encontrar un número especial que los representa.

Para empezar, pensemos en alguien nacido el 28 de noviembre de 1989.
Para descubrir el número, debemos seguir varios pasos:

Sumamos los números de su fecha de nacimiento: el día, el mes y el año.
Entonces, sumamos 28, 11 y 1989, obteniendo 2028.

Ahora, descomponemos este número grande en partes más pequeñas.
Así que, para 2028, sumamos 2+0+2+8, lo cual da 12.

Finalmente, simplificamos este número aún más. Para 12, sumamos 1+2, lo cual da 3.
¡Y ese es el número especial que estamos buscando!

Recuerda utiliza bucles para reducir al máximo los cálculos numéricos realizados y
validar que la fecha ingresada sea correcta, no puedes recibir una fecha como 50/50/2020.

Aunque si podrías recibir una fecha como 12/12/100007, ya que podría ser que alguien del futuro
este usando tu código! ;)
*/

const MIN_YEAR = 1;
const MIN_MONTH = 1;
const MAX_MONTH = 12;
const MIN_DAY = 1;
const MAX_DAY = 31;
const MAX_TAROT_NUMBER = 10;

const tarotNumber = (day: number, month: number, year: number): number => {
  if (!isValidDate(day, month, year)) {
    return -1;
  }

  let tarotNumber = day + month + year;
  while (tarotNumber > MAX_TAROT_NUMBER) {
    tarotNumber = sumDigits(tarotNumber);
  }

  return tarotNumber;
};

const isValidDate = (day: number, month: number, year: number): boolean => {
  if (
    year < MIN_YEAR ||
    month < MIN_MONTH ||
    month > MAX_MONTH ||
    day < MIN_DAY ||
    day > MAX_DAY
  ) {
    return false;
  }

  return true;
};

const sumDigits = (number: number): number => {
  let sum = 0;
  while (number > 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }

  return sum;
};


// Pruebas
console.log(tarotNumber(28, 11, 1989)); // 3
console.log(tarotNumber(12, 12, 100007)); // 1
console.log(tarotNumber(50, 50, 2020)); // -1