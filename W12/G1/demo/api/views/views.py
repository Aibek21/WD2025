from rest_framework import generics, mixins, viewsets

from api.models import Product
from api.serializers import ProductSerializer2


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer2