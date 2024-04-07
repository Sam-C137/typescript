"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.std = void 0;
var std;
(function (std) {
    class Out {
        static print(value) {
            console.log(value);
        }
    }
    std.Out = Out;
})(std || (exports.std = std = {}));
