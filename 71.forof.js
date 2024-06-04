//for-of

// let arr = [10, 20, 30];
// for (const el of arr) {
//   // el = 0;
//   console.log(el);
// }

// let arr = [
//   {
//     language: "Hindi",
//     country: "India",
//   },
//   {
//     language: "Telgu",
//     state: "India",
//   },
//   {
//     language: "English",
//     state: "USA",
//   },
// ];
// for (const ob of arr) {
// //   ob.language = "Marathi";
//   console.log(ob);
// }

// let str = "ABC";
// for (const char of str) {
//   console.log(char);
// }

// let ob = {
//   language: "Tamil",
//   country: "India",
// };
// for (const p of ob) {
//   console.log(p); //It is not iterable
// }

// let data = new Set([1, 2, 2, 3, 3]);
// for (const el of data) {
//   console.log(el);
// }

let data = new Map([
  ["id", 101],
  ["name", "Snehal"],
]);
for (const pair of data) {
  console.log(pair);
}
