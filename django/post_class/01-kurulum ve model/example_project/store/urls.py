from django.urls import path
from .views import index
from .views import image

urlpatterns = [
    path('', index, name="index"),
    path('about/', image, name="image"),

]