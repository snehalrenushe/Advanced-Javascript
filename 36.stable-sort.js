//Stable sort

let arr = [
  {
    id: 105,
    name: "Snehal",
    code: 2,
  },
  {
    id: 101,
    name: "Sheetal",
    code: 1,
  },
  {
    id: 102,
    name: "Sarvesh",
    code: 1,
  },
  {
    id: 103,
    name: "Geeta",
    code: 1,
  },
  {
    id: 104,
    name: "Rita",
    code: 2,
  },
];

arr.sort((ob1, ob2) => ob1.code - ob2.code);

console.log(arr);
