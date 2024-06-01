//Array - map() advance options

let arr = [1, 2, 3, 4, 5];

let updatedArr = arr.map((ob, index, oArray) => {
  //   console.log("ob : " + ob + "\nindex : " + index + "\nArray : " + Array);

  //   if (index % 2 === 0) {
  //     return ob * ob;
  //   } else {
  //     return 0;
  //   }

  if (index % 2 === 0) {
    let result = ob * ob;
    if (oArray.includes(result)) {
      return 0;
    } else {
      return result;
    }
  } else {
    return 0;
  }
});

console.log(arr);
console.log(updatedArr);
