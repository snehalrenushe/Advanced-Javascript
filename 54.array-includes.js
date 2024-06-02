//Array - includes()

// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// let updatedArr = arr.includes("2");
// console.log(updatedArr);

let cities = [
  {
    city: "Mumbai",
    country: "India",
  },
  {
    city: "Pune",
    country: "India",
  },
];

// let result = cities.includes({
//   city: "Mumbai",
//   country: "India",
// });

let result = cities.find((ob) => ob.city === "Delhi" && ob.country == "India");
console.log(result ? true: false);
