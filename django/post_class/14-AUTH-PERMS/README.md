# Authenticated  

* BasicAuthentication
* SessionAuthentication
* TokenAuthentication


---permission---
permissonlar sabit olup auth yöntemi değişmektedir.

AllowAny : kısıtlama yok
IsAuthenticated : user kayıtlı ise işlemleri yapıyor
IsAdminUser : admin user için yetki veriyor
IsAuthenticatedOrReadOnly : auth ise post fet, değilse sadece get

DjangoModelPermissions :admin panelde verilen user ve grup yetkilerine göre kısıtlama yapıyor

DjangoModelPermissionsOrAnonReadOnly : auth ise djangomodelpermissons uygula değilse readi uygula
DjangoObjectPermissions
Custom permissions

* BasicAuthentication

güvenli olmayan ve tercih edilmeyn yöntem


settings.py da basic auth için de methodu tanımladık, viewsde ilgili permission yetkisi veriyoruz

REST_FRAMEWORK = {   
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.BasicAuthentication'  
    ]
}

views.py 


class TodoMVS(viewsets.ModelViewSet):

    permission_classes = (IsAuthenticated,)
    # yukarıdaki permission özelliğini ekledik

    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

    filter_backends = [OrderingFilter]
    ordering_fields = ['task', 'createdDate' ]



yukarıda tanımlamalar yapıldıktan sonra api listesini görüntüleyemedik, user nameve pass istedi

bu api postmanda görüntüleyebilmek için;

url yazdık authorization kısmına basic auth seçtik, verdiğimiz permission yetkisine göre crud işlemleri yapılamktadır.

not: postman da update yapabilmek için url kısmının sonuna id yazmak gerekiyor

http://127.0.0.1:8000/todos/1/ gibi


* TokenAuthentication

settings.py

INSTALLED_APPS = [
    ...
    'rest_framework.authtoken'
]

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.TokenAuthentication'
    ]
}


sonra  python manage.py migrate işlemi yapıyoruz


postmanda authorization da no auth yapıyoruz,

headers da auth u tanımladık

key =Authorization   value = Token 62960a5350626333af4c97b2de06767465588a86


bu hali ile manuel tanımlanan token ile ilgili permission tanımlanarajk giriş verilebilir.

fakat kullnıcı kaydı oluşturup giriş yapılabilmesi için 

users app oluşturuyoruz.

bu app de register işlemii için 

serializers.py oluşturduk

djangonun User modeini kullanıyoruz
