//Data type - bigInt

// let n1 = 1n;
// let n2 = BigInt(1);

// console.log(typeof n1);
// console.log(typeof n2);

let n = Number.MAX_SAFE_INTEGER;
console.log(typeof n);
n = BigInt(n);
console.log(typeof n);
console.log(n);
console.log(n + 1n);
console.log(n + 2n);
console.log(n + 3n);
console.log(n + 4n);
console.log(n + 5n);
console.log(n + 6n);
console.log(n + 7n);

console.log(9007199254740991n === 9007199254740993n);
console.log(1 == 1n);

let n3 = 3n / 2n;
console.log(n3); //1

let bin = 0b100n;
let hex = 0xfffn;
