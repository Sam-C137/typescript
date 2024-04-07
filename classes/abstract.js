"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Base {
    print() {
        console.log("printed!");
    }
}
class Child {
    init() { }
}
class GrandChild extends Base {
    instanciate() {
        console.log("grandchild!!");
    }
}
const p = new GrandChild();
p.print();
