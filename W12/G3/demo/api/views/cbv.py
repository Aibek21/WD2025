from django.http import Http404
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView

from api.models import Product
from api.serializers import ProductSerializer2


# CRUD
class ProductListView(APIView):

    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer2(products, many=True)

        return Response(serializer.data)

    def post(self, request):
        serializer = ProductSerializer2(data=request.data)
        if serializer.is_valid():
            serializer.save()  # insert into request
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)


class ProductDetailView(APIView):

    def get_object(self, product_id):
        try:
            # select * from products where id=<product_id>
            return Product.objects.get(pk=product_id)
        except Product.DoesNotExist as e:
            raise Http404

    def get(self, request, product_id):
        product = self.get_object(product_id)
        serializer = ProductSerializer2(product)
        return Response(serializer.data, status=200)

    def put(self, request, product_id):
        product = self.get_object(product_id)
        serializer = ProductSerializer2(instance=product, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=200)

    def delete(self, request, product_id):
        product = self.get_object(product_id)
        product.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
