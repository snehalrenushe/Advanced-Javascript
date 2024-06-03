//switch - example

function isEven(n) {
  return n % 2 === 0;
}
function isOdd(n) {
  return n % 2 === 1;
}

let n = -30.43;

switch (true) {
  case isEven(n):
    console.log("Even number");
    break;
  case isOdd(n):
    console.log("Odd number");
    break;
  default:
    console.log("Invalid number");
    break;
}
