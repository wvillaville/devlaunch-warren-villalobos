
  /*
   Eres responsable de diseñar un sistema sencillo de gestión de vehículos para una empresa de transporte.
   El sistema debe representar diferentes tipos de vehículos y sus comportamientos utilizando una estructura
   orientada a objetos.

   Todos los vehículos tienen un emoji, marca, modelo y año de fabricación.
   Los vehículos deben poder arrancar y mostrar su información.

   Los coches tienen un número específico de puertas y deben poder encender el aire acondicionado.
   Las motocicletas pueden tener un sidecar y deben poder hacer una acrobacia en una rueda (wheelie).
  */

class Vehicle {
  emoji: string;
  brand: string;
  model: string;
  year: number;

  constructor(emoji: string, brand: string, model: string, year: number) {
    this.emoji = emoji;
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  start() {
    console.log(`The ${this.brand} ${this.model} has started!`);
  }

  showInfo() {
    console.log(`🚗 ${this.brand} ${this.model} (${this.year})`);
  }
}

class Car extends Vehicle {
  doors: number;

  constructor(emoji: string, brand: string, model: string, year: number, doors: number) {
    super(emoji, brand, model, year);
    this.doors = doors;
  }

  turnOnAirConditioning() {
    console.log(`The air conditioning is on!`);
  }
}

class Motorcycle extends Vehicle {
  sidecar: boolean;

  constructor(emoji: string, brand: string, model: string, year: number, sidecar: boolean) {
    super(emoji, brand, model, year);
    this.sidecar = sidecar;
  }

  doWheelie() {
    console.log(`The motorcycle is doing a wheelie!`);
  }
}

// Ejemplo de uso
const car = new Car('🚗', 'Toyota', 'Corolla', 2020, 4);
car.start();
car.showInfo();
car.turnOnAirConditioning();

const motorcycle = new Motorcycle('🏍️', 'Harley-Davidson', 'Iron 883', 2019, true)
motorcycle.start();
motorcycle.showInfo();
motorcycle.doWheelie();
