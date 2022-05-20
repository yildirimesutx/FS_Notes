from django.db import models

# Create your models here.


class Customer(models.Model):   #buradaki models.Model sabit 
    name = models.CharField(max_length=30) #buradaki models sabit
    surname = models.CharField(max_length=30)


class Product(models.Model):   #buradaki models.Model sabit 
    name = models.CharField(max_length=30) #buradaki models sabit
    stok_number = models.IntegerField()    