from rest_framework import serializers
from .models import CakeOption


class CakeOptionSerializer(serializers.Serializer):
    class Meta: 
        model = CakeOption
        fields = ['type','description']