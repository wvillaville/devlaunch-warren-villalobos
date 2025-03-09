
/* Pokémon Battle Simulator
Design a turn-based battle between two Pokémon where each one has three unique abilities.

Rules:
Base Class: Create an abstract class Pokemon with:
    name: string
    health: number (default: 100)
    Method attack(opponent: Pokemon, move: string, turn: number): void
    Method isAlive(): boolean

Pokémon Defined:

Pikachu
---------
    Thunder Shock: Deals 20 damage
    Quick Attack: Deals 10 damage (always available)
    Heal Spark: Heals 20 health (can only be used once)

Charizard
---------
    Flamethrower: Deals 30 damage (can only be used every 2 turns)
    Scratch: Deals 15 damage
    Fire Breath: Heals 10 health and burns the opponent (adds 10 damage on the next turn)
*/

abstract class Pokemon {
    name: string;
    health: number;

    constructor(name: string, health: number = 100) {
        this.name = name;
        this.health = health;
    }

    abstract attack(opponent: Pokemon, move: string, turn: number): void;

    isAlive(): boolean {
        return this.health > 0;
    }
}

class Pikachu extends Pokemon {
    private healUsed: boolean = false;

    attack(opponent: Pokemon, move: string, turn: number): void {
        switch (move) {
            case "Thunder Shock":
                opponent.health -= 20;
                console.log(`${this.name} used Thunder Shock! Deals 20 damage.`);
                break;
            case "Quick Attack":
                opponent.health -= 10;
                console.log(`${this.name} used Quick Attack! Deals 10 damage.`);
                break;
            case "Heal Spark":
                if (!this.healUsed) {
                    this.health += 20;
                    this.healUsed = true;
                    console.log(`${this.name} used Heal Spark! Restores 20 health.`);
                } else {
                    console.log(`${this.name} tried to use Heal Spark, but it can only be used once!`);
                }
                break;
            default:
                console.log(`${this.name} tried an unknown move.`);
        }
    }
}

class Charizard extends Pokemon {
    private lastFlamethrowerTurn: number = -2;

    attack(opponent: Pokemon, move: string, turn: number): void {
        switch (move) {
            case "Flamethrower":
                if (turn - this.lastFlamethrowerTurn >= 2) {
                    opponent.health -= 30;
                    this.lastFlamethrowerTurn = turn;
                    console.log(`${this.name} used Flamethrower! Deals 30 damage.`);
                } else {
                    console.log(`${this.name} can't use Flamethrower yet!`);
                }
                break;
            case "Scratch":
                opponent.health -= 15;
                console.log(`${this.name} used Scratch! Deals 15 damage.`);
                break;
            case "Fire Breath":
                this.health += 10;
                opponent.health -= 10;
                console.log(`${this.name} used Fire Breath! Heals 10 health and burns the opponent for 10 damage next turn.`);
                break;
            default:
                console.log(`${this.name} tried an unknown move.`);
        }
    }
}

// Example Battle
const pikachu = new Pikachu("Pikachu");
const charizard = new Charizard("Charizard");

let turn = 1;
pikachu.attack(charizard, "Thunder Shock", turn);
turn++;
charizard.attack(pikachu, "Flamethrower", turn);
turn++;
pikachu.attack(charizard, "Heal Spark", turn);
turn++;
charizard.attack(pikachu, "Fire Breath", turn);
