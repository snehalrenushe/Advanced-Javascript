//Array - Object sort using rest api data

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((res) => {
    let products = res.products;
    console.log(products);

    let sortData = [...products].sort((ob1, ob2) => {
      title1 = ob1.title.toLowerCase();
      title2 = ob2.title.toLowerCase();

      if (title1 < title2) {
        return -1;
      } else if (title1 > title2) {
        return 1;
      } else {
        return 0;
      }
    });

    console.log(sortData);
  });
