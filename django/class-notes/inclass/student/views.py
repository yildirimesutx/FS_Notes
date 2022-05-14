from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def home(request):
    return HttpResponse("hello")

def henry(request):
    return HttpResponse("hello world my name is mesut")    