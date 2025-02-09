class Animals {
    private name: string;
    protected age: number;
    public color: string;
    
    constructor(name: string, age: number, color: string) {
    this.name = name;
    this.age = age;
    this.color = color;
    
    }   
    
    move() {
        console.log(${this.name} is moving);
        }
        
    breathe() {
        console.log(${this.name} is breathing);
        }   
    }

    class Mammals extends Animals {
        private milkType: string;
        
        constructor(name: string, age: number, color: string, milkType: string) {
        super(name, age, color);
        this.milkType = milkType;
        }
        
        produceMilk() {
        console.log(`${this.name} is producing ${this.milkType} milk`);
        }
    }