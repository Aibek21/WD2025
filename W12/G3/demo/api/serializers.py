from rest_framework import serializers
from rest_framework.exceptions import ValidationError

from api.models import Product


class ProductSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()
    price = serializers.FloatField()
    description = serializers.CharField()


class ProductSerializer2(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'name', 'price', 'description')

    def validate(self, attrs):
        if len(attrs['name']) < 5:
            raise ValidationError({'error': 'Name is too short'})
        return attrs

    def create(self, validated_data):
        product = Product.objects.create(**validated_data)
        return product

    def update(self, instance, validated_data):
        pass
