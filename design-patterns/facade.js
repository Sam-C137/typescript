"use strict";
/**
 * The facade pattern is a design pattern that provides a simplified interface to a
 * larger body of code, such as a class library by implementing many lower level details
 * and hiding them from the end user.
 * In this case, the House class provides a simple method to configure the
 * plumbing and electrical systems
 */
Object.defineProperty(exports, "__esModule", { value: true });
class PlumbingSystem {
    // low level access to plumbing system
    setPressure(v) { }
    turnOn() { }
    turnOff() { }
}
class ElectricalSystem {
    // low level access to electrical system
    setVoltage(v) { }
    turnOn() { }
    turnOff() { }
}
class House {
    constructor() {
        this.plumbing = new PlumbingSystem();
        this.electrical = new ElectricalSystem();
    }
    turnOnSystems() {
        this.electrical.setVoltage(220);
        this.electrical.turnOn();
        this.plumbing.setPressure(10);
        this.plumbing.turnOn();
    }
    shutDownSystems() {
        this.electrical.turnOff();
        this.plumbing.turnOff();
    }
}
const house = new House();
house.turnOnSystems();
house.shutDownSystems();
