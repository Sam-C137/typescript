/**
 * The mediator pattern is a behavioral design pattern that lets you reduce chaotic 
 * dependencies between objects by controlling the way they communicate. The pattern
 * restricts direct communications between the objects and forces them to collaborate
 * by serving as a sort of middleware. 
 * This can be applied in air traffic control systems where the tower
 * serves as the mediator between the airplanes and the runways.
 * A practical example would be the express framework in Node.js
 */

class Airplane {
    land() {}
}

class Runway {
    clear: boolean;
}

const runway25A = new Runway();
const runway25B = new Runway();
const runway7 = new Runway();
const a = new Airplane();
const b = new Airplane();
const c = new Airplane();

class Tower {
    clearForLanding(runway: Runway, plane: Airplane) {
        if (runway.clear) {
            console.log(`Plane ${plane} is clear to land on runway ${runway}`);
            plane.land();
        }
    }
}
