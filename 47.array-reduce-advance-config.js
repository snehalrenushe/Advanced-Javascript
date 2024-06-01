//Array - reduce() with advance config

let arr = [10, 20, 30, 40, 50];

console.log(arr);

let sum = arr.reduce((p, c, index, oArray) => {
  console.log("index:" + index + ",c:" + c);

  if (index % 2 === 0) {
    return p;
  } else {
    return p + c;
  }
}, 0);

console.log(sum);
