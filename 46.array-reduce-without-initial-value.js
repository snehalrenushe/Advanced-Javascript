//Array - reduce() without initial value

let arr = [1, 2, 3, 4, 5];

console.log(arr);

let sum = arr.reduce((p, c) => {
  console.log(p + " : " + c);
  return p + c * c;
});

console.log(sum);
