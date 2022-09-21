#! Class Based Views

views.py

```
from django.http.response import HttpResponse
from django.shortcuts import render
import rest_framework
from rest_framework import serializers
from rest_framework.views import APIView


from rest_framework.response import Response
from .models import Todo
from .serializers import TodoSerializer

from rest_framework import status


class TodoList(APIView):

    def get(self, request):
        todos = Todo.objects.all()
        serializer = TodoSerializer(todos, many=True)

        return Response(serializer.data)

    def post(self, request):
        serializer = TodoSerializer(data= request.data)

        if serializer.is_valid():
            serializer.save()

        return Response(serializer.data)  



class TodoDetail(APIView):
    
    def get(self, request, id):
        todo = Todo.objects.get(id=id)
        serializer=TodoSerializer(todo)
        return Response(serializer.data)

    def put(self, request, id):
        todo = Todo.objects.get(id=id)    
        serializer = TodoSerializer(instance=todo, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)       
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        todo = Todo.objects.get(id=id) 
        todo.delete()

        data = {
            "message" : "Todo successfully deleted"
        } 

        return Response(data, status=status.HTTP_204_NO_CONTENT)

```
urls.py 

```
urlpatterns = [
    path('', home),
    path('list', TodoList.as_view()),
    path('detail/<int:id>', TodoDetail.as_view()),
]

```

* yukarıda TodoDetail içerinde tekrarlayan satırlar iiçin bir method tanımlayabiliyoruz

```
todo = Todo.objects.get(id=id) bu satır tün CRUD işlemlerinde kullanılıyor.  get_object_or_404 import edilmesi gerekiyor
 
from django.shortcuts import  get_object_or_404


 def get_obj(self, id):
        return get_object_or_404(Todo, id=id)

todo = self.get_obj(id)


```

# Genericapi View 

Attributes :

    - queryset
    - serializer_class
    - lookup_field
    - lookup_url_kwarg
    
```
from rest_framework import mixins
from rest_framework.generics import GenericAPIView

 *args geriye tuple veri tipini döndürürken *kwargs dictionary veri tipini döndürdü.

class TodoList(mixins.ListModelMixin, mixins.CreateModelMixin,GenericAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs) 

```



## Concrete Views 


```
from rest_framework.generics import GenericAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView

class TodoListCreate(ListCreateAPIView) :
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
    

    def perform__create(self, serializer):
        serializer.save(user=self.request.user)
    (HOOK İŞLEMİ)
    yukarıda kodda create işlemini yapan user ı atama yaptık




class TodoGetUpdateDelete(RetrieveUpdateDestroyAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
    lookup_field ="id"  


```

## ViewSets       

 VIEWSET 
 GENERICVİEWSET
 MODELVIEWSET  ; genel olarak modelview set kullanılıyor 


 from rest_framework import  viewsets


class TodoMVS(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer


urls.py

from rest_framework import routers

ili çeşit router var simple ve 
default da api_root var, boş olarak çağrıldığında


<!-- router = routers.DefaultRouter() -->
router = routers.SimpleRouter()
router.register('todos', TodoMVS)

aşağıdaki iki farklı yöntem ile url belirtilebilir

urlpatterns = [
   
    path("", include(router.urls))
]

urlpatterns += router.urls


```

```
#  action kullanımı


class TodoMVS(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

    @action(methods=["GET"], detail=False)
    def todo_count(self, request):
        todo_count = Todo.objects.filter(done=False).count()
        
        count = {
            'undo-todos': todo_count
        }
        return Response(count)
        
*  Her bir obje için url oluşturma

class TodoSerializer(serializers.ModelSerializer):

    todo_detail = serializers.HyperlinkedIdentityField(view_name="todo-detail")

    bu işlem için yukarıdaki kodu yazdık, fields all değil teker teker yazılmalı, bu şekilde yazında her bir objete gidilecek url oluyor


    class Meta:
        model= Todo
        

```        
        
        fields = ("id", "task","description","priority", "done", "todo_detail" ,  "updateDate", "createdDate" )  
