var dict = {
    'id': '20BD123123',
    'name': 'John',
    department: 'SITE',
    age: 20
};
console.log(dict);

var jsonString = JSON.stringify(dict);

console.log(jsonString);

console.log(JSON.parse(jsonString));