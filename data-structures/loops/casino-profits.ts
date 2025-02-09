
/*
casino-profits.ts

En un casino en línea han implementado un nuevo juego, que consiste en lanzar
tres dados y anotar sus valores. Si la suma de estos valores es mayor o igual
a 10, el apostador gana $10; de lo contrario, pierde $15.

Para probar el programa a fondo, simularás 50 intentos de personas jugando,
cada jugador simula un intento.

Después de que todos los jugadores hayan terminado sus intentos,
encuentra el resultado de las ganancias del casino empezando de 0.

El resultado puede ser tanto positivo como negativo, donde negativo representa
que el casino perdió dinero ya que los jugadores ganaron más dinero del que
perdieron.

Si pruebas varias veces el código puedes topar con diferentes resultados como:
100, 150, -50, -25, 75

Pero mayormente dará números positivos que negativos en ganancias, porque recuerden
"la casa (casino) nunca pierde..."
*/

const GAME_ATTEMPTS = 50;
const WINNING_THRESHOLD = 10;
const MIN_DICE_ROLL = 1;
const MAX_DICE_ROLL = 6;

const rollDice = (): number => Math.floor(Math.random() * (MAX_DICE_ROLL - MIN_DICE_ROLL + 1)) + MIN_DICE_ROLL;

const calculateGameResult = (rolls: number[]): number => rolls.reduce((acc, roll) => acc + roll, 0);

const playGame = (): number => {
  const rolls = [rollDice(), rollDice(), rollDice()];
  const gameResult = calculateGameResult(rolls);
  return gameResult >= WINNING_THRESHOLD ? 10 : -15;
}

let casinoProfits = 0;
for (let i = 0; i < GAME_ATTEMPTS; i++) {
  casinoProfits += playGame();
}

console.log(casinoProfits);

