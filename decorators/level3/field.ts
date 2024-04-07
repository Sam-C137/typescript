type Task = {
    name: string;
    level: "low" | "medium" | "complicated";
};

class Owner {
    @withComplicatedTask
    @withTask({
        name: "Penalties",
        level: "low",
    })
    tasks: Task[] = [];
}

const owner = new Owner();
console.log(owner);

/**
 * Decorator factory
 */
function withTask(task: Task) {
    return function <T, V extends Task[]>(target: undefined, context: ClassFieldDecoratorContext<T, V>) {
        return function (args: V) {
            args.push(task);
            return args;
        };
    };
}

/**
 * Decorator
 */
function withComplicatedTask<T, V extends Task[]>(target: undefined, context: ClassFieldDecoratorContext<T, V>) {
    return function (args: V) {
        args.push({
            name: "Dunking",
            level: "complicated",
        });
        return args;
    };
}
