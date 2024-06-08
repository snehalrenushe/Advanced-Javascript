//this object

// console.log(this);
// console.log(globalThis);
// console.log(window);

// function display() {
//   console.log(this);
// }
// display();

// let ob = {
//   name: "Snehal",
//   display: display,
// };

// function display() {
//   console.log(this);
// }

// ob.display();

// let display = () => {
//   console.log(this);
// };

// let ob = {
//   name: "Snehal",
//   display: display,
// };
// display();

function show() {
  console.log(this);
}

show();
