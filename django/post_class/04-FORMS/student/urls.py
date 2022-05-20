
from django.urls import path
from .views import index, student_page,base

urlpatterns = [
    path('', index, name='index'),
    path('student/', student_page, name="student_page"),
    path('base/', base, name="base"),
]