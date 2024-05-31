//Array - Sort on objects

let arr = [
  {
    id: 103,
    name: "Sarvesh",
    address: {
      city: "Sangli",
    },
  },
  {
    id: 101,
    name: "Sheetal",
    address: {
      city: "Pune",
    },
  },
  {
    id: 104,
    name: "Anushka",
    address: {
      city: "Delhi",
    },
  },
  {
    id: 102,
    name: "Snehal",
    address: {
      city: "Mumbai",
    },
  },
];

// arr.sort((obj1, obj2) => obj1.id - obj2.id);

arr.sort((obj1, obj2) => {
  ele1 = obj1.name.toLocaleLowerCase();
  ele2 = obj2.name.toLocaleLowerCase();

  if (ele1 < ele2) {
    return -1;
  } else if (ele1 > ele2) {
    return 1;
  } else {
    return 0;
  }
});
console.log(arr);
