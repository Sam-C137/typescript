export namespace std {
    export class Out {
        static print(value: any) {
            console.log(value);
        }
    }
    export interface System {
        out: typeof Out;
    }
}
