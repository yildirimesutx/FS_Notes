from django.urls import path
from .views import home
from .views import hello_world, todoList,todoCreate,  todoListCreate, todoUpdate,todoDelete


urlpatterns = [
    path('', home),
    path('hello-world/', hello_world),
    path('todoList',todoList ),
    path('todoCreate',todoCreate ),
    path('todoListCreate',todoListCreate ),
    path('todoUpdate/<int:pk>',todoUpdate ),
    path('todoDelete/<int:pk>',todoDelete ),
]
