//Array with const declaration

// const no = 101;
// no = 33;
// console.log(no);

// const name;     //not allowed
// name = "Snehal";

const id = 101;
{
  const idV2 = 103;

  console.log(id);
}

const arr = [101, 102, 103];
arr.push(104);
console.log(arr);

const ob = {
  id: 101,
  name: "Snehal",
};

ob.isManager = false;

console.log(ob);

// const a = 10;
// let a = 20;
