from django.shortcuts import render
from .forms import StudentForm

def index(request):
    return render(request,'student/index.html')

def student_page(request):
    print(request.POST)
    form = StudentForm()
    context = {
        'form': form
    }
    return render(request, 'student/student.html', context)

def base(request):
    return render(request, 'student/base.html')    