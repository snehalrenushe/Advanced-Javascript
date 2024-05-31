//Array - filter()

// let arr = [1, 2, 3, 4, 5, 6];
// let evenNumber = [];
// arr.forEach((el) => {
//   if (el % 2 === 0) {
//     evenNumber.push(el);
//   }
// });

// console.log(evenNumber);

// let evenNumbers = arr.filter((el) => el % 2 === 0);
// console.log(evenNumbers);

let arr = [
  {
    id: 101,
    name: "Snehal",
    code: 2,
  },
  {
    id: 102,
    name: "Sheetal",
    code: 1,
  },
  {
    id: 103,
    name: "Sarvesh",
    code: 2,
  },
];

let updated = arr.filter((ob) => ob.code === 2);
console.log(updated);
