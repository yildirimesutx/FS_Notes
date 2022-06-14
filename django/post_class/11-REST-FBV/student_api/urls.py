
from django.urls import path
from .views import studentList, studentAdd, studentListCreate, studentUpdate, studentDel


urlpatterns = [
    
    path('students/', studentList),
    path('studentAdd', studentAdd),
    path('student', studentListCreate),
    path('studentup/<int:pk>', studentUpdate),
    path('studentDel/<int:pk>', studentDel),
]















# from django.urls import path
# from .views import student_api, student_api_get_update_delete

# urlpatterns = [
    
#     path('students/', student_api),
#     path('students/<int:pk>/',student_api_get_update_delete)
# ]

# from django.urls import path
# from .views import Student, StudentDetail


# urlpatterns = [
#     path("students/", Student.as_view(), name="list"),
#     path('students/<int:id>/', StudentDetail.as_view(), name="detail"),
# ]




# from django.urls import path
# from .views import StudentList, StudentGetUpdateDelete

# urlpatterns = [
#     path("students/", StudentList.as_view(), name="list"),
#     path("students/<int:id>/", StudentGetUpdateDelete.as_view(), name="detail"),

# ]