function greet(name: string): string;
function greet(name: string[]): string[];

function greet(name: unknown): unknown {
    if (typeof name === "string") {
        return `Hello: ${name}`;
    } else if (Array.isArray(name)) {
        return name.map((n) => `Hello ${n}`);
    }
}

console.log(greet("John"));
console.log(greet(["Paul", "James", "John"]));

function do_something(words: string): string;
function do_something(words: string, person: Human): string;

function do_something(...args: unknown[]) {
    if (args.length === 1) {
        if (typeof args[0] === "string") {
            return `Unknown person says ${args[0]}`;
        }
    } else if (args.length === 2) {
        if (typeof args[0] === "string" && args[1] instanceof Human) {
            return args[1].speak(args[0]);
        }
    }
}

class Human {
    private name;

    constructor(name: string) {
        this.name = name;
    }

    public speak(words: string) {
        return `${this.name} says ${words}`;
    }
}

console.log(do_something("blah blah"));
console.log(do_something("I am the best", new Human("Kendrick Lamar")));
