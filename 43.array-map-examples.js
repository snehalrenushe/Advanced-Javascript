//Array - map() examples

// let arr = [1, 2, null, 4, ,];

// let sum = 0;
// let updatedArr = arr.map((ob) => {
//   return (sum += ob);
// });

// console.log(sum);

// let updatedArr = arr.map((ob) => {
//   if (ob || ob === 0) {
//     return ob * ob;
//   } else {
//     return null;
//   }
// });

// updatedArr = updatedArr.filter((ob) => (ob ? true : false));

// console.log(updatedArr);

let arr = [
  {
    name: "Snehal",
  },
  {
    name: "Sheetal",
  },
];

let updatedArr = arr.map((ob) => {
  return {
    ...ob,
    code: 1,
  };
});

console.log(arr);
console.log(updatedArr);