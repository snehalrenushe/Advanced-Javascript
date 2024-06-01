//Array - indexOf() and lastIndexOf()

// let arr = ["A", "S", "B", "D", "B", "E"];

// console.log(arr.indexOf("B", 3));
// console.log(arr.lastIndexOf("b", 3));

let cities = ["Pune", "Mumbai", "Hyd"];
let newCity = "Delhi";

if (cities.indexOf(newCity) === -1) {
  //Not present already
  cities.push(newCity);
}

console.log(cities);
