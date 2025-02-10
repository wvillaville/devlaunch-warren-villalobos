
/*
vowel-counter.ts

En este ejercicio, crearás una función que reciba una cadena de texto y cuente
el número de vocales que contiene (tanto minúsculas como mayúsculas).

La función deberá iterar a través de cada carácter en la cadena dada y verificar
si es una vocal (a, e, i, o, u). Para facilitar la verificación, puedes almacenar
las vocales en un objeto.

La función debe devolver un objeto con el total de vocales encontradas y un
desglose de cuántas veces aparece cada vocal en la cadena.

Ejemplo de uso:

console.log(countVowels("Hello, World!")) // { total: 3, a: 0, e: 1, i: 0, o: 2, u: 0}
*/

interface VowelCount {
    [key: string]: number;
}

const isVowel = (char: string): boolean => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(char.toLowerCase());
}

function countVowels(text: string): VowelCount {
    const vowels: VowelCount = { total: 0, a: 0, e: 0, i: 0, o: 0, u: 0 };
    for (const char of text) {
        if (isVowel(char)) {
            vowels.total++;
            vowels[char.toLowerCase()]++;
        }
    }
    return vowels;
}



console.log(countVowels("Hello, World!")); // { total: 3, a: 0, e: 1, i: 0, o: 2, u: 0}
console.log(countVowels("Programming is fun!")); // { total: 5, a: 1, e: 0, i: 3, o: 1, u: 0}
console.log(countVowels("This is a test.")); // { total: 4, a: 1, e: 1, i: 2, o: 0, u: 0}
console.log(countVowels("AeIoU")); // { total: 5, a: 1, e: 1, i: 1, o: 1, u: 1}
console.log(countVowels("")); // { total: 0, a: 0, e: 0, i: 0, o: 0, u: 0}
console.log(countVowels("bcdfghjklmnpqrstvwxyz")); // { total: 0, a: 0, e: 0, i: 0, o: 0, u: 0}
console.log(countVowels("aeiou")); // { total: 5, a: 1, e: 1, i: 1, o: 1, u: 1}
console.log(countVowels("aeiouaeiouaeiou")); // { total: 15, a: 3, e: 3, i: 3, o: 3, u: 3}
console.log(countVowels("AEIOU")); // { total: 5, a: 1, e: 1, i: 1, o: 1, u: 1}
console.log(countVowels("AEIOUAEIOUAEIOU")); // { total: 15, a: 3, e: 3, i: 3, o: 3, u: 3}
console.log(countVowels("aeiouAEIOU")); // { total: 10, a: 2, e: 2, i: 2, o: 2, u: 2}
console.log(countVowels("aeiouAEIOUaeiouAEIOU")); // { total: 20, a: 4, e: 4, i: 4, o: 4, u: 4}
console.log(countVowels("aeiouAEIOUaeiouAEIOU!@#$%^&*()")); // { total: 20, a: 4, e: 4, i: 4, o: 4, u: 4}
console.log(countVowels("aeiouAEIOUaeiouAEIOU!@#$%^&*()")); // { total: 20, a: 4, e: 4, i: 4, o: 4, u: 4}
console.log(countVowels("aeiouAEIOUaeiouAEIOU!@#$%^&*()")); // { total: 20, a: 4, e: 4, i: 4, o: 4, u: 4}
console.log(countVowels("aeiouAEIOUaeiouAEIOU!@#$%^&*()")); // { total: 20, a: 4, e: 4, i: 4, o: 4, u: 4}


