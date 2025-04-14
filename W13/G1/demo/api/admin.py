from django.contrib import admin
from django.contrib.admin import ModelAdmin

from api.models import Product

# option 1
# admin.site.register(Product)


@admin.register(Product)
class ProductAdmin(ModelAdmin):
    list_display = ('id', 'name', 'price')
    list_filter = ('price',)
    search_fields = ('name','price')