//array - custom deep falt

let arr = [1, 2, [3, 4, [5, 6]]];

// [1,2,-1,3,4,-1,5,6]

function deepFlat(arr) {
  let tempArr = [];
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      //recurstion
      tempArr = tempArr.concat(-1, ...deepFlat(element));
    } else {
      tempArr.push(element);
    }
  });

  return tempArr;
}
console.log(arr.flat(Infinity));
console.log(deepFlat(arr));
// deepFlat(arr);
