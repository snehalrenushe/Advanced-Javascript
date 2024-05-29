// data-type - object

// let s = Symbol("uni")

// let ob = {
//     id: 101,
//     name: "Snehal",
//     [s]: 12434343
// }

// console.log(ob.id);
// console.log(ob["id"]);
// console.log(ob[s]);

// let table2 = {
//   1: 2,
//   2: 4,
//   3: 6,
//   10: 20
// };

// console.log(table2[10]);

// let a = new Number(101);
// console.log(typeof a);

let acc1 = {
  id: 101,
  name: "Snehal",
  address: {
    city: "Sangli",
    country: "India",
  },
  credit: function () {
    console.log("credit() called!!");
  },
};

acc1.credit();
console.log(acc1.address.country);

const ob3 = {
  id: 101,
  name: "Snehal",
};

ob3.name = "Sheetal";
console.log(ob3);
