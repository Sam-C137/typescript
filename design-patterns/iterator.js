"use strict";
/**
 * The iterator pattern is a design pattern in which an iterator is used to traverse a
 * container and access the container's elements.
 * Here is a simple illustration, trying to recreate the range function in Python
 */
Object.defineProperty(exports, "__esModule", { value: true });
function range(start, end, step = 1) {
    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            if (start < end) {
                start += step;
                return { done: false, value: start };
            }
            return { done: true, value: end };
        },
    };
}
for (const i of range(0, 10, 2)) {
    console.log(i);
}
