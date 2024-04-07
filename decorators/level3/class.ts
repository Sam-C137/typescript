@withEmploymentDate
class Manager {
    title: string = "Simple task";
    project: string = "Simple project";

    constructor() {
        console.log("initializing manager class");
    }
}

const manager = new Manager();
console.log(manager);

function withEmploymentDateOnPrototype(value: Function, context: ClassDecoratorContext) {
    value.prototype.employmentDate = new Date().toISOString();
}

function withEmploymentDate<T extends { new (...args: any[]): {} }>(baseClass: T, context: ClassDecoratorContext) {
    return class extends baseClass {
        employmentDate = new Date().toISOString();
        constructor(...args: any[]) {
            super(...args);
            console.log("adding employment date to instance of " + context.name);
        }
    };
}

function printDecoratorData(value: Function, context: ClassDecoratorContext) {
    console.log("value", value);
    console.log("context", context);
    context.addInitializer(() => {
        console.log("initialzed class " + context.name);
    });
}
