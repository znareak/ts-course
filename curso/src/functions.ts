function greet(name: string = "unknow"): string | void {
  console.log(name);
}

function pow(n1: string | number, n2: string | number): number {
  const res = Math.pow(Number(n1), Number(n2));
  return res;
}


greet("Libardo");
