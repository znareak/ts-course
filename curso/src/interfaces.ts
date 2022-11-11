interface Book {
  id: number;
  title: string;
  author: string;
  coAuthor?: string;
  date?: Date;
  setDate?: (date: Date) => Book;
}

const book1: Book = {
  id: 49,
  title: "Mil sombras",
  author: "J. Martin Hans",
  setDate(date: Date) {
    this.date ??= date;
    return this;
  },
};

const books: Book[] = [book1];

function getBook(): Book {
  return { ...book1, coAuthor: "Libardo Rengifo" };
}

const book2 = getBook();

// extends y implements
interface Thing {
  name: string;
  color: string;
}

interface Car {
  mark: string | null;
  year: number | null;
  price?: number | null;
}

interface Supra extends Thing, Car {
  nitro: boolean;
}

const supra: Supra = {
  name: "car",
  color: "black",
  mark: "toyota",
  year: 2002,
  nitro: true,
};

class Toyota implements Car {
  public mark;
  public year;
  public price;

  constructor({ mark, year, price }: Car) {
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
