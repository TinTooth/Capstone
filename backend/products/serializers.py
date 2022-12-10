from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'type','name','price','work_time','description']


class CustomerProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'type','name','price','description','pricebydozen']