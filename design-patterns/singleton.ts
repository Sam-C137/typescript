/**
 * The singleton pattern is a design pattern that restricts the instantiation of a class to 
 * one object. This is useful when exactly one object is needed to coordinate actions across
 * the system. The concept is sometimes generalized to systems that operate more efficiently
 * when only one object exists, or that restrict the instantiation to a certain number of objects.
 */

class Singleton {
    static instance: Singleton;

    public readonly mode: "dark" | "light" = "dark";

    private constructor() {}

    static create() {
        if (!this.instance) {
            this.instance = new Singleton();
        }

        return this.instance;
    }
}

const obj = Singleton.create();
//     ^?

const obj2 = {
    mode: "dark",
};
//☝ this works too
