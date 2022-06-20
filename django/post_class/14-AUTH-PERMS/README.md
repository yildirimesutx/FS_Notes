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

DJANGONUN DEFAULT USERS MODELİNDE EMAİL ZORUNLU DEĞİL VE UNİQ DEĞİLDİ, USERS MODELDE TEKRAR TANIMLAYACAĞIZ

from asyncore import write
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password


class RegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        required=True,
        validators=[UniqueValidator(queryset=User.objects.all())]
    )

    password = serializers.CharField(
        write_only=True,
        required=True,
        validators=[validate_password],
        style={
            'input_type': 'password'
        }
    )
    password2 = serializers.CharField(
        write_only=True,
        required=True,
        style={
            'input_type': 'password'
        }
    )

    class Meta:
        model = User
        fields = (
            'username',
            'email',
            'first_name',
            'last_name',
            'password',
            'password2'
        )

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError(
                {'password': 'Password fileds didnt match'}
            )

        return attrs

    def create(self, validated_data):
        validated_data.pop('password2')
        password = validated_data.pop('password')
        user = User.objects.create(**validated_data)
        user.set_password(password)
        user.save()
        return user


yukarıdaki kod standart register işlemleri içinkullnılıyor

write_only:
get methodunda kullanıyoruz

read_only :post methodunda kullanılıyor

kayıt olduğunda passwordu ekranda yazdırmaması için,




SONRA VIEWS YAZDIK 


from django.contrib.auth.models import User
from .serializers import RegisterSerializer
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view




class RegisterView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer

#yukarıdaki işlem register için yeterli 
#aşağıdaki işlemi register olduktan sonra login olması için yaptık

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        token = Token.objects.create(user=user)
        data = serializer.data
        data['token'] = token.key
        headers = self.get_success_headers(serializer.data)
        return Response(data, status=status.HTTP_201_CREATED, headers=headers)


*** LOGIN *****

from django.urls import path
from .views import RegisterView, logout
from rest_framework.authtoken import views

urlpatterns = [
    
    path('login/', views.obtain_auth_token, name='login')
      
]

**** LOGOUT *****

logout işleminde sistemde tanımlı token siliniyor tekrar login olunca yeni token veriyor, güvenlik yöntemi

@api_view(['POST'])    
def logout(request):
    if request.method == 'POST':
        request.user.auth_token.delete()
        data = {
            'message': 'succesfully logout'
        }
        return Response(data)


*** CUSTEM PERMİSSONS ***

permissions.py tanımlıyoruz ulaşılması gereken app içinde
djangonun permissondan class ın inherit ediyoruz

bu nu ilgili views içinde kullanıyoruz.

from rest_framework import permissions


class IsAdminOrReadOnly(permissions.IsAdminUser):

    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        else:
            return bool(request.user and request.user.is_staff)
