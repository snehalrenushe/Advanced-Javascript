// The call() method

// function onAdd(num1, num2) {
//   console.log(num1 + num2);
// }

// // onAdd(1, 3);
// onAdd.call(this, 1, 3);

// function display() {
//   console.log(this);
//   console.log("Id: " + this.id);
//   console.log("Name: " + this.name);
// }

// let ob1 = {
//   id: 101,
//   name: "Snehal",
// };

// display.call(ob1);

// let arr = [1, 2, 3, 4, 5];
// // let updatedArr = arr.filter((ob) => ob % 2);
// let updatedArr = Array.prototype.filter.call(arr, (ob) => ob % 2);
// console.log(updatedArr);

// function BankAccount(number, name) {
//   this.number = number;
//   this.name = name;
//   console.log(this);
// }

// let acc1 = new BankAccount(101, "Snehal");

function BankAccount(number, name) {
  this.number = number;
  this.name = name;
}

function StudentBankAccount(number, name, balance) {
  BankAccount.call(this, number, name);
  this.balance = balance;
}

let acc1 = new StudentBankAccount(101, "Snehal", 1000);
console.log(acc1);
