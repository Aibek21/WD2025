a = None

a = 'Hello world'
print(a)
a = "Hello world"
print(a)

print('Hello ' + 'world')

print(a[0])
print(a[1:8:2])

print(a.upper())
print(a.lower())

print("{0}: {1}".format("foo", "bar"))
print("{a}: {b}".format(a="foo", b="bar"))

print(len(a))

a = []
a = ()

b = {
    'id': '20Bd123123123',
    'name': 'John',
    'advisor': {
        'name': 'Bob'
    }
}

for key in b.keys():
    print(key)

for value in b.values():
    print(value)

for key, value in b.items():
    print(key, value)

print(b['name'])
print(b.get('name'))

a = [1, 4, 6, 7, 8]

for index, item in enumerate(a):
    print(index, item)


def summ_product(a, b=1):
    return a + b, a * b


print(summ_product(5, 10))
