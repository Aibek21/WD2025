import json

from django.http import JsonResponse, Http404
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

from api.models import Product
from api.serializers import ProductSerializer, ProductSerializer2


class ProductListView(APIView):

    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer2(products, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = ProductSerializer2(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class ProductDetailView(APIView):
    def get_object(self, id):
        try:
            # select * from products where id=<product_id>
            return Product.objects.get(pk=id)
        except Product.DoesNotExist as e:
            raise Http404

    def get(self, request, product_id):
        product = self.get_object(product_id)
        return Response(ProductSerializer2(product).data)

    def put(self, request, product_id):
        product = self.get_object(product_id)
        serializer = ProductSerializer2(instance=product, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    def delete(self, request, product_id):
        product = self.get_object(product_id)
        product.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
