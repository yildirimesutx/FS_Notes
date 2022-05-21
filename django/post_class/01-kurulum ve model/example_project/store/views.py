from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def index(request):
    return HttpResponse("<h1>First Django Projet</h1>")

def image(request):
    return HttpResponse('<img src="https://seeklogo.com/images/D/django-logo-182231C1BB-seeklogo.com.png" alt="logo">')    

