//break vs continue

// let arr = [1, 2, 3, null, 8, 5];

// for (const el of arr) {
//   if (el === null) {
//     // break;
//     continue;
//   }
//   console.log(el + " : " + el * el);
// }

// console.log("Outside loop");

let a = [
  [10, null, 30],
  [40, 50, 60],
  [70, 80, 90],
];

for (const tempArr of a) {
  for (const el of tempArr) {
    if (el === null) {
    //   break;
      continue;
    }
    console.log(el);
  }
}
