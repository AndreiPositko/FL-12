let a = prompt("Please, input a");
if (isNaN(a) || !a || +a === 0) {
  console.log("Invalid input data");
} else {
  console.log("a = " + a);
}

let b = prompt("Please, Input b");
if (isNaN(b) || !b) {
  console.log("Invalid input data");
} else {
  console.log("b = " + b);
}

let c = prompt("Please, Input c");
if (isNaN(c) || !c) {
  console.log("Invalid input data");
} else {
  console.log("c = " + c);
}

let x, x1, x2;

console.log(a + "x^2 + " + b + "x + " + c + " = 0");
let descr = b * b - 4 * a * c;

if (descr < 0) {
  console.log("no solution (Descriminant < 0)");
} else if (descr == 0) {
  x = Math.round(-b / (2 * a));
  console.log("x = " + x);
} else {
  x1 = Math.round((-b + Math.sqrt(descr)) / (2 * a));
  x2 = Math.round((-b - Math.sqrt(descr)) / (2 * a));

  console.log("x1 = " + x1);
  console.log("x2 = " + x2);
}