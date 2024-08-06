"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function currency(strings, ...values) {
    return strings.reduce((result, str, i) => {
        let value = values[i - 1];
        if (typeof value === "number") {
            value = `$${value.toFixed(2)}`;
        }
        return result + value + str;
    });
}
const price = 19.95005;
console.log(currency `The total price is ${price}`);
