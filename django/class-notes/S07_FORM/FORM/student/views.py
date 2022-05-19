from email import message
from django.shortcuts import redirect, render
from .forms import StudentForm
from django.contrib import messages

def index(request):
    return render(request, 'student/index.html')

def student_page(request):
    # print(request.POST)
    form = StudentForm(request.POST or None)


    if form.is_valid():
        student = form.save()
        if 'profile_pic' in request.FILES:
            # student.profile_pic = request.FILES["profile_pic"] aynısı get olanı
            student.profile_pic = request.FILES.get("profile_pic")
            student.save()
        # return redirect('index')
        return redirect('student')
        # print(form.cleaned_data.get('first_name'))
        messages.success(request,"Student saved successfully")
    context = {
        'form':form
    }
    return render(request,'student/student.html', context)