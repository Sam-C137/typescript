@Component()
class SomeComponent implements onMount, onDestroy {
    constructor() {
        this.onMount();
    }

    onMount(): void {
        console.log("Mounted");
        setTimeout(() => {
            this.onDestroy();
        }, 2000);
    }

    onDestroy(): void {
        console.log("Destroyed");
    }
}

function Component() {
    return function (target: { new (...args: any[]): {} }) {
        target.prototype.componentName = "CustomComponent";
        target["onMount"] = function (...args: any[]) {};
        target["onDestroy"] = function (...args: any[]) {};
    };
}

interface onMount {
    onMount(): void;
}

interface onDestroy {
    onDestroy(): void;
}

console.log(new SomeComponent());
