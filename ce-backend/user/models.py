from django.db import models
from django.utils import timezone
from django.contrib.auth.models import AbstractUser
# Create your models here.

class User(AbstractUser):
    User_Id = models.AutoField(primary_key=True)
    Role = models.CharField(max_length=100)
    Created_By = models.CharField(max_length=100)
    Updated_BY = models.CharField(max_length=100)
    Created_At = models.DateTimeField(auto_now_add=True)
    Updated_At = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'User'