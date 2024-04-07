"use strict";
/**
 * The proxy pattern is a structural design pattern that lets you provide a substitute or placeholder
 * for another object. A proxy controls access to the original object, allowing you to perform something
 * either before or after the request gets through to the original object by intercepting the getters and
 * setters.
 * This can be typically observed in a framework like Vue.js where the reactivity system is implemented
 * using proxies to update the DOM when the state changes.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const original = { name: "Sam" };
const reactive = new Proxy(original, {
    get(target, key) {
        console.log("Tracking: ", key);
        return target[key];
    },
    set(target, key, value) {
        console.log("Updating ui...");
        return Reflect.set(target, key, value);
    },
});
reactive.name;
reactive.name = "Bob";
