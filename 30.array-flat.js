//flat()

// let arr = [
//   [1, 2, 3, [11, 22]],
//   [4, 5, 6],
// ];

// let updatedArr = arr.flat(Infinity);
// console.log(updatedArr);

// let arr = [1, 2, 3, , null, undefined, 4];
// console.log(arr.flat()); //removed empty slot not null and undefined

let arr = [
  1,
  2,
  { id: 101, name: "Snehal", cities: ["Sangli", "Satara", "Kolhapur"] },
];

console.log(arr.flat(Infinity));
