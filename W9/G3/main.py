print("Hello " + "world")
a = 'Hello world'

print(a[0])
print(a[2:10:2])

print(a.lower())
print(a.upper())

print("{0}: {1}".format("foo", "bar"))
print("{a}: {b}".format(a="foo", b="bar"))

print(len(a))

a = []
a = ()

b = {
    'id': '20Bd123123',
    'name': 'John',
    'advisor': {
        'name': 'Bob'
    }
}

print(b['id'])
print(b.get('id1', 'No id'))

for key in b.keys():
    print(key)

for value in b.values():
    print(value)

for key, value in b.items():
    print(key, value)

a = [1, 5, 7, 8]

for index, item in enumerate(a):
    print(index, item)


def summ_product(a, b=1):
    return a + b, a * b


print(summ_product(5, 10))

a1, a2 = summ_product(3, 6)


