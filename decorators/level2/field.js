var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class HomePage {
    title;
    constructor() {
        this.title = "Home Page";
    }
}
__decorate([
    setTitle()
], HomePage.prototype, "title", void 0);
function setTitle() {
    return function (target, property) {
        let val = target[property];
        const getter = () => {
            console.log("Getting value");
            document.title = val;
            return val;
        };
        const setter = (next) => {
            console.log("Setting value");
            val = next;
            document.title = val;
        };
        Object.defineProperty(target, property, {
            set: setter,
            get: getter,
            enumerable: true,
            configurable: true,
        });
    };
}
const title = new HomePage().title;
console.log(new HomePage());
function Log(target, propertyKey) {
    let val = target[propertyKey];
    const getter = () => {
        console.log(`Get: ${propertyKey.toString()} => ${val}`);
        return val;
    };
    const setter = (next) => {
        console.log(`Set: ${propertyKey.toString()} => ${next}`);
        val = next;
    };
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true,
    });
}
class TestClass {
    prop;
    constructor() {
        this.prop = "Hello, world!";
    }
}
__decorate([
    Log
], TestClass.prototype, "prop", void 0);
let test = new TestClass();
test.prop = "New value"; // Logs: Set: prop => New value
console.log(test.prop); // Logs: Get: prop => New value
