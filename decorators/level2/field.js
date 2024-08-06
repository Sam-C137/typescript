"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
Object.defineProperty(exports, "__esModule", { value: true });
let HomePage = (() => {
    var _a;
    let _instanceExtraInitializers = [];
    let _title_decorators;
    let _title_initializers = [];
    return _a = class HomePage {
            constructor() {
                this.title = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _title_initializers, void 0));
                this.title = "Home Page";
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _title_decorators = [setTitle()];
            __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: obj => "title" in obj, get: obj => obj.title, set: (obj, value) => { obj.title = value; } }, metadata: _metadata }, _title_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
function setTitle() {
    return function (target, property) {
        let val = target[property];
        const getter = () => {
            console.log("Getting value");
            document.title = val;
            return val;
        };
        const setter = (next) => {
            console.log("Setting value");
            val = next;
            document.title = val;
        };
        Object.defineProperty(target, property, {
            set: setter,
            get: getter,
            enumerable: true,
            configurable: true,
        });
    };
}
const title = new HomePage().title;
console.log(new HomePage());
function Log(target, propertyKey) {
    let val = target[propertyKey];
    const getter = () => {
        console.log(`Get: ${propertyKey.toString()} => ${val}`);
        return val;
    };
    const setter = (next) => {
        console.log(`Set: ${propertyKey.toString()} => ${next}`);
        val = next;
    };
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true,
    });
}
let TestClass = (() => {
    var _a;
    let _instanceExtraInitializers = [];
    let _prop_decorators;
    let _prop_initializers = [];
    return _a = class TestClass {
            constructor() {
                this.prop = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _prop_initializers, void 0));
                this.prop = "Hello, world!";
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _prop_decorators = [Log];
            __esDecorate(null, null, _prop_decorators, { kind: "field", name: "prop", static: false, private: false, access: { has: obj => "prop" in obj, get: obj => obj.prop, set: (obj, value) => { obj.prop = value; } }, metadata: _metadata }, _prop_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
let test = new TestClass();
test.prop = "New value"; // Logs: Set: prop => New value
console.log(test.prop); // Logs: Get: prop => New value
