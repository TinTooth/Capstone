from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_all),
    path('manage/', views.create),
    path('manage/<int:pk>/', views.manage),
]