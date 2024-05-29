// String method

let str = "              Hello Snehal     ";
let result = str.trim();
console.log(result);

let str1 = "Hello Snehal";
let result1 = str1.charAt(4);
console.log(result1);

let str2 = "Hello   Snehal";
let result2 = str2.split(" ", 2);
console.log(result2);

let str3 = "Hello Snehal";
let result3 = str3.toUpperCase();
console.log(result3);

let str4 = "Hello Snehal";
let result4 = str4.concat(" Good", " Morning");
console.log(result4);

let str5 = "Hello Snehal";
// let result5 = str5.replace("l", "L");  //HellO Snehal
let result5 = str5.replaceAll("l", "L"); //HeLLo SnehaL
console.log(result5);

let str6 = "Hello Snehal";
let result6 = str6.slice(0, 4); //Hell
console.log(result6);

let str7 = "Hello Snehal";
let result7 = str7.substring(6, 12); //Snehal
console.log(result7);
