//Impure functions - even if i called these fun many times it will not give me same output

let count = 0;
function getCount() {
  count += 1;
  return count;
}

console.log(getCount());
console.log(getCount());
console.log(getCount());
