class BankAccount {
    private _balance: number = 10;

    @interest(2)
    get balance() {
        return this._balance;
    }
}

function interest(val: number) {
    return function (target: Object, key: string | symbol, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.get;

        descriptor.get = function () {
            return originalMethod.apply(this) * (1 + val / 100);
        };

        return descriptor;
    };
}

console.log(new BankAccount().balance);
