let id1 = 101;
let id2 = 102;
let id3 = 103;

let ids = [101,102,103];
let idsV2 = {
    id: 101
}

console.log(ids);
console.log(idsV2);

console.log(typeof ids);
console.log(typeof idsV2);

console.log(Array.isArray(ids));
console.log(Array.isArray(idsV2));

console.log(ids instanceof Array);
console.log(idsV2 instanceof Array);

let arr = [101,102,103];

let arrV2 = {
    0: 101,
    1:102,
    2:103
}

let obj = {
    id: 101,
    name: "Snehal"
}

console.log(Object.keys(arr));
console.log(Object.keys(arrV2));