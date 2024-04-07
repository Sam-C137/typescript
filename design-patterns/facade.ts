/**
 * The facade pattern is a design pattern that provides a simplified interface to a 
 * larger body of code, such as a class library by implementing many lower level details
 * and hiding them from the end user.
 * In this case, the House class provides a simple method to configure the 
 * plumbing and electrical systems
 */

class PlumbingSystem {
    // low level access to plumbing system
    setPressure(v: number) {}
    turnOn() {}
    turnOff() {}
}

class ElectricalSystem {
    // low level access to electrical system
    setVoltage(v: number) {}
    turnOn() {}
    turnOff() {}
}

class House {
    private plumbing = new PlumbingSystem();
    private electrical = new ElectricalSystem();

    public turnOnSystems() {
        this.electrical.setVoltage(220);
        this.electrical.turnOn();
        this.plumbing.setPressure(10);
        this.plumbing.turnOn();
    }

    public shutDownSystems() {
        this.electrical.turnOff();
        this.plumbing.turnOff();
    }
}

const house = new House();
house.turnOnSystems();
house.shutDownSystems();
