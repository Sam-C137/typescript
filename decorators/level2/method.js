var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class ProtectedPage {
    buyItems() {
        console.log("Buying items");
    }
}
__decorate([
    withCredentials
], ProtectedPage.prototype, "buyItems", null);
const userState = {
    name: "Bob",
    role: "admin",
    isLoggedIn: true,
};
function withCredentials(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        if (userState.isLoggedIn) {
            originalMethod.apply(this, arguments);
        }
        else {
            alert("Please log in to buy items");
        }
    };
}
const page = new ProtectedPage();
page.buyItems();
userState.isLoggedIn = false;
page.buyItems();
