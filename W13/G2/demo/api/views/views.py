from django.http import Http404
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework import mixins, generics, viewsets

from api.models import Product
from api.serializers import ProductSerializer2


# CRUD

class ProductViewset(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer2
    # permission_classes = (IsAuthenticated,)

    def get_permissions(self):
        if self.action == 'list':
            return (IsAuthenticated(),)
        return (AllowAny(),)
