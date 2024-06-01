// Array - reduce() vs reduceRight()

let arr = [1, 2, 3, 4, 5];

console.log(arr);

// let sum = arr.reduce((p, c, index) => {
//   console.log(index);
//   return p + c;
// }, 0);

let sum = arr.reduceRight((p, c, index) => {
  console.log(index);
  return p + c;
}, 0);

console.log(sum);
