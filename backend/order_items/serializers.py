from rest_framework import serializers
from .models import OrderItem

class OrderItemSerializer(serializers.Serializer):
    class Meta:
        model = OrderItem
        fields = ['id','order','product', 'quantity','design_details']