from django.http import JsonResponse

from api.models import Product


def products(request):
    products = Product.objects.all()
    result = []
    for product in products:
        result.append(product.to_json())
    return JsonResponse(result, safe=False)
