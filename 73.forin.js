//for...in

// let ob = {
//   language: "Marathi",
//   state: "Maharashtra",
// };
// for (const key in ob) {
//     console.log(key);
// }

// let arr = [10, 20, 30];
// for (const key in arr) {
//   console.log(key);
// }

// let str = "SNEHAL";
// for (const key in str) {
//   console.log(key);
// }

let ob = {
  language: "Marathi",
  state: "Maharashtra",
  test: "XYZ",
};
for (const key in ob) {
  console.log(key);
  delete ob.test;
}
