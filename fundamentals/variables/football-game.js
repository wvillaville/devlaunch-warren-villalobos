
// El evento es parte de las Eliminatorias Sudamericanas para la Copa del Mundo.
// En un partido celebrado el 22/11/23 a las 20:30, el equipo local Argentina 
// se enfrentó al equipo visitante Brasil. El resultado final fue 1-0, 
// indicando a Argentina como el equipo ganador.



const tournament  = "South American Qualifiers for the World Cup";
const localTeam = "Argentina";
const visitorTeam = "Brazil";
const day = 22;
const month = 11;
const year = 23;
const hour = 20;
const minutes = 30;
const matchDate = '${day}/${month}/${year} at ${hour}:${minutes}';
const localTeamScore = 1;
const visitorTeamScore = 0;
const finalScore = '${localTeamScore}-${visitorTeamScore}';
const winningTeam = localTeam;

// Outputs
console.log(`Event: ${tournament}`);
console.log(`Local Team: ${localTeam}`);
console.log(`Visitor Team: ${visitorTeam}`);
console.log(`Date: ${matchDate}`);
console.log(`Final Score: ${finalScore}`);
console.log(`Winning Team: ${winningTeam}`); 


