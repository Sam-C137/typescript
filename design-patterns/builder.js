"use strict";
/**
 * The builder pattern is a design pattern designed to provide a flexible solution
 * to various object creation problems in object-oriented programming.
 * The intent of the Builder design pattern is to separate the construction of a
 * complex object from its representation.
 *
 * In the example below, we have a Kitchen class that has methods to add ketchup, mustard, and onions.
 * you can create a launch with or without ketchup, mustard, and onions by simply chaining the methods
 */
Object.defineProperty(exports, "__esModule", { value: true });
class HotDog {
    constructor(kitchen) {
        this.ketchup = kitchen.ketchup;
        this.mustard = kitchen.mustard;
        this.onions = kitchen.onions;
    }
}
class Kitchen {
    addKetchup() {
        this.ketchup = true;
        return this;
    }
    addMustard() {
        this.mustard = true;
        return this;
    }
    addOnions() {
        this.onions = true;
        return this;
    }
    serve() {
        return new HotDog(this);
    }
}
const launch = new Kitchen()
    .addKetchup()
    .addOnions()
    .serve();
console.log(launch);
//           ^?
