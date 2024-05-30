//shift-unshift - add/delete at starting

let arr = [101, 102, 103];
console.log(arr);

arr.shift(); //remove first element
console.log(arr);
arr.shift();
console.log(arr);

arr.unshift(104); //Add element at first
console.log(arr);
arr.unshift(105);
console.log(arr);

let arrV2 = [101, 102, 103];

let temp = arrV2.shift();
console.log(arrV2);
while (temp) {
  console.log("Removed item : " + temp);

  temp = arrV2.shift();
  console.log(temp);
}
