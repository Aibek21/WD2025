var arr = [4, 5, 10, 6, 7];

// console.log(arr.sort(function (a, b) {
//     if (a > b)
//         return 1;
//     if (a < b)
//         return -1;
//     return 0;
// }));

// console.log(arr.find(function (number) {
//     return number > 5;
// }));
//
//
// var newArr = arr.map((num, index) => num * index); // Arrow function
//
// console.log(arr);
// console.log(newArr);

// console.log(arr);
// console.log(arr.slice(1, 4));


var newArr = arr.splice(1, 3, 40, 50, 60, 70, 100);

console.log(arr);
console.log(newArr);
