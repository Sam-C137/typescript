const obj = {
    a: "hello",
    b: 1,
    c: undefined,
    d: {
        toJSON() {
            return 42
        }
    },
    e: () => console.log("Hello from e")
}

const str = JSON.stringify(obj)
//    ^?
const safe = JSON.parse(str)
//    ^?
