from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=500)
    price = models.IntegerField()

    class Meta:
        verbose_name = 'Продукт'
        verbose_name_plural = 'Продукты'
        ordering = ['name']

    def __str__(self):
        return f"{self.id}, {self.name}, {self.price}"

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price
        }
