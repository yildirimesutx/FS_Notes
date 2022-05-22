from django.shortcuts import redirect, render
from .forms import StudentForm



def student_page(request):
    # print(request.POST)
    form = StudentForm(request.POST or None)

    if form.is_valid():
        form.save()
        return redirect("student")
    context = {
        "form" :form
    }    

    return render(request, 'student/student.html', context)

  