from django.db import models

# Create your models here.
class CakeOption(models.Model):
    type = models.CharField(max_length=32)
    description = models.CharField(max_length=255)
