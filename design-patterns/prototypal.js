"use strict";
/**
 * The prototype pattern is a creational design pattern that lets you produce new
 * instances of objects by copying an existing object, known as the prototype.
 * This is the default way of creating objects in JavaScript.
 * In the example below, the eatBrains method does not directly exist on the chad object,
 * however it is available on it's prototypal chain and can be called.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const zombie = {
    eatBrains() {
        return "yum 🧠";
    },
};
const chad = Object.create(zombie, { name: { value: "Chad" } });
console.log(chad);
chad.eatBrains();
console.log(Object.getPrototypeOf(chad));
