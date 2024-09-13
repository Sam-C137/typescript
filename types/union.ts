type BaseMessage = { id: string, timestamp: number };
type TextMessage = BaseMessage & { text: string; };
type ImageMessage = BaseMessage & { imageUrl: string };
type UrlMessage = BaseMessage & { url: string; };

type Message = TextMessage | ImageMessage | UrlMessage;

/**
 * Takes two types and returns a new type that only has the properties of the first type
 */
type OnlyFirst<F, S> = F & {
    [K in keyof Omit<S, keyof F>]?: never
}

/**
 * Merges all types from a tuple into one type
 */
type MergeTypes<TypesArray extends unknown[], Result = {}> =
    TypesArray extends [infer Head, ...infer Rest]
        ? MergeTypes<Rest, Result & Head>
        : Result;

/**
 * Picks a union and returns one type instead of `a | b | c` aka all the types in a union
 * the default union behavior
 */
type OneOf<
    TypesArray extends unknown[],
    Results = never,
    AllProperties = MergeTypes<TypesArray>
> = TypesArray extends [infer Head, ...infer Rest]
    ? OneOf<Rest, Results | OnlyFirst<Head, AllProperties>, AllProperties> : Results;


const message: OneOf<UnionToArray<Message>>  = {
    id: '1',
    timestamp: Date.now(),
    // imageUrl: 'http://localhost:8080',
    text: 'Hello, world!',
    // url: 'http://localhost:8080',
}


/**
 * Takes a union and returns an intersection of all the types in the union
 */
type UnionToIntersection<U> = (U extends unknown ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;


/**
 * Takes a union and returns the last type in the union
 */
type LastOf<T> = UnionToIntersection<T extends unknown ? () => T : never> extends () => (infer R) ? R : never;

/**
 * Takes a tuple and a type and returns a new tuple with the type appended to the input tuple
 */
type Push<T extends unknown[], V> = [...T, V];

/**
 * Takes a union and returns an array of all the types in the union
 */
type UnionToArray<T, A extends unknown[] = []> = [T] extends [never]
    ? A
    : UnionToArray<Exclude<T, LastOf<T>>, Push<A, LastOf<T>>>;