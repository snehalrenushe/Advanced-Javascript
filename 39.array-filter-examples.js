//Array - filter() examples

// let arr = [1, 2, 3, null, undefined, ,];
// console.log(arr.length);
// let updated = arr.filter((el) => (el || el === 0 ? true : false));
// console.log(updated);

let arr = [{ id: 1 }, {}, { id: 2 }, { id: 3 }, { id: null }];

let updated = arr.filter((ob) => (ob.id ? true : false));
console.log(updated);
