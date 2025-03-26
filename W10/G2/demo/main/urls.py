from django.urls import path, re_path
from main.views import index, home, time_delta, sample_json, product_list, product_detail

urlpatterns = [
    path('index/', index),
    path('home/', home),
    path('time_delta/<int:hours>/', time_delta),
    path('sample_json/', sample_json),
    path('products/', product_list),
    path('products/<int:id>/', product_detail)
]
