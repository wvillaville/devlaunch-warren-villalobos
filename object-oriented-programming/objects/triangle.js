
/*
Un triángulo, una forma geométrica fundamental, es un polígono caracterizado por tener tres lados y tres vértices. De acuerdo con el teorema de la desigualdad del triángulo, en cualquier triángulo válido, la suma de las longitudes de dos lados cualesquiera debe de ser mayor que la longitud del tercer lado.
Tu tarea es crear un objeto que represente un triángulo.

Este objeto debe tener tres propiedades, cada una correspondiente a uno de sus lados.
Además, se requiere una función para validar si los lados dados cumplen con el teorema de la desigualdad del triángulo.

Por ejemplo, considera un triángulo con longitudes de lados: a = 7, b = 10, y c = 5.

Para determinar si estos lados forman un triángulo válido, evaluamos si la suma de cada par de lados es mayor que la longitud del lado restante.

En este caso, verificamos si (b + c) > a, (a + c) > b, y (a + b) > c. 
*/
const prompt = require('prompt-sync')();

const myTriangle = (triangle) => {
    const { a, b, c } = triangle;
    return (a + b > c) && (a + c > b) && (b + c > a); 
  }
  
  const a = parseInt(prompt("Ingrese la longitud del primer lado:"));
  const b = parseInt(prompt("Ingrese la longitud del segundo lado:"));
  const c = parseInt(prompt("Ingrese la longitud del tercer lado:"));
  
  const triangle = { a, b, c }; 
  

  if (myTriangle(triangle)) { 
    console.log("El triángulo es válido.");
  } else {
    console.log("El triángulo no es válido.");
  }