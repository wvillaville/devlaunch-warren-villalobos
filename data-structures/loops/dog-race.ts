
/*
dogs-race.ts

En este ejercicio, desarrollarás un programa que simula una carrera entre dos perros
en una pista de 20 metros. Cada perro comenzará al final de la pista y se moverá hacia
la izquierda en cada iteración del juego.

Cada perro se moverá aleatoriamente entre 1 y 3 pasos en cada turno.
Esto se simulará utilizando una función que generará un número aleatorio.

La pista se representará como una cadena de caracteres que muestra la posición actual de 
cada perro, utilizando emojis para los perros (un perro amarillo y un perro
y huellas de perro para indicar el camino recorrido.

El programa debe determinar cuándo un perro cruza la línea de meta.
En este caso, se mostrará un mensaje indicando qué perro ha ganado la carrera.

¡Tenemos un ganador!

Si ambos perros cruzan la línea de meta en la misma iteración, el programa debe identificarlo
y mostrar un mensaje de empate.

Empate!
-
*/

const trackLength = 20;
const dog1 = "🐕";
const dog2 = "🐩";
const dogTrail = "🐾";
const MAX_STEPS = 3;
const FINISH_LINE_POSITION = 0;

const getRandomSteps = (maxSteps: number): number => {
  return Math.floor(Math.random() * maxSteps) + 1;
};

const moveDog = (dog: string): string => {
  return dog + dogTrail;
};

const moveDogs = (dog1Position: number, dog2Position: number): [number, number] => {
  const dog1Steps = getRandomSteps(MAX_STEPS);
  const dog2Steps = getRandomSteps(MAX_STEPS);

  dog1Position -= dog1Steps;
  dog2Position -= dog2Steps;

  return [dog1Position, dog2Position];
};

const printTrack = (dog1Position: number, dog2Position: number): void => {
  let track = dogTrail.repeat(trackLength);
  track = track.substring(0, dog1Position) + dog1 + track.substring(dog1Position);
  track = track.substring(0, dog2Position) + dog2 + track.substring(dog2Position);

  console.log(track);
};

const dogsRace = (): void => {
  let dog1Position = trackLength;
  let dog2Position = trackLength;

  while (dog1Position > FINISH_LINE_POSITION && dog2Position > FINISH_LINE_POSITION) {
    [dog1Position, dog2Position] = moveDogs(dog1Position, dog2Position);
    dog1Position = Math.max(dog1Position, FINISH_LINE_POSITION);
    dog2Position = Math.max(dog2Position, FINISH_LINE_POSITION);
    printTrack(dog1Position, dog2Position);
  }

  if (dog1Position === dog2Position) {
    console.log("Empate!");
  } else {
    const winner = dog1Position === FINISH_LINE_POSITION
        ? "Perro 1"
        : "Perro 2";
    console.log(`¡Tenemos un ganador! ${winner}`);
    }
};

// Prueba
dogsRace();
