
/*
Estás diseñando un sistema básico para gestionar cuentas bancarias de clientes.

Cada cuenta bancaria tendrá un identificador único, un nombre del titular, y un saldo.

Tu tarea es crear una función createAccount que genere un objeto de cuenta bancaria.

El objeto debe ser creado por medio de un function declaration, con todas las propiedades y
métodos deben estar definidos dentro de la función usando this.

Propiedades de la cuenta bancaria (dentro de la función usando this):

id: identificador único de la cuenta.
holderName: nombre del titular de la cuenta..

balance: saldo de la cuenta.
Métodos de la cuenta bancaria (dentro de la función usando this):

deposit (amount): incrementa el saldo de la cuenta.
withdraw (amount): disminuye el saldo de la cuenta si hay suficientes fondos.

transfer (toAccount, amount): transfiere fondos de la cuenta actual a otra cuental
si hay suficientes fondos disponibles.

*/

const prompt = require('prompt-sync')();

function createAccount(id, holderName, balance=0) {
    this.id = id;
    this.holderName = holderName;
    this.balance = balance;
  
    this.deposit = (amount) =>{
      this.balance += amount;
      console.log(`Depósito exitoso. Nuevo saldo: ${this.balance}`);
    };
  
    this.withdraw = (amount) => {
      if (amount <= this.balance) {
        this.balance -= amount;
        console.log(`Retiro exitoso. Nuevo saldo: ${this.balance}`);
      } else {
        console.log("Fondos insuficientes.");
      }
    };
  
    this.transfer = (toAccount, amount)  =>{
      if (amount <= this.balance) {
        this.balance -= amount;
        toAccount.balance += amount;
        console.log(`Transferencia exitosa. Nuevo saldo: ${this.balance}`);
      } else {
        console.log("Fondos insuficientes.");
      }
    };
}

const cuenta1 = new createAccount("12345", "Juan Pérez", 1000);
const cuenta2 = new createAccount("67890", "María García", 500);


cuenta1.deposit(500); // Depositar 500 en cuenta1
cuenta1.withdraw(200); // Retirar 200 de cuenta1
cuenta1.transfer(cuenta2, 300); // Transferir 300 de cuenta1 a cuenta2

console.log(cuenta1); // Mostrar el estado de la cuenta1
console.log(cuenta2); // Mostrar el estado de la cuenta2

