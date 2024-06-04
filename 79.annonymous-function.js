//annonymous function

// function testFun1() {
//   console.log("Test fun 1 called");
// }
// testFun1();

// let testFun = function () {
//   console.log("Test fun 2 called");
// };
// let testFun2 = testFun;
// testFun();
// testFun2();

// let count = 0;
// setInterval(function () {
// //   document.getElementById("time").innerHTML = count;
//   document.getElementById("time").innerHTML = new Date();
// //   console.log(count);
//   count += 1;
// }, 1000);

function getFun(operation) {
  if (operation === "ADD") {
    return function (num1, num2) {
      console.log(num1 + num2);
    };
  } else if (operation === "SUB") {
    return function (num1, num2) {
      console.log(num1 - num2);
    };
  }
}

let addFun = getFun("ADD");
addFun(10, 20);

let subFun = getFun("SUB");
subFun(40, 50);
