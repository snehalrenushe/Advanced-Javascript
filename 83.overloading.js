//Overloading

//Js does not support overloading

function call(log1, log2) {
  console.log(log1);
  console.log(log2);
}

function call(log1) {
  console.log(log1);
}

call("Hello","Byee");
