//array - advance filter() example

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let updated = arr.filter((el, index, orignialArray) => {
  console.log(index + " : " + el + " : " + orignialArray);

  if (index === 0 || index === arr.length - 1) {
    return true;
  } else if (el % 2 === 0) {
    return true;
  }

  return false;
});
console.log(updated);
