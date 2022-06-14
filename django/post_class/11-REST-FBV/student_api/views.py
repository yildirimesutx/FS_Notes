from .serializers import StudentSerializer
from .models import Student
from rest_framework.decorators import api_view
from rest_framework import serializers
from rest_framework.response import Response
import rest_framework
from django.shortcuts import render
from rest_framework import status


@api_view(['GET'])
def studentList(request):
    student = Student.objects.all()
    print(student)
    serializer= StudentSerializer(student, many=True)
    print("serializer")
    print(serializer)
    return Response(serializer.data)

@api_view(['POST'])
def studentAdd(request):
    serializer =  StudentSerializer(data=request.data)  

    if serializer.is_valid():
        serializer.save()
    
    return Response(serializer.data)

@api_view(['GET','POST'])
def studentListCreate(request):

    if request.method == 'GET':
        student = Student.objects.all()
    
        serializer= StudentSerializer(student, many=True)
  
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == 'POST' :
        serializer= StudentSerializer(data = request.data)


        if serializer.is_valid():
            serializer.save()
    
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 


@api_view(['GET','PUT', 'DELETE'])
def studentUpdate(request, pk):

    student = Student.objects.get(id=pk)

    if request.method == 'GET':

        serializer = StudentSerializer(student) 

        return Response(serializer.data)

    elif request.method == 'PUT':

        serializer= StudentSerializer(instance=student, data = request.data)

        
        if serializer.is_valid():
            serializer.save()
        
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 

    elif request.method == "DELETE":
       
        querset.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)  






@api_view(['DELETE'])
def studentDel(request, pk): 
   student = Student.objects.get(id=pk)
   student.delete()

   return Response("Item Deeleted") 




  



































































# from django.shortcuts import render, get_object_or_404

# from .models import Student
# from .serializers import StudentSerializer
# from rest_framework.decorators import api_view
# from rest_framework.response import Response
# from rest_framework import status


# @api_view(['GET', 'POST'])
# def student_api(request):

#     if request.method == 'GET':
#         students = Student.objects.all()
#         serializer = StudentSerializer(students, many=True)
#         return Response(serializer.data)

#     elif request.method == 'POST':
#         serializer = StudentSerializer(data=request.data)

#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)

#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)  

# @api_view(['GET', 'PUT', 'DELETE', 'PATCH'])
# def student_api_get_update_delete(request, pk): 
#     student = get_object_or_404(Student, pk=pk)

#     if request.method == 'GET':
#         serializer = StudentSerializer(student)
#         return Response(serializer.data, status=status.HTTP_200_OK)  

#     elif request.method == 'PUT':
#         serializer = StudentSerializer(student, data=request.data)

#         if serializer.is_valid():
#             serializer.save()

#             data = {
#                 "message" : f"Student {student.last_name} updated succesfuly"
#             }

#             return Response(data) 

#         return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

#     elif request.method == 'PATCH':
#         serializer = StudentSerializer(studet, data=request.data, partial =True) 

#         if serializer.is_valid():
#             serializer.save()

#             data = {
#                 "message": f"Student {student.last_name} updated successfully"
#             }
#             return Response(data)

#     elif request.method == 'DELETE':
#         student.delete()

#         data = {
#             "message": f"Student {student.last_name} deleted successfully"
#         }
#         return Response(data)


# from .models import Student
# from .serializers import StudentSerializer
# from rest_framework import generics, mixins





# class StudentDetail(generics.GenericAPIView, mixins.UpdateModelMixin, mixins.DestroyModelMixin, mixins.RetrieveModelMixin) :
     
#     serializer_class = StudentSerializer
#     queryset = Student.objects.all()
#     lookup_field = "id"

#     def get(self, request, id):
#         return self.retrieve(request)

#     def put(self, request, id):
#         return self.update(request, id)

#     def delete(self, request, id):
#         return self.delete(request, id)



# class Student(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin):
    
#     serializer_class = StudentSerializer
#     queryset = Student.objects.all()
 
        
#     def get(self, request):
#         return self.list(request)
    
#     def post(self, request):
#         return self.create(request)


# from .models import Student
# from .serializers import StudentSerializer
# from rest_framework import generics

# class StudentList(generics.ListCreateAPIView):
#     serializer_class = StudentSerializer
#     queryset = Student.objects.all()
    

# class StudentGetUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
#     serializer_class = StudentSerializer
#     queryset = Student.objects.all()
#     lookup_field = "id"





     









