from django.shortcuts import render
from django.urls import reverse_lazy

# Create your views here.

from .models import Student
from .forms import StudentForm

from django.views.generic.base import TemplateView
from django.views.generic.list import ListView
from django.views.generic.detail import DetailView
from django.views.generic.edit import CreateView
from django.views.generic.edit import UpdateView
from django.views.generic.edit import DeleteView

# template görüntüleme
class HomeView(TemplateView):
   template_name = "student/home.html"


# liste görüntüleme
class StudentListView(ListView):
    model = Student
    context_object_name = 'students'

# oluşturulan listenin detaylarını görme
class StudentDetailView(DetailView):
    model = Student
    pk_url_kwarg = 'id'  # default olarak urls de <int:pk> kullanılması gerekiyor, eğer pk yerine id kullanılması isteniyorsa bu satır yazılmasıgerekir.  

# create yeni veri oluşturma
class StudentCreateView(CreateView):
    model = Student
    form_class = StudentForm

    # Default is fscohort/student_form.html.
    template_name = "student/student_add.html" 

    # This field is to redirect:
    success_url = reverse_lazy("list")   

# update işlemi

class StudentUpdateView(UpdateView):
        model = Student
        form_class = StudentForm
        template_name = "student/student_update.html"
        success_url = reverse_lazy("list")
        # pk_url_kwarg = 'id'

class StudentDeleteView(DeleteView):
      model = Student
      template_name = "student/student_delete.html"
      success_url = reverse_lazy("list")
