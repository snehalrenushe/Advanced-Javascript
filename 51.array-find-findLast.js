//Array - find() & findLast()

let arr = [1, 2, 3, 4, 5];
// let arr = [1, 3, 5, 7, 9];

console.log(arr);

// let updatedArr = arr.find((ob) => ob % 2 === 0);
let updatedArr = arr.findLast((ob) => ob % 2 === 0);

console.log(updatedArr);
