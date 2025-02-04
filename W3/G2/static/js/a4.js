var obj = {
    'id': '20BD123123',
    'name': 'John',
    'age': 20,
    'department': {
        'name': 'SITE',
        'building': 'KBTU'
    }
};

console.log(obj);

var jsonString = JSON.stringify(obj);
console.log(jsonString);
console.log(typeof(jsonString));

console.log(JSON.parse(jsonString));
