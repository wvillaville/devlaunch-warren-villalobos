type InstrumentType = "guitar" | "piano" | "drums";


class Instrument {
    constructor(private type: InstrumentType) { }
    

    play() {
        console.log(`Strumming the ${this.type}`);
    };

}

class Guitar extends Instrument {
    constructor() { 
        super('guitar');
    }
}   

class Piano extends Instrument {
    constructor() { 
        super('piano');
    }
}

class Drums extends Instrument {
    constructor() { 
        super('drums');
    }
}

class Artist {
    constructor(private instrument: Instrument) { }
}


const guitar1 = new Guitar();
guitar1.play();


