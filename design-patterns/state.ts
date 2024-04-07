/**
 * The state pattern is a behavioral design pattern that allows an object to alter its behavior
 * when its internal state changes. The object will appear to change its class.
 * In the example below, we have a Human class that can think in different moods. We can implement
 * the state pattern by creating a State interface that has a think method. We can then create
 * different classes that implement the State interface (Happy and Sad). We can then create a
 * SuperHuman class that has a state property that is an instance of the State interface. The
 * SuperHuman class has a think method that calls the think method of the state property. We can
 * then change the state of the SuperHuman object by calling the changeState method.
 * This might be better structured and more concise than having a think method that 
 * conditionally returns different outputs based on the mood.
 */

// without state
class Human {
    think(mood: string) {
        switch (mood) {
            case "happy":
                return "I am happy 🙂";
            case "sad":
                return "I am sad 😢";
            default:
                return "I am neutral 😐";
        }
    }
}

//with state
interface State {
    think(): string;
}

class Happy implements State {
    think() {
        return "I am happy 🙂";
    }
}

class Sad implements State {
    think() {
        return "I am sad 😢";
    }
}

class SuperHuman {
    state: State;

    constructor() {
        this.state = new Happy();
    }

    think() {
        return this.state.think();
    }

    changeState(state: State) {
        this.state = state;
    }
}
