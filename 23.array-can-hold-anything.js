let arr = [
  101,
  true,
  "ABC",
  function () {
    console.log("Test fun");
  },
  1.2,
  {
    id: 101,
  },
];
console.log(arr[5]);
arr[3]();
