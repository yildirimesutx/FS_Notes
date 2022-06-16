from django.urls import path, include
from .views import home
from .views import   TodoMVS


from rest_framework import routers

router = routers.DefaultRouter()
# router = routers.SimpleRouter()
router.register('todos', TodoMVS)

urlpatterns = [
    # path('', home),
    # path('list', TodoList.as_view()),
    # path('detail/<int:id>', TodoDetail.as_view()),
    # path('list', TodoListCreate.as_view()),
    # path('detail/<int:id>', TodoGetUpdateDelete.as_view()),
    path("", include(router.urls))
]
# urlpatterns += router.urls

