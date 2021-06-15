"use strict";

/*const arr = [1, 2, 3, 4, 5];

arr.pop();
arr.push(44);
console.log(arr);

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`)

});

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr) {
    console.log(value);
}*/

const str = prompt("", "");
const products = str.split(', ');
products.sort();
console.log(products.join('; '));