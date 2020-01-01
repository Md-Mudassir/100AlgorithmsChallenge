const add = (param1: number, param2: number): number => param1 + param2;

const add2 = (...param1: number[]): number =>
  param1.reduce((acc, val) => acc + val);

console.log(add(1, 6));
console.log(add(3, 2));

console.log(add2(1, 2, 3, 4, 5));
console.log(add2(2, 3));
