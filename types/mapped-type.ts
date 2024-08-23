type Events = {
    add: string;
    edit: string;
    delete: string;
}

const eventActions: On<Events> = {
    onAdd: () => {},
    onEdit: () => {},
    onDelete: () => {}
}

type On<T extends  object> = {
    [Key in keyof T as Key extends string ? `on${Capitalize<Key>}` : never]: () => any
}