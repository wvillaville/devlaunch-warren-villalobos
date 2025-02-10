
/*

Crea un programa en que sume los números en las posiciones correspondientes de dos arreglos.

Esto significa sumar el número en el índice 0 del primer arreglo con el número en el índice 0 
del segundo arreglo, y así sucesivamente.

Asegúrate de que el programa pueda manejar arreglos de diferentes longitudes y sume los números
correctamente. Además, incluye manejo de errores para abordar situaciones como arreglos vacíos
o arreglos con valores no numéricos.

Ejemplo:
[1, 0, 2, 3, 4] + [3, 5, 6, 7, 8, 13, 9] = [4, 5, 8, 10, 12, 13, 9]

*/


function sumArrays(arr1: number[], arr2: number[]): number[] {
    let result: number[] = [];
    let maxLength = Math.max(arr1.length, arr2.length);
    for (let i = 0; i < maxLength; i++) {
        let sum = (arr1[i] || 0) + (arr2[i] || 0);
        result.push(sum);
    }
    return result;
}

// Test cases
console.log(sumArrays([1, 0, 2, 3, 4], [3, 5, 6, 7, 8, 13, 9])); 
console.log(sumArrays([1, 0, 2, 3, 4], [3, 5, 6])); 
console.log(sumArrays([], [3, 5, 6])); 
console.log(sumArrays([], [])); 
console.log(sumArrays([1, 0, 2, 3, 4], [3, 5, 6, 7, 8, 13, 9])); 
console.log(sumArrays([1, 0, 2, 3, 4], [3, 5, 6])); 
console.log(sumArrays([], [3, 5, 6])); 
console.log(sumArrays([], [])); 

