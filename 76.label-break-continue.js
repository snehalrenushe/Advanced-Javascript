//Javascript label

first: {
  //created label
  console.log(1);
  break first;
  console.log(2);
}

{
  console.log(3);
  console.log(4);
}

//Javascript break

let arr = [
  [10, null, 30],
  [40, 50, 60],
  [90, 80, 70],
];

parentLoop: for (const ob of arr) {
  childLoop: for (const el of ob) {
    if (el === null) {
      break parentLoop;
    }
    console.log(el);
  }
}

//Javascript continue

let arrV2 = [
    [10, null, 30],
    [40, 50, 60],
    [90, 80, 70],
  ];
  
  parentLoop: for (const ob of arr) {
    childLoop: for (const el of ob) {
      if (el === null) {
        continue parentLoop;
      }
      console.log(el);
    }
  }