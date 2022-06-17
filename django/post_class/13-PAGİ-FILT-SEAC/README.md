# Pagination

* https://www.django-rest-framework.org/api-guide/pagination/


* PageNumberPagination

 1- Globally olarak

 settings.py=>

REST_FRAMEWORK = {
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 2
}


Page_sıze : sayfada gösterilen veri sayısı 

"count": 6, => toplam veri sayısı
    "next": "http://127.0.0.1:8000/todos/?page=3",
    "previous": "http://127.0.0.1:8000/todos/",
  
next and previous da önceki ve sonraki sayfa linkleri





 2- Local olarak tanılama
  local olarak tanımlanan değişkenler öncelikli oluyor


GenericAPIViews kullanılıyorsa, viewslere göre local değişiklikler tanımlıyoruz.


pagination.py => ilgili app içinde 

from rest_framework import pagination
from rest_framework.pagination import PageNumberPagination


class MyPageNumberPahination(pagination.PageNumberPagination):

iki farklı şekilde import edilebilir,

class MyPageNumberPahination(PageNumberPagination):
    page_size = 1

tanımlanan class içinde yapılacak modifly lar belli edilir.Bu modifyları configuration da dökümanda diğer çeşitleri mevcut.

bu class ilgili views içerine import edilir 

from .pagination import MyPageNumberPagination


class TodoMVS(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

    pagination_class = MyPageNumberPagination



ilgili class içinde tanımladık.


* LimitOffsetPagination

 1- Globally olarak

limit : sayfada gösterilmesi gereken veri sayısı
Offset : kaçıncı veriden başlayacağını belirtiyor
offset=3 ise sayfada 4. veriden itibaren başlanacapını belirtiyor

limit verilmezse page_size dan alır, her ikiside girilirse kullanıcı girini öncelikli olarak alır.

REST_FRAMEWORK = {
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.LimitOffsetPagination',
    # 'PAGE_SIZE': 1
}

http://127.0.0.1:8000/todos/?limit=2&offset=4

limit ve offset değerlerini manuel yazıyoruz. 

 2- Local olarak tanılama


class TodoMVS(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

    
    pagination_class = MyLimitOffsetPagination



* CursorPagination
bu durumda ileri geri var, sayfa numaraları bulunmuyor
-büyük db lerde kullanılıyor
sıralı olarak gönderilmediğinde kullanıcı veriyi göremiyor
default olarak model de "created" field arıyor ve oluşturma tarihine göre bir sonraki sayfaya düşüyorve yeni girilen verinin kullnıcı tarafından görünmesiniz saplıyor.

bir veriyi ikinci defa göstermiyor

REST_FRAMEWORK = {
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.CursorPagination',
    'PAGE_SIZE': 2
}

bu tanımlandıktan hata verecektir. sebebi created i default olarak modelde araması, modeli değiştirmeden bu işlemi yapıyoruz. 

pagination.pyda modelde tanımladığımız createdDate tanımladık

class MyCursorPagination(CursorPagination) :
    ordering = "createdDate"
    page_size = 3


* local tanımlanan paginationları glabalde tanımlama 

 'DEFAULT_PAGINATION_CLASS': 'apiTodo.pagination.MyCursorPagination',

 apiTodo: app ismi
 MyCursorPagination : pagination.py da class

# Filtering

views.py da igili class içine 

   def get_queryset(self):
        queryset = Todo.objects.all()
        priority = self.request.query_params.get('priority')
        if priority is not None:
           
            queryset = queryset.filter(priority=priority)
        return queryset

http://127.0.0.1:8000/todos/?priority=H

sorguyu url satırında yapıyoruz



* Generic Filtering
ekranımızda search alanı çıkıyor, urlde sorguyapmaya gerek kalmadı.

settings.py ekliyoruz


REST_FRAMEWORK = {
    'DEFAULT_FILTER_BACKENDS': ['django_filters.rest_framework.DjangoFilterBackend']
}

aşağıdaki satır ile yuklarıda ki satır aynı görevde biri localde diğeri globalde tanımladı. aşağıdakini viewsipyda ilgili classa
filter_backends = [DjangoFilterBackend]

pip install django-filter


INSTALLED_APPS = [
    ...
    'django_filters',
    ...
]

views.py 
from django_filters.rest_framework import DjangoFilterBackend


filterset_fields = ['task']

# SearchFilter

from rest_framework.filters import SearchFilter

filter_backends = [SearchFilter]
search_fields = ['task' ]





# OrderingFilter

from rest_framework.filters import OrderingFilter

 filter_backends = [OrderingFilter]
ordering_fields = ['task', 'createdDate' ]