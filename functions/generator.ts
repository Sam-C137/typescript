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
