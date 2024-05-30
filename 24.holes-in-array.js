//Holes in array

"use strict";

let arr = [10, 20, 30];
Object.defineProperty(arr, "length", {
  writable: false,
}); 
arr[5] = 60;
console.log(arr);
