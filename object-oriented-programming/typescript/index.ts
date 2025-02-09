import PromptSync = require("prompt-sync");

const prompt = PromptSync();
class Dog {
    constructor(public name: string = "", public age: number = 0, public breed: string = "") {
        this.name = name;
        this.age = age;
        this.breed = breed;
    }

    public bark(): void => {
        console.log("Woof! Woof!");
    }
}
const dogName = prompt("Enter dog name: ");
const dogAge = prompt("Enter dog age: ");
const dogBreed = prompt("Enter dog breed: ");

const dog = new Dog(dogName, parseInt(dogAge), dogBreed);

console.log(`Dog name: ${dog.name}`);
console.log(`Dog age: ${dog.age}`);
console.log(`Dog breed: ${dog.breed}`);
