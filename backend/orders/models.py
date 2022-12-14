from django.db import models
from authentication.models import User

# Create your models here.
class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    deliver_date = models.DateField()
    status = models.CharField(max_length=32)
    total_price = models.IntegerField()
    total_work_time = models.IntegerField()
    notes = models.TextField()
    adjusted_price = models.IntegerField(default = 0)
