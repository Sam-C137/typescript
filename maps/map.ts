const map = new Map();
map.set("location", "Nicaragua");
console.log(map.get("location"));

const johncena = {
    name: "👻",
    titles: 7,
};
map.set(johncena, "goat"); //useful for storing metadata associated with any obj
console.log(map.get(johncena));

const stringCena = JSON.stringify(johncena, null, 2);

const mapCena = new Map(Object.entries(johncena));

const test = { set: new Set([1, 2, 3]), map: new Map([[johncena, "goat"]]) };
const mapStringCena = JSON.stringify(test, replacer);

const arrayObjCena = JSON.parse(mapStringCena, reviver);

//helpers
function replacer(key, val) {
    if (val instanceof Map) {
        return { _type: "Map", value: Object.fromEntries(val) };
    }

    if (val instanceof Set) {
        return { _type: "Set", value: Array.from(val) };
    }
    return val;
}

function reviver(key, val) {
    if (val?._type === "Set") {
        return new Set(val.value);
    }
    if (val?._type === "Map") {
        return new Map(Object.entries(val.value));
    }
    return val;
}
