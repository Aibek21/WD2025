from django.http import JsonResponse
from django.shortcuts import render
from api.models import Product


def product_list(request):
    products = Product.objects.all()
    result = []
    for product in products:
        result.append(product.to_json())
    return JsonResponse(result, safe=False)


def product_detail(request, id):
    product = Product.objects.filter(id=id).first()
    if product:
        return JsonResponse(product.to_json())
    return JsonResponse({'error': 'Product not found'})
