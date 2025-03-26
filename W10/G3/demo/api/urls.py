from django.urls import path
from api.views import product_list, product_detail

urlpatterns = [
    path('products/', product_list),
    path('products/<int:id>/', product_detail)
]
