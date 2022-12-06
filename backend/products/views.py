from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Product
from .serializers import ProductSerializer
# Create your views here.


@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_products(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many = True)
    return Response(serializer.data, status=status.HTTP_200_OK)