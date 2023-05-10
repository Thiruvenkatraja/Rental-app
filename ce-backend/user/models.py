from django.db import models
from django.contrib.auth.models import AbstractUser,PermissionsMixin
# Create your models here.

class User(AbstractUser):
    User_Id = models.AutoField(primary_key=True)
    Role = models.CharField(max_length=100)
    Created_By = models.CharField(max_length=100)
    Updated_BY = models.CharField(max_length=100)
    Created_At = models.DateTimeField(auto_now_add=True)
    Updated_At = models.DateTimeField(auto_now=True)

    @property
    def id(self):
        return self.User_Id
    class Meta:
        db_table = 'User'
