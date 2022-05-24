from django.shortcuts import render

# Create your views here.

from .models import Student

from django.views.generic.base import TemplateView
from django.views.generic.list import ListView
from django.views.generic.detail import DetailView



class HomeView(TemplateView):
   template_name = "student/home.html"

class StudentListView(ListView):
    model = Student
    context_object_name = 'students'

class StudentDetailView(DetailView):
    model = Student
    pk_url_kwarg = 'id'
