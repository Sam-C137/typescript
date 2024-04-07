class HomePage {
    @setTitle()
    title: string;

    constructor() {
        this.title = "Home Page";
    }
}

function setTitle() {
    return function (target: Object, property: string) {
        let val = target[property];
        const getter = () => {
            console.log("Getting value");
            document.title = val;
            return val;
        };

        const setter = (next: typeof val) => {
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

function Log(target: Object, propertyKey: string | symbol): any {
    let val = target[propertyKey];

    const getter = () => {
        console.log(`Get: ${propertyKey.toString()} => ${val}`);
        return val;
    };
    const setter = (next: any) => {
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
    @Log
    public prop: string;

    constructor() {
        this.prop = "Hello, world!";
    }
}

let test = new TestClass();
test.prop = "New value"; // Logs: Set: prop => New value
console.log(test.prop); // Logs: Get: prop => New value
