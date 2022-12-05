from django.db import models
from authentication.models import User

class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    deliver_date = models.DateField()

# Create your models here.
