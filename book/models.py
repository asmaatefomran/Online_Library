from django.db import models

# Create your models here.

class Book(models.Model):

     
     x=[
          ('Novel','Novel'),
          ('Comic','Comic'),
          ('Romantic','Romantic'),
          ('fictional','fictional'),
          ('Cooking','Cooking'),
          ('Finance','Finance'),
          ('Sport','Sport')
          
     ]

     name = models.CharField(max_length=30,verbose_name="Book_Name")
     author = models.CharField(max_length=30,verbose_name="Author")
     category = models.CharField(max_length=30,choices=x)
     description = models.TextField()
    

