function* incrementingGenerator() {
    let value = 0;

    while (true) {
        yield value++;
    }
}

const generator = incrementingGenerator();

console.log(generator.next().value); // 0
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
console.log(generator.next().value); // 3


class Job {
    private readonly employees: string[];

    constructor(employees: string[]) {
        this.employees = employees;
    }

    *[Symbol.iterator]() {
        let idx = 0;
        while (idx < this.employees.length) {
            yield* this.employees[idx];
            idx++;
        }
    }
}

const faang = new Job(['me']);

for (const person of faang) {
    console.log(person)
}