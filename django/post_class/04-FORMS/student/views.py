from django.shortcuts import redirect, render
from .forms import StudentForm
from django.contrib import messages



def student_page(request):
    # print(request.POST)
    form = StudentForm(request.POST or None)

    if form.is_valid():
        student= form.save()

        if 'profile_pic' in request.FILES:
            student.profile_pic = request.FILES['profile_pic']
            student.save()

        messages.success(request, "Student saved successfully")
        return redirect("student")
    context = {
        "form" :form
    }    

    return render(request, 'student/student.html', context)

  