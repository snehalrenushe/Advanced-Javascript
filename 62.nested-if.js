// Nested if

let data = {
  //   id: 101,
  productName: "Laptop",
};

if (data) {
  console.log("Data found");

  if (data.id && data.productName) {
    console.log("Data is correct");
  } else {
    if (!data.id) {
      console.log("Id is missing");
    }
    if (!data.productName) {
      console.log("Product name is missing");
    }
  }
} else {
  console.log("Data not found");
}
