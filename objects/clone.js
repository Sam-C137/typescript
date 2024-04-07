"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const john = {
    name: "John",
    hobbies: ["reading", "fortnite"],
};
const james = Object.assign({}, john);
james.hobbies.push("wrestling", "pubg");
james.name = "James";
console.log(john, james);
