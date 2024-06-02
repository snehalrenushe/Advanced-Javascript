// Array - from()

// let arr = [1, 2, 3];

// console.log(arr);

// // let arr2 = Array.from(arr);
// let arr2 = Array.from(arr, (value) => value * value);

// console.log(arr2);

// let arr = Array.from("XYZ  ABC");
// let arr = Array.from(new Set([1, 2, 3]));
// console.log(arr);

let arr = Array.from({ length: 5 }, (value, index) =>
  Math.round(Math.random() * 1000)
);
console.log(arr);
