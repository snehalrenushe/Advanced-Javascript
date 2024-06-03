//If else

// let n = 5;
// let result = n % 2 === 0;

// if (result) {
//   console.log("Even no.");
// } else {
//   console.log("Odd no.");
// }

// let arr = [1, 2, 3];

// let index = arr.indexOf(2);
// console.log(index);

// if (index === -1) {
//   console.log("Not found");
// } else {
//   console.log("Found");
// }

let arr = [
  {
    id: 101,
    productName: "Macbook",
  },
  {
    id: 102,
    productName: "iPhone",
  },
  {
    id: 103,
    productName: "iPad",
  },
];

let result = arr.find((ob) => ob.id === 12);

if (result) {
  console.log(result);
} else {
  console.log("Product not found");
}

let data = {
//   id: 2,
  productName: "Laptop",
};

if (data && data.id && data.productName) {
  console.log("Data received");
} else {
  console.log("Not data found");
}
