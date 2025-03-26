from datetime import datetime, timedelta

from django.http import HttpResponse, JsonResponse
from django.shortcuts import render


def index(request):
    return HttpResponse('Hello world')


def home(request):
    return HttpResponse('<h1>Hello world</h1>')


def time_delta(request, hours):
    result = datetime.now() + timedelta(hours=hours)
    return HttpResponse(result)


def sample_json(request):
    data = {
        "id": "20BD20202",
        "name": "John",
        "department": "SITE"
    }

    return JsonResponse(data)


products = [
    {
        "id": i,
        "name": f"Product {i}",
        "price": i * 1000
    }
    for i in range(1, 10)
]


def product_list(request):
    return JsonResponse(products, safe=False)


def product_detail(request, id):
    for product in products:
        if product["id"] == id:
            return JsonResponse(product)
    return JsonResponse({'error': 'Product not found'})
