from django.http.response import HttpResponse
from django.shortcuts import render, get_object_or_404
import rest_framework
from rest_framework import serializers
from rest_framework.views import APIView

from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Todo
from .serializers import TodoSerializer

from rest_framework import status

from rest_framework import mixins, viewsets
from rest_framework.generics import GenericAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.filters import SearchFilter

from rest_framework.filters import OrderingFilter

#pagination

from .pagination import MyPageNumberPagination, MyLimitOffsetPagination, MyCursorPagination










# Create your views here.
def home(request):
    return HttpResponse(
        '<center><h1 style="background-color:powderblue;">Welcome to ApiTodo</h1></center>'
    )


#! Class Based Views


# class TodoList(APIView):

#     def get(self, request):
#         todos = Todo.objects.all()
#         serializer = TodoSerializer(todos, many=True)

#         return Response(serializer.data)

#     def post(self, request):
#         serializer = TodoSerializer(data= request.data)

#         if serializer.is_valid():
#             serializer.save()

#         return Response(serializer.data)  



# class TodoDetail(APIView):
    
    
#     def get_obj(self, id):
#         return get_object_or_404(Todo, id=id)
    
#     def get(self, request, id):
#        todo = self.get_obj(id=id)
#        serializer = TodoSerializer(todo)
#        return Response(serializer.data)
    
    
#     def put(self, request, id):
#         todo =  self.get_obj(id)
#         serializer = TodoSerializer(instance=todo, data=request.data)

#         if serializer.is_valid():
#            serializer.save()
#            return Response(serializer.data)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
#     def delete(self, request, id):
#         todo =  self.get_obj(id)
#         todo.delete()
#         data = {
#            "message" : "Todo successfully deleted"
#        }
#         return Response(data, status=status.HTTP_204_NO_CONTENT)



#! Genericapi View 

class TodoList(mixins.ListModelMixin, mixins.CreateModelMixin,GenericAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs) 

#! Concrete Views            


class TodoListCreate(ListCreateAPIView) :
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
    
    # def perform__create(self, serializer):
    #     serializer.save(user=self.request.user)


class TodoGetUpdateDelete(RetrieveUpdateDestroyAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
    lookup_field ="id"


#! ViewSets 
# 
# VIEWSET
# GENERICVİEWSET
# MODELVIEWSET  ; genel olarak modelview set kullanılıyor  


class TodoMVS(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

    # pagination_class = MyPageNumberPagination
    # pagination_class = MyLimitOffsetPagination
    # pagination_class = MyCursorPagination


    # filterset_fields = ['task', 'priority']
    # filter_backends = [SearchFilter]
    # search_fields = ['task' ]

    filter_backends = [OrderingFilter]
    ordering_fields = ['task', 'createdDate' ]

    # def get_queryset(self):
    #     queryset = Todo.objects.all()
    #     priority = self.request.query_params.get('priority')
    #     if priority is not None:
           
    #         queryset = queryset.filter(priority=priority)
    #     return queryset
        




