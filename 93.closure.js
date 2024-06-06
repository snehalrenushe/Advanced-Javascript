//Closure

// let count = 0; //global
// function increment() {
//   let count = 0; //local

//   function plus() {
//     count += 1;
//     return count;
//   }

//   console.log(plus());
//   console.log(plus());
//   console.log(plus());
// }

// increment();

let increment = (function () {
  let count = 0;

  return function plus() {
    count += 1;
    return count;
  }

})();

console.log(increment());
console.log(increment());
console.log(increment());
