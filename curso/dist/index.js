"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_objects_1 = require("./enums_objects");
//data types
const age = 4;
const numbers = [1.3, 4, 5];
const multiple = [10, "40", undefined];
class Collection {
}
class Stack extends Collection {
    constructor(init = []) {
        super();
        this.data = init;
    }
    add(item) {
        this.data.push(item);
    }
    get len() {
        return this.data.length;
    }
    toString() {
        for (const item of this.data) {
            console.log(item);
        }
    }
    mapeo(callback) {
        for (const item of this.data) {
            callback(item);
        }
    }
}
function findItems(collection, comparator) {
    const pila = new Stack();
    for (const item of collection.data) {
        if (comparator(item))
            pila.add(item);
    }
    return pila;
}
const stack1 = new Stack([3, 10, -483, -1, 93284, 29, -3.4]);
console.log(findItems(stack1, (item) => item < 1));
const connection = {
    host: "127.0.0.1",
    port: 3000,
    protocol: "http",
};
const tupla = ["cadena", 4, false];
const tuplaBidimensional = [[true, "Error los campos son obligatorios"]];
console.log(enums_objects_1.Roles);
