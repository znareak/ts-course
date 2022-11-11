"use strict";
function greet(name = "unknow") {
    console.log(name);
}
function pow(n1, n2) {
    const res = Math.pow(Number(n1), Number(n2));
    return res;
}
greet("Libardo");
