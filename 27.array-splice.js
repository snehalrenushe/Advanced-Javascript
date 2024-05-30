//splice() - splice used for deletion of elements which are at starting position or mid position.

let arr = [101, 102, 103, 104, 105];
console.log(arr);
// arr.splice(2, 2); //4 elements from index 2 (including index 2)
// console.log(arr);

arr.splice(2,2,111,222)
console.log(arr);