import { Roles } from "./enums_objects";

interface IConnection {
  host: string;
  port: number;
  protocol: string;
}

type TNumero = string | number | undefined;

//data types
const age: TNumero = 4;
const numbers: number[] = [1.3, 4, 5];
const multiple : TNumero[] = [10, "40", undefined]

abstract class Collection {
  abstract add(item: number): void;
  abstract get len(): number;
  abstract mapeo(callback: Function): void;
}

class Stack extends Collection {
  data: number[];

  constructor(init: number[] = []) {
    super();
    this.data = init;
  }

  add(item: number) {
    this.data.push(item);
  }

  get len(): number {
    return this.data.length;
  }

  toString(): void {
    for (const item of this.data) {
      console.log(item);
    }
  }

  mapeo(callback: Function): void {
    for (const item of this.data) {
      callback(item);
    }
  }
}

function findItems(collection: Stack, comparator: Function): Stack {
  const pila = new Stack();
  for (const item of collection.data) {
    if (comparator(item)) pila.add(item);
  }
  return pila;
}

const stack1 = new Stack([3, 10, -483, -1, 93284, 29, -3.4]);

console.log(findItems(stack1, (item: number) => item < 1));

const connection: IConnection = {
  host: "127.0.0.1",
  port: 3000,
  protocol: "http",
};

const tupla: [string, number, boolean] = ["cadena", 4, false];
const tuplaBidimensional : [boolean, string][] = [[true, "Error los campos son obligatorios"]]

console.log(Roles);
