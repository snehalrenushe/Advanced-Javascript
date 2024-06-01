// Array - reduce()

let arr = [1, 2, 3, 4, 5];

console.log(arr);

let sum = arr.reduce((p, c) => {
  //   console.log(p);
  //   console.log(c);
  console.log(p + " : " + c);
  return p + c;
}, 0);

console.log(sum);
