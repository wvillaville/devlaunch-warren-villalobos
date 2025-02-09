
/*
El objetivo es crear una clase Airport que modele las características y operaciones de un aeropuerto
de forma más avanzada.

Cada aeropuerto tiene:

• Un nombre.
• Una ubicación.
• Una pista de aterrizaje (runway).
• Un nivel de tráfico aéreo (bajo, medio, alto).

La clase debe incluir:

• Un método changeTrafficLevel que permita cambiar el nivel de tráfico aéreo.
• Un método emergencyLanding que cierre la pista de aterrizaje y marque el nivel de tráfico como alto.
• Un método displayInfo que muestre el nombre del aeropuerto, la ubicación y el estado actual de la 
  pista y el nivel de tráfico.

Crea una instancia de la clase Airport y demuestra el uso de estos métodos con distintas opraciones.

*/
class Airport {
    private name: string;
    private location: string;
    private runway: string;
    private trafficLevel: string;

    constructor(name: string, location: string, runway: string, trafficLevel: string) {
        this.name = name;
        this.location = location;
        this.runway = runway;
        this.trafficLevel = trafficLevel;
    }

    changeTrafficLevel(newTrafficLevel: string) {
        this.trafficLevel = newTrafficLevel;
    }

    emergencyLanding() {
        this.runway = "closed";
        this.trafficLevel = "high";
    }

    displayInfo() {
        console.log(`Airport: ${this.name}\nLocation: ${this.location}\nRunway: ${this.runway}\nTraffic Level: ${this.trafficLevel}`);
    }
}

const airport = new Airport("JFK", "New York", "open", "low");
airport.displayInfo();
airport.changeTrafficLevel("medium");
airport.displayInfo();
airport.emergencyLanding();
airport.displayInfo();

