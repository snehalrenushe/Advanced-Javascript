function BankAccount(number, name) {
  this.number = number;
  this.name = name;
}

// console.log(BankAccount.length);
// console.log(BankAccount.prototype);

BankAccount.prototype.balance = 0;
BankAccount.prototype.display = function () {
  console.log(this.number);
  console.log(this.name);
  console.log(this.balance);
};

let ob1 = new BankAccount(101, "Snehal");
ob1.display();

function onAdd(num1, num2) {
  if (new.target) {
    console.log("Function call not allowed with new keyword");
    return;
  }

  return num1 + num2;
}

let result = onAdd(5, 10);
console.log(result);
