//Data type - Number

// let n = 0xa;

let n = 15;
console.log(n.toString(10)); //Decimal - 15
console.log(n.toString(2)); //Binary - 1111
console.log(n.toString(24)); //f

let n2 = 1;
let n3 = new Number(1);
let n4 = new Number(1);

console.log(typeof n2);
console.log(typeof n3);

console.log(n2 == n3); //true
console.log(n2 === n3); //false

console.log(n3 === n4); //false - because in background js have unique object

let n5 = 1;
let n6 = "ABC";

let result2 = n5 / n6; //Nan - Not a number
//let result2 = n5 - n6; //-1 - trying to figure out that there is any number.
console.log(result2);
console.log(isNaN(result2));

let no1 = 0;
let no2 = 0;

console.log(no1 / no2);

function next(num) {
  if (num != Infinity) {
    console.log(num);
    return next(num * 2);
  } else {
    console.log(num);
    return num;
  }
}

console.log(next(1));
