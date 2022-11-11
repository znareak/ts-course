"use strict";
const book1 = {
    id: 49,
    title: "Mil sombras",
    author: "J. Martin Hans",
    setDate(date) {
        var _a;
        (_a = this.date) !== null && _a !== void 0 ? _a : (this.date = date);
        return this;
    },
};
const books = [book1];
function getBook() {
    return Object.assign(Object.assign({}, book1), { coAuthor: "Libardo Rengifo" });
}
const book2 = getBook();
const supra = {
    name: "car",
    color: "black",
    mark: "toyota",
    year: 2002,
    nitro: true,
};
class Toyota {
    constructor({ mark, year, price }) {
        this.mark = mark;
        this.year = year;
        this.price = price;
    }
}
// instanciacion de una clasenpm 
const SupraMK4 = new Toyota({
    mark: "Toyota",
    year: 2006,
    price: 8.6,
});
console.log(SupraMK4);
