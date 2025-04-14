from rest_framework import viewsets
from rest_framework.decorators import action

from api.models import Product
from api.serializers import ProductSerializer2


# CRUD
class ProductViewset(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer2
