from distutils.command.upload import upload
from django.db import models

# Create your models here.

from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    portfolio = models.URLField(blank=True)
    profile_pic = models.ImageField(upload_to ="profile_pics", blank=True)


    username = models.EmailField('Email Address', unique=True)
    REQUIRED_FIELDS = []