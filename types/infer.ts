/**
 * creating a fake version of @type {ReturnType}
 */

function funky() {
    return true;
}

type FakeReturnType<T> = T extends (...args: unknown[]) => infer R ? R : never;

type FunkyType = FakeReturnType<typeof funky>;

/**
 * getting the types from a deeply nested object
 */

const obj = {
    a: {
        b: {
            c: "paul",
        },
    },
};

type GetDeepNestedType<T> = T extends {
    a: {
        b: {
            c: infer C;
        };
    };
}
    ? C
    : never;

type ObjType = GetDeepNestedType<typeof obj>;

type FlexibleGetDeepNestedType<U> = U extends
    | {
          c: infer C;
      }
    | {
          a: {
              c: infer C;
          };
      }
    | {
          a: {
              b: {
                  c: infer C;
              };
          };
      }
    ? C
    : never;

type ObjTypeExtra = GetDeepNestedType<typeof obj>;

type LogLevel<K> = K extends 2 ? 1 : 0;

const alert = 2;
const warning = 1;

type AlertType = LogLevel<typeof alert>;
type WarningType = LogLevel<typeof warning>;

type InstanceType<T> = T extends Ball ? T["name"] : never;

class Ball {
    color: string;
    size: number;
    name: string;

    constructor() {}
}

class NikeProWC2022 {
    color: "red";
    size: 24;
    name = "Nike WC 2022" as const;

    constructor() {}
}

type BallType = InstanceType<NikeProWC2022>;
