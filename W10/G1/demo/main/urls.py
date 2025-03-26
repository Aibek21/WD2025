from django.contrib import admin
from django.urls import path
from main import views

urlpatterns = [
    path('index/', views.index),
    path('home/', views.home),
    path('time_delta/<str:hours>/', views.time_delta),
    path('sample_json/', views.sample_json),
    path('products/', views.product_list),
    path('products/<int:id>/', views.product_detail),
]
