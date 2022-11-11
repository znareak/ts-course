"use strict";
// class People {
//   private people: Person[] = [];
//   addPerson(person: Person): void {
//     this.people.push(person);
//   }
//   getPersons(): void {
//     console.log(`List of persons: ${JSON.stringify(this.people, null, 3)}`);
//   }
//   getNames(): string[] {
//     return this.people.map((p) => p.name);
//   }
//   getPersonById(id: string): Person | undefined {
//     return this.people.find((person) => person.id === id);
//   }
// }
// class Collection<T extends (IPerson | IProduct)>
// es necesario espeficiar que el tipo T es posible que tenga {id, name} como campos
class Collection {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
        return this;
    }
    getItems() {
        console.log(`List of items: ${JSON.stringify(this.items, null, 3)}`);
    }
    getNames() {
        return this.items.map((p) => p.name);
    }
    getItemById(id) {
        return this.items.find((item) => item.id === id);
    }
}
const productCollection = new Collection();
const peopleCollection = new Collection();
productCollection
    .addItem({
    id: Date.now(),
    name: "Beer",
    price: 3,
})
    .addItem({
    id: Date.now(),
    name: "Red Wine",
    price: 4,
})
    .addItem({
    id: Date.now(),
    name: "Coca Cola",
    price: 2,
});
peopleCollection
    .addItem({
    id: Date.now(),
    name: "Ignacio",
    country: "ve",
})
    .addItem({
    id: Date.now(),
    name: "Laura",
    country: "co",
})
    .addItem({
    id: Date.now(),
    name: "Lucia",
    country: "us",
});
productCollection.getItems();
peopleCollection.getItems();
