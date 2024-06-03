//for loop on multi dimensional array

let arr = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90],
];

for (let i = 0; i <= arr.length; i++) {
//   const result = arr[i];
  for (let j = 0; j < arr.length; j++) {
    console.log(arr[i][j]);
  }
//   console.log(result);
}
