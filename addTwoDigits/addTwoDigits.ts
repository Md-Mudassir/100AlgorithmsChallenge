const addTwoDigits = (n: any): number =>
  n
    .toString()
    .split('')
    .map(Number)
    .reduce((a, b) => a + b);

console.log(addTwoDigits(291112));
