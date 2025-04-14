from django.urls import path
from rest_framework.routers import DefaultRouter

# from api.views.views import ProductViewSet

from api.views.generics_2 import ProductListView, ProductDetailView
# router = DefaultRouter()
# router.register('products', ProductViewSet, basename='products')
#
# urlpatterns = router.urls
urlpatterns = [
    # path('test-json/', test_json),
    path('products/', ProductListView.as_view()),
    path('products/<int:pk>/', ProductDetailView.as_view()),
]
