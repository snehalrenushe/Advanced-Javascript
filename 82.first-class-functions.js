//first class

// let display = function () {
//   return "Inside display()"
// };

// // display()
// let ob = {
//   id: 101,
//   name: "Snehal",
//   fun: display(),
// };
// console.log(ob);

function getFun(operation) {
  if (operation === "ADD") {
    return function (num1, num2) {
      return num1 + num2;
    };
  }
  if (operation === "SUB") {
    return function (num1, num2) {
      return num1 - num2;
    };
  }
}

function calculate(fun, num1, num2) {
  return fun(num1, num2);
}

let addFun = getFun("ADD");
let subFun = getFun("SUB");

let result1 = calculate(addFun, 1, 5);
console.log(result1);

let result2 = calculate(subFun, 4, 5);
console.log(result2);
