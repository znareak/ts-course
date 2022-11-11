// El type assertion sucede cuando no es posible definir concretamente
// el tipo de dato devuelto por una expresion o una funcion

const response: any = "string";

const users = <string>response;
const users2 = response as string;

const canvas = document.getElementById("canvas") as HTMLCanvasElement; // <HTMLCanvasElement>
canvas.setAttribute("data-id", "canvas_id")