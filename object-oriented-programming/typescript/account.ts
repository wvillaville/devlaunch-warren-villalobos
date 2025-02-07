

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

import promptSync from 'prompt-sync';

const prompt = promptSync();

interface BankAccount {
    id: string;
    holderName: string;
    balance: number;
    deposit: (amount: number) => void;
    withdraw: (amount: number) => void;
    transfer: (toAccount: BankAccount, amount: number) => void;
}


function createAccount(id: string, holderName: string, balance: number = 0): BankAccount {
    return {
        id,
        holderName,
        balance,
        
        deposit(amount: number): void {
            if (amount <= 0) {
                console.log("El monto a depositar debe ser mayor a 0.");
                return;
            }
            this.balance += amount;
            console.log(`Depósito exitoso. Nuevo saldo de ${this.holderName}: ${this.balance}`);
        },

        withdraw(amount: number): void {
            if (amount <= 0) {
                console.log("El monto a retirar debe ser mayor a 0.");
                return;
            }
            if (amount > this.balance) {
                console.log("Fondos insuficientes.");
                return;
            }
            this.balance -= amount;
            console.log(`Retiro exitoso. Nuevo saldo de ${this.holderName}: ${this.balance}`);
        },

        transfer(toAccount: BankAccount, amount: number): void {
            if (amount <= 0) {
                console.log("El monto a transferir debe ser mayor a 0.");
                return;
            }
            if (amount > this.balance) {
                console.log("Fondos insuficientes para la transferencia.");
                return;
            }
            this.balance -= amount;
            toAccount.balance += amount;
            console.log(`Transferencia exitosa de ${amount} de ${this.holderName} a ${toAccount.holderName}.`);
            console.log(`Nuevo saldo de ${this.holderName}: ${this.balance}`);
            console.log(`Nuevo saldo de ${toAccount.holderName}: ${toAccount.balance}`);
        }
    };
}

// Crear cuentas
const cuenta1 = createAccount("12345", "Juan Pérez", 1000);
const cuenta2 = createAccount("67890", "María García", 500);

// Operaciones bancarias
cuenta1.deposit(500);
cuenta1.withdraw(200);
cuenta1.transfer(cuenta2, 300);

// Mostrar el estado de las cuentas
console.log(cuenta1);
console.log(cuenta2);
