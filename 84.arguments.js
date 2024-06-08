//argument function

// let display = function (log1, log2) {
//   arguments[0] = "Updated log1";

//   let arr = Array.from(arguments);
//   console.log(arr);
//   arr.forEach((ob) => {
//     console.log(ob);
//   });
// };

// display("log1", "log2", "log3", "log4");

// let display = function (log1 = "default log1", log2) {
//   arguments[0] = "Updated log1";

//   console.log(log1);
//   console.log(arguments[0]);
// };

// display("log1", "log2");

// let display = function (log1 = "default log1") {
//   console.log(log1); //default log1
//   console.log(arguments[0]); //undefined
// };

// display();

function createHtmlList() {
  let arr = Array.from(arguments);
  let listElements = arr.map((city) => `<li>${city}</li>`).join("");
  let listHtml = "<ul>" + listElements + "</ul>";

  document.getElementById("cities").innerHTML = listHtml;
  console.log(listHtml);
}

createHtmlList("Sangli", "Mumbai", "Pune");
