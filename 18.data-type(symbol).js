//Symbol

// let n1 = Symbol();
// let n2 = Symbol();
// console.log(n1.description);
// console.log(n1 == n2);
// console.log(n1 === n2);

// console.log(typeof n1);

// let id = Symbol("id");
// let ob = {
//   [id]: 101,
//   name: "Snehal",
// };

// console.log(ob);
// console.log(JSON.stringify(ob));

function modify(ob) {
  let id = Symbol("id");
  ob[id] = "A101";
  return ob;
}

let ob = {
  name: "Snehal",
};

let id = Symbol("id");
ob[id] = 101;
ob = modify(ob);
//console.log(ob[id]); //101
console.log(ob);