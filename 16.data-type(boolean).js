//data type - boolean

let n = 15;
if (n < 10) {
  console.log("Less than 10");
} else {
  console.log("More than 10");
}

console.log(!!true); //true
console.log(!!101); //true
console.log(!!"Snehal"); //true
console.log(!!-101); //true
console.log(!!{ id: 101 }); //true
console.log(!!{}); //true
console.log(!!"false"); //true

console.log(!!0); //false
console.log(!!null); //false
console.log(!!undefined); //false
console.log(!!Nan); //error
