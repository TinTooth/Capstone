from rest_framework import serializers
from .models import Order

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['id','user','deliver_date','status', 'total_work_time','total_price','notes']

class OrderPutSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['user_id','deliver_date','status', 'total_work_time','total_price','notes']
            
    user_id = serializers.IntegerField(write_only = True)   