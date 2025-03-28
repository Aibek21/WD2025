// if else
var a = 4;
var b = 5;
if (a < b) {
    console.log('A < B');
} else {
    console.log('A >= B');
}


// Loop 1
var arr = [5, 6, 1, 10]
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log(i);

// Loop 2
for (const num of arr) {
    console.log(num);
}

// Loop 3
arr.forEach(function (num, index) { // anonymous function
    console.log(num);
});

function print(num) {
    console.log(num);
}

arr.forEach(print);