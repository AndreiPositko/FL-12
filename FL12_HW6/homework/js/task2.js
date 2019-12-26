let a = +prompt('Please, enter the first side (a) of triangle');
let b = +prompt('Please, enter the second side (b) of triangle');
let c = +prompt('Please, enter the third side (c) of triangle');

if (
  a === '' ||
  b === '' ||
  c === '' ||
  parseInt(a) !== a ||
  parseInt(b) !== b ||
  parseInt(c) !== c
) {
  alert('input values shoud be ONLY numbers');
} else if (a <= 0 || b <= 0 || c <= 0) {
  alert('A triangle must have 3 sides with a positive definite length');
} else if (!(a + b > c || b + c > a || c + a > b)) {
  alert('Triangle doesn’t exist');
  console.log('Triangle doesn’t exist');
} else if (a === b && b === c) {
  console.log('Equilateral triangle');
} else if (a === b || b === c || c === a) {
  console.log('Isosceles triangle');
} else {
  console.log('Scalene triangle');
}
