"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greet(name) {
    if (typeof name === "string") {
        return `Hello: ${name}`;
    }
    else if (Array.isArray(name)) {
        return name.map((n) => `Hello ${n}`);
    }
}
console.log(greet("John"));
console.log(greet(["Paul", "James", "John"]));
function do_something(...args) {
    if (args.length === 1) {
        if (typeof args[0] === "string") {
            return `Unknown person says ${args[0]}`;
        }
    }
    else if (args.length === 2) {
        if (typeof args[0] === "string" && args[1] instanceof Human) {
            return args[1].speak(args[0]);
        }
    }
}
class Human {
    constructor(name) {
        this.name = name;
    }
    speak(words) {
        return `${this.name} says ${words}`;
    }
}
console.log(do_something("blah blah"));
console.log(do_something("I am the best", new Human("Kendrick Lamar")));
