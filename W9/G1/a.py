# this is comment

# multi
# line
# comment


# a = None
# print(a)
#
#
# b = 'Hello world'
# print(b)
#
# b = "Hello world"
# print(b)
#
#
# b = u"Hëllö, wörld!"
# print(b)
#
#
# print('Hello '+' world')


# b = 'Hello world'
#
# # print(b[0])
# print(b[-1])
# print(b[:3])
# print(b[1:8:2])
#
#
# print(b.upper())
# print(b.lower())
#
# print("{0}: {1}".format("foo", "bar"))
# print("{a}: {b}".format(a="foo", b="bar"))
#
# print(len(b))
#
#
# a = []
#
# print(type(a))

a = {
    'id': '20BD123123',
    'name': 'John',
    'advisor': {
        'name': 'Bob'
    }
}

print(a['advisor'])
print(a.get('advisor'))

# for key, value in a.items():
#     print(key)
#     print(value)


print(len(a))


# if a:
#     pass
# elif a:
#     pass
# else:


def sum_product(a, b=1):
    return (a + b, a*b)

print(sum_product(5, 4))

a, b = sum_product(5, 4)

print(a)
print(b)


