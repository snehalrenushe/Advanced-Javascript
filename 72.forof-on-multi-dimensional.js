// forof on multi dimensional

let arr = [
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90],
];

for (const innerArr of arr) {
  for (const el of innerArr) {
    console.log(el);
  }
}
