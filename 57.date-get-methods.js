//Date = get() method

let today = new Date();

console.log(today);
console.log("Year : " + today.getFullYear());
console.log("Month : " + today.getMonth());
console.log("Date : " + today.getDate());
console.log("Hours : " + today.getHours());
console.log("Minutes : " + today.getMinutes());
console.log("Seconds : " + today.getSeconds());
console.log(today.getTime());


console.log("UTC Hours : " + today.getUTCHours());
console.log("UTC Minutes : " + today.getUTCMinutes());