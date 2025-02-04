var arr = [5, 1, 6, 2, 10];

// console.log(arr.sort());


// console.log(arr.find((number) => number > 5));


// var newArr = arr.map((num, index) => num * index); // Arrow function
//
// console.log(newArr);


// console.log(arr.slice(3, 5));
// console.log(arr);


var newArr = arr.splice(3, 3, 20, 30, 40);
console.log(newArr);
console.log(arr);
