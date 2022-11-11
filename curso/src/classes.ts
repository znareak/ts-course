class Render {
  /*
    callback : Function
    callback : () => void
  */
  private result!: HTMLElement | null;

  protected hasRendered!: boolean;

  // Automatic properties en el constructor
  constructor(
    private readonly root: HTMLElement,
    private readonly callback: (result: HTMLElement) => null | HTMLElement
  ) {
    const result = callback(root);
    this.result = result;
  }

  public getRoot(): HTMLElement | null {
    console.log(this.callback); // es posible acceder a la propiedad sin haberla definido

    return this.root;
  }

  public getResult(): HTMLElement | null {
    return this.result;
  }
}

class Employee extends Render {
  private id!: number;
  public name!: string;
  public dept!: string;

  constructor(id: number, name: string, dept: string) {
    const elemento = {} as HTMLElement;
    super(elemento, (result) => result);
    this.id = id;
    this.name = name;
    this.dept = dept;
    this.hasRendered = true;
  }

  getInfo(): void {
    console.log(`#${this.id} ${this.name}, ${this.dept}`);
  }

  toString(): string {
    return `#${this.id} ${this.name}, ${this.dept}`;
  }

  public get getId(): number {
    return this.id;
  }

  public getHasRendered(): boolean {
    return this.hasRendered;
  }
}

const render = new Render({} as HTMLSpanElement, (result) => {
  return result;
});

const libardo = new Employee(Date.now(), "Libardo Rengifo", "Desarrollador");

console.log(libardo.toString());
console.log(libardo.getId);
console.log(libardo.getHasRendered());
