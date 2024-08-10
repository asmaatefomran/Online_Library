from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class Registerate(models.Model):

  USER_CHOICES = [
        ('option1', 'User'),
        ('option2', 'Admin')
    ]
  
  ftname = models.CharField (max_length=50)
  ltname = models.CharField (max_length=50)
  username = models.CharField (max_length=50,unique=True)
  email = models.EmailField(unique=True)
  password = models.CharField(max_length=20)
  cpassword = models.CharField(max_length=20)
  choices = models.CharField(max_length=10, choices=USER_CHOICES)

  def __str__(self):
    return self.username

