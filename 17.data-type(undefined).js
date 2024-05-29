//data type - undefined
//undefined vs null

console.log(typeof undefined);
console.log(typeof null);

console.log(!!undefined);
console.log(!!null);

let n = undefined;
console.log(1 + n);

let n2 = null;
console.log(1 + 0);

function display(p) {
  if (typeof p === "undefined") {
    console.log("Developer forgot to give input");
  }
  if (p === null) {
    console.log("Developer intentionallay give null value");
  }
}

let a = undefined;
display(a);
