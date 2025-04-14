from rest_framework import generics, mixins

from api.models import Product
from api.serializers import ProductSerializer2


class ProductListView(mixins.CreateModelMixin,
                      mixins.ListModelMixin,
                      generics.GenericAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer2

    def get(self, request):
        return self.list(request)

    def post(self, request):
        return self.create(request)


class ProductDetailView(mixins.RetrieveModelMixin,
                    mixins.DestroyModelMixin,
                    mixins.UpdateModelMixin,
                    generics.GenericAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer2

    def get(self, request, pk):
        return self.retrieve(request, pk=pk)

    def put(self, request, pk):
        return self.update(request, pk=pk)

    def delete(self, request, pk):
        return self.destroy(request, pk=pk)
