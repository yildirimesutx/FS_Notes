from django.urls import path
from .views import HomeView, StudentListView, StudentDetailView, StudentCreateView,StudentUpdateView, StudentDeleteView
# from django.views.generic.base import TemplateView

urlpatterns = [
    
    #  path('', TemplateView.as_view(template_name= "student/home.html"), name="home")
    path('', HomeView.as_view(), name="home"),
    path('student/', StudentListView.as_view(), name="list"),
    path('detail/<int:id>', StudentDetailView.as_view(), name="detail"),
    path('student_add/', StudentCreateView.as_view(), name='add'),
    path('update/<int:pk>', StudentUpdateView.as_view(), name='update'),
    path('delete/<int:pk>', StudentDeleteView.as_view(), name='delete'),
    
    
]
