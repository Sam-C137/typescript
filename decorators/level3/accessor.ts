class Boss {
    @watchChanges
    //Auto-accessors unlike regular fields, define a getter and a setter on the class prototype.
    accessor project: string = "Simple project";
}

const boss = new Boss();
boss.project = "Complex project";
boss.project = "Super complex project";
console.log(boss.project);

function watchChanges<T, V>(
    accessor: { get: (this: T) => V; set: (this: T, value: V) => void },
    context: ClassAccessorDecoratorContext<T, V>
) {
    return {
        get: function (this: T) {
            return accessor.get.call(this) + " some sprinkles";
        },
        set: function (this: T, value: V) {
            console.log(`Changing project from ${context.name.toString()} to ${value}`);
            accessor.set.call(this, value);
        },
    };
}
