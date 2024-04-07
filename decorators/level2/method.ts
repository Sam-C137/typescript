class ProtectedPage {
    @withCredentials
    public buyItems() {
        console.log("Buying items");
    }
}

const userState = {
    name: "Bob",
    role: "admin",
    isLoggedIn: true,
};

function withCredentials(target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        if (userState.isLoggedIn) {
            originalMethod.apply(this, arguments);
        } else {
            alert("Please log in to buy items");
        }
    };
}

const page = new ProtectedPage();
page.buyItems();
userState.isLoggedIn = false;
page.buyItems();
