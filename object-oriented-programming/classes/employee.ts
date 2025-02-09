
/*
Horizon Innovations, una destacada empresa enfocada en el bienestar de los empleados,
está desarrollando un sistema de seguimiento de salarios que busca mantener registros
precisos de las remuneraciones de los empleados, incluyendo actualizaciones y
modificaciones salariales.

Para gestionar y manipular los datos salariales de manera eficiente, es útil encapsularlos
en un sistema de clases. Este enfoque proporciona una estructura clara y organizada para
manejar las operaciones relacionadas con los salarios, asegurando la modularidad y la
mantenibilidad del código.

Para implementar esto, crearemos una clase Employee con una variable principal llamada _salary,
que servirá como la base para todos los cálculos de salario en el sistema.

Esta clase incluirá dos métodos clave: un "getter" para recuperar el salario actual y un "setter"
para modificarlo. Es importante que el "setter" valide que el nuevo valor del salario sea
ya que no se permiten salarios negativos.

Adicionalmente, se incluirá un método giveRaise para aumentar el salario en una cantidad específica.

*/

class Employee {

    private _salary: number;
    private _name: string;
    private _id: number;
  
    constructor(salary: number, name: string, id: number) {
      this._salary = salary;
      this._name = name;
      this._id = id;
    }

    setSalary(salary: number): void {
        if (salary < 0) {
            throw new Error('Salary cannot be negative');
        }
        this._salary = salary;
    }

    getSalary(): number {
        return this._salary;
    }

    giveRaise(amount: number): void {
        this._salary += amount;
      }
    
    getName(): string {
          return this._name;
        }  

    getId(): number {
          return this._id;
      }
}

const employee = new Employee(50000, 'Alice', 1);
console.log(employee.getSalary()); // Output: 50000
employee.setSalary(60000);
console.log(employee.getSalary()); // Output: 60000
employee.giveRaise(5000);
console.log(employee.getSalary()); // Output: 65000
console.log(employee.getName()); // Output: Alice
console.log(employee.getId()); // Output: 1




