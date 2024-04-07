class Project {
    budget: number = 900;

    @withBudget(10)
    writeTests() {
        console.log("Tests are important!!!");
    }

    @withBudget(500)
    fixBugsInProduction() {
        console.log("Fixing bugs in production... :(((");
    }
}

const project = new Project();
project.fixBugsInProduction();
project.fixBugsInProduction();

function withBudget(actionBudget: number) {
    return function <T extends { budget: number }>(target: Function, context: ClassMethodDecoratorContext<T>) {
        return function (...args: any) {
            // @ts-ignore
            const instance = this as T;
            if (instance.budget > actionBudget) {
                instance.budget -= actionBudget;
                target.apply(instance, args);
            } else {
                console.error(
                    `Insufficient budget for ${context.name.toString()}. Required: ${actionBudget}, available: ${
                        instance.budget
                    }`
                );
            }
            return target;
        };
    };
}
