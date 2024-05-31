//Array - sort with compareFn

// let arr = [3, 10, 2];
// arr.sort((a, b) => a - b);
// console.log(arr);

// console.log(1 + null);
// let arr = [2, null, 10, undefined, , 3, ,];
// arr.sort((a, b) => a - b);
// console.log(arr);

// let arr = ["B", "a", "C"];
// arr.sort((a, b) => {
//   a = a.toLowerCase();
//   b = b.toLowerCase();

//   if (a < b) {
//     return -1;
//   } else if (a > b) {
//     return 1;
//   } else {
//     return 0;
//   }
// });
// console.log(arr);

let arr = ["zébre", "abeille", "écureuil", "chat"];
arr.sort((a, b) => a.localeCompare(b));
console.log(arr);
