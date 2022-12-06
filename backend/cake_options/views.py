from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import CakeOption
from .serializers import CakeOptionSerializer
# Create your views here.


@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_options(request):
    options = CakeOption.objects.all()
    serializer = CakeOptionSerializer(options, many = True)
    return Response(serializer.data, status=status.HTTP_200_OK)

# Create your views here.
