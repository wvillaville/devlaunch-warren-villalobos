
/*
Cuando se trata de ventiladores, a menudo presentan características distintivas como configuraciones
de velocidad, tamaño, potencia medida en vatios o caballos de fuerza, tipo y color.

Para manejar y modificar adecuadamente las características de un ventilador, es útil organizarlas
en un sistema de clases. De esta manera, se obtiene una estructura clara para trabajar con las
propiedades del ventilador, facilitando la comprensión, reutilización y mantenimiento del código.

Para abordar esta tarea, crearemos una clase que encapsule los diferentes atributos de un ventilador.
Esta clase incluirá un constructor para inicializar dichos atributos y métodos como getters y setters
para acceder y modificarlos según sea necesario.

Al implementar esta estructura de clase, podremos representar y gestionar de manera eficiente las
características de los ventiladores en nuestro sistema.

Esta clase está diseñada para proporcionar todas las características esenciales del ventilador desde
el momento de su creación.

*/

class Fan {
    private speed: number;
    private size: number;
    private power: number;
    private type: string;
    private color: string;
    
    constructor(speed: number, size: number, power: number, type: string, color: string) {
        this.speed = speed;
        this.size = size;
        this.power = power;
        this.type = type;
        this.color = color;
    }
    
    getSpeed(): number {
        return this.speed;
    }
    
    setSpeed(speed: number): void {
        this.speed = speed;
    }
    
    getSize(): number {
        return this.size;
    }
    
    setSize(size: number): void {
        this.size = size;
    }
    
    getPower(): number {
        return this.power;
    }
    
    setPower(power: number): void {
        this.power = power;
    }
    
    getType(): string {
        return this.type;
    }
    
    setType(type: string): void {
        this.type = type;
    }
    
    getColor(): string {
        return this.color;
    }
    
    setColor(color: string): void {
        this.color = color;
    }
    }

    const fan = new Fan(3, 12, 100, 'Ceiling', 'White');
    console.log(fan.getSpeed()); 
    console.log(fan.getSize()); 
    console.log(fan.getPower()); 
    console.log(fan.getType()); 
    console.log(fan.getColor()); 
    fan.setSpeed(5);
    fan.setSize(18);
    fan.setPower(200);
    fan.setType('Table');
    fan.setColor('Black');
    console.log(fan.getSpeed()); 
    console.log(fan.getSize()); 
    console.log(fan.getPower()); 
    console.log(fan.getType()); 
    console.log(fan.getColor()); 
    