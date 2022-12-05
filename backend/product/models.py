from django.db import models

# Create your models here.
class Product(models.Model):
    type = models.CharField(max_length=32)
    name = models.CharField(max_length=255)
    price = models.IntegerField()
    work_time = models.FloatField()
    serves = models.CharField()
    description = models.TextField()
