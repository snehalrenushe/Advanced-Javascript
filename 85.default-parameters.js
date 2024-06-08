//Default parameters

function onAdd(num1, num2) {
  //console.log(num1); //1
  //console.log(num2); //undefined

  num1 = num1 ? num1 : 0;
  num2 = num2 ? num2 : 0;
  let result = num1 + num2;
  console.log(result);
}

onAdd(1);
