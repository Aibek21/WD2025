from django.urls import path
from rest_framework.routers import DefaultRouter

from api.views.views import ProductViewset

router = DefaultRouter()
router.register('products', ProductViewset, basename='products')
urlpatterns = router.urls

# urlpatterns = [
#     path('products/', ProductListView.as_view()),
#     path('products/<int:pk>/', ProductDetailView.as_view()),
# ]
