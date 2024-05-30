"use strict";

let arr = [101, 102, 103];
console.log(arr.length);

let arrV2 = new Array(1, 2, 3);
console.log(arrV2.length);

let arrV3 = new Array(4);
console.log(arrV3);
console.log(arrV3.length);

let arrV4 = [];
Object.defineProperty(arrV4, "length", { writable: false });
arrV4.length = 5;
console.log(arrV4);
console.log(arrV4.length);
