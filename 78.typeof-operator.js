//typeof operator

a = 10;

console.log(typeof "SNEHAL");
console.log(typeof 123);
console.log(typeof true);
console.log(typeof 123456789n);
console.log(typeof Symbol("ABC"));
console.log(typeof NaN);
console.log(typeof Infinity);

let ob = {
  id: 101,
};

console.log(typeof ob);

let n = new Number(123);
console.log(n);
console.log(n instanceof Number);
let str = new Number("ABC");
console.log(typeof str);
