/**
 * The factory pattern is a creational design pattern that provides an interface for 
 * creating objects in a superclass, but allows subclasses to alter the type of objects 
 * that will be created.
 * This pattern creates objects without exposing the instantiation logic to the client
 * and refers to the newly created object using a common interface.
 */

class AndroidButton {}

class IOSButton {}

// without factory
const button1 = os === "ios" ? new IOSButton() : new AndroidButton();
const button2 = os === "ios" ? new IOSButton() : new AndroidButton();

// with factory
class ButtonFactory {
    createButton(os: string): AndroidButton | IOSButton {
        if (os === "ios") {
            return new IOSButton();
        } else {
            return new AndroidButton();
        }
    }
}

const factory = new ButtonFactory();
const button3 = factory.createButton(os);
const button4 = factory.createButton(os);
