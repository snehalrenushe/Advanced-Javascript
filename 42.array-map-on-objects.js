//Array - map() on object

let arr = [
  {
    id: 101,
    name: "Snehal",
  },
  {
    id: 102,
    name: "Sheetal",
  },
  {
    id: 103,
    name: "Sarvesh",
  },
];

console.log(arr);

let updateArr = arr.map((ob) => {
  return {
    ...ob,
    code: 1,
  };
});

console.log(updateArr);

let namesArray = updateArr.map((ob) => {
  return ob.name;
});

console.log(namesArray);
