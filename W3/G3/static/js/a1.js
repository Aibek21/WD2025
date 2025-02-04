var a = 4;
console.log(typeof (a));

a = 'Hello';
console.log(typeof (a));

console.log(typeof (true));

console.log((2 === '2'));

console.log(typeof (null));

var b;
console.log(typeof (b));


var age = 20;
var dict = {
    'id': '20BD123123',
    'name': 'John',
    department: 'SITE',
    age
};

console.log(dict);

var arr = [4, 5, 6, 10, -1];
arr.push(20);
console.log(arr);
arr.pop()
console.log(arr);
console.log(typeof (arr));


function myFunc() {
    return 0;
}

console.log(typeof (myFunc));