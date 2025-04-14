from rest_framework import generics, mixins
from rest_framework.permissions import IsAuthenticated, AllowAny

from api.models import Product
from api.serializers import ProductSerializer2


class ProductListView(generics.ListCreateAPIView,
                      generics.GenericAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer2
    permission_classes = (IsAuthenticated,)


class ProductDetailView(generics.RetrieveUpdateDestroyAPIView,
                        generics.GenericAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer2
    permission_classes = (IsAuthenticated, )
