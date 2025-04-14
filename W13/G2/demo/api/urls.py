from django.urls import path
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from api.views.views import ProductViewset

router = DefaultRouter()
router.register('products', ProductViewset, basename='products')
urlpatterns = router.urls

urlpatterns += [
    path('login/', TokenObtainPairView.as_view()),
    path('refresh/', TokenRefreshView.as_view())
    # path('products/', ProductListView.as_view()),
    # path('products/<int:pk>/', ProductDetailView.as_view()),
]
