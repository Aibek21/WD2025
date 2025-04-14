import json

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.response import Response

from api.models import Product
from api.serializers import ProductSerializer, ProductSerializer2


# CRUD - Create / Read / Update / Delete


@api_view(['get', 'post'])
def products_list(request):
    if request.method == 'GET':
        products = Product.objects.all()
        serializer = ProductSerializer2(products, many=True)

        return Response(serializer.data)
    elif request.method == 'POST':
        data = json.loads(request.body)
        serializer = ProductSerializer2(data=data)
        if serializer.is_valid():
            serializer.save()  # insert into request
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)


@api_view(['get', 'put', 'delete'])
def product_detail(request, product_id=None):
    try:
        # select * from products where id=<product_id>
        product = Product.objects.get(pk=product_id)
    except Product.DoesNotExist as e:
        return Response({'error': str(e)}, status=404)

    if request.method == 'GET':
        serializer = ProductSerializer2(product)
        return Response(serializer.data, status=200)
    elif request.method == 'PUT':
        new_data = json.loads(request.body)
        serializer = ProductSerializer2(instance=product,
                                        data=new_data)
        if serializer.is_valid():
            serializer.save()  # update request
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

    elif request.method == 'DELETE':
        # SQL: delete request
        product.delete()
        return Response({'message': 'Product deleted'})
