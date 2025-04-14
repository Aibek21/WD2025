from django.http import Http404
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework import mixins, generics

from api.models import Product
from api.serializers import ProductSerializer2


# CRUD

class ProductListView(generics.ListCreateAPIView,
                      generics.GenericAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer2


class ProductDetailView(generics.RetrieveUpdateDestroyAPIView,
                        generics.GenericAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer2
