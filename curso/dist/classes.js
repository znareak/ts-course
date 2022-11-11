"use strict";
class Render {
    // Automatic properties en el constructor
    constructor(root, callback) {
        this.root = root;
        this.callback = callback;
        const result = callback(root);
        this.result = result;
    }
    getRoot() {
        console.log(this.callback); // es posible acceder a la propiedad sin haberla definido
        return this.root;
    }
    getResult() {
        return this.result;
    }
}
class Employee extends Render {
    constructor(id, name, dept) {
        const elemento = {};
        super(elemento, (result) => result);
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.hasRendered = true;
    }
    getInfo() {
        console.log(`#${this.id} ${this.name}, ${this.dept}`);
    }
    toString() {
        return `#${this.id} ${this.name}, ${this.dept}`;
    }
    get getId() {
        return this.id;
    }
    getHasRendered() {
        return this.hasRendered;
    }
}
const render = new Render({}, (result) => {
    return result;
});
const libardo = new Employee(Date.now(), "Libardo Rengifo", "Desarrollador");
console.log(libardo.toString());
console.log(libardo.getId);
console.log(libardo.getHasRendered());
