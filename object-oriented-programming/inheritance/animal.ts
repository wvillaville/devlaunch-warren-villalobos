

/*
Un zoológico necesita un sistema para gestionar los animales y sus comportamientos.

Debes modelar un conjunto de clases que representen distintos tipos de animales y sus características.

Todos los animales tienen un nombre, especie y edad. Además, todos deben poder emitir un sonido
y mostrar su información básica.

Algunos animales, como los leones, pueden rugir y tienen una melena. Los elefantes pueden hacer
sonar su trompa y tienen un tamaño específico (por ejemplo, 'pequeño', 'mediano' o 'grande').

Crea una clase base Animal con las propiedades y métodos necesarios.

Extender la clase Animal para crear clases específicas como Leon y Elefante que tengan comportamientos
y propiedades particulares.

*/

class Animal {
    name: string;
    species: string;
    age: number;
  
    constructor(name: string, species: string, age: number) {
      this.name = name;
      this.species = species;
      this.age = age;
    }
  
    makeSound() {
      console.log('Animal sound');
    }
  
    toString() {
      console.log(`Name: ${this.name}, Species: ${this.species}, Age: ${this.age}`);
    }
  }
  
class Lion extends Animal {
    mane: boolean;
  
    constructor(name: string, age: number, mane: boolean) {
      super(name, 'Lion', age);
      this.mane = mane;
    }
  
    makeSound() {
      console.log('Roar');
    }
  }

class Elephant extends Animal {
        size: string;
    
        constructor(name: string, age: number, size: string) {
        super(name, 'Elephant', age);
        this.size = size;
        }
    
        makeSound() {
        console.log('Trumpet');
        }
    }

const lion = new Lion('Leo', 5, true);
lion.makeSound();
lion.toString();

const elephant = new Elephant('Dumbo', 10, 'large');
elephant.makeSound();
elephant.toString();

