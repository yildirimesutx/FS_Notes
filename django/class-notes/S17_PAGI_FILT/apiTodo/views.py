from django.http.response import HttpResponse
from django.shortcuts import render, get_object_or_404
import rest_framework
from rest_framework import serializers


from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Todo
from .serializers import TodoSerializer

from rest_framework.views import APIView
from rest_framework import status
from rest_framework import mixins, viewsets
from rest_framework.generics import GenericAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.decorators import action



from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter
from rest_framework.filters import OrderingFilter
#pagination classes
from .pagination import SmallPageNumberPagination,  LargePageNumberPagination, MyLimitOffsetPagination, MyCursorPagination


#auth and permission
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly, AllowAny



# Create your views here.
def home(request):
    return HttpResponse(
        '<center><h1 style="background-color:powderblue;">Welcome to ApiTodo</h1></center>'
    )


    

class TodoMVS(viewsets.ModelViewSet):

   permission_classes = (IsAuthenticated,)


    queryset = Todo.objects.all()
    serializer_class = TodoSerializer


    # pagination_class = SmallPageNumberPagination
    # pagination_class = MyLimitOffsetPagination
    # pagination_class = MyCursorPagination
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['task']
    filter_backends = [SearchFilter]
    search_fields = ['task' ]
    filter_backends = [OrderingFilter]
    ordering_fields = ['task', 'createdDate' ]

    def get_queryset(self):
        queryset = Todo.objects.all()
        priority = self.request.query_params.get('priority')
        if priority is not None:
           
            queryset = queryset.filter(priority=priority)
        return queryset










        
    # @action(methods=["GET"], detail=False)
    # def todo_count(self, request):
    #     todo_count = Todo.objects.filter(done=False).count()
    #     count = {
    #         'undo-todos': todo_count
    #     }
    #     return Response(count)    
