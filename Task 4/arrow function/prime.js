const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let primeNumber = find((a) => {
  return a % 1 === 1;
});
console.log(primeNumber);
