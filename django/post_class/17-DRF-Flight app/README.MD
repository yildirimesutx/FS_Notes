# SWAGGER

https://drf-yasg.readthedocs.io/en/stable/readme.html

-Bir projenin API ve dökümantasyon dizayn etmek için kullanılıyor. 
-Proje üzerinde yapılan değişiklikler dökümantasyona yansıyor. 
-Sağlamış olduğuara yüz ile test imkanı sağlıyor.
-

* kurulumu ;

pip install drf-yasg

INSTALLED_APPS = [
    # ...'django.contrib.staticfiles',
    # required for serving swagger ui's css/js files
    # Third party apps:


    'drf_yasg',# 
    
    ...]

project urls.py içerisine => 

from django.contrib import admin
from django.urls import path, include

# Three modules for swagger:
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi


schema_view = get_schema_view(
    openapi.Info(
        title="Flight Reservation API",
        default_version="v1",
        description="Flight Reservation API project provides flight and reservation info",
        terms_of_service="#",
        contact=openapi.Contact(email="yildirimesutcw@gmail.com"),  # Change e-mail on this line!
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=[permissions.AllowAny],
)


urlpatterns = [
    path("admin/", admin.site.urls),

    # Url paths for swagger:
    path("swagger(<format>\.json|\.yaml)", schema_view.without_ui(cache_timeout=0), name="schema-json"),
    path("swagger/", schema_view.with_ui("swagger", cache_timeout=0), name="schema-swagger-ui"),
    path("redoc/", schema_view.with_ui("redoc", cache_timeout=0), name="schema-redoc"),
    <!-- path('__debug__/', include('debug_toolbar.urls')), -->
]



python manage.py migrate 

# Debug Toolbar

proje dosyasında history,
settings,
headers
request
SQL
static files
templates
cache
signals
logging

gibi başlıklar ile projede kontrol panelii oluşturuyor,


pip install django-debug-toolbar



INSTALLED_APPS = [
    # ...'django.contrib.staticfiles',
    # required for serving swagger ui's css/js files
    # Third party apps:


    "debug_toolbar" 
    
    ...]


from django.urls import include


urlpatterns = [# ...    


path('__debug__/', include('debug_toolbar.urls'))

,]  



MIDDLEWARE = [

"debug_toolbar.middleware.DebugToolbarMiddleware",

...]


INTERNAL_IPS = [
    
"127.0.0.1",

]

# Seperate Dev and Prod Settings

Inside "settings" folder, 
create;

__init__.py => which is the required file to create a python module. yönlendirme işlemi burada yapılıyor

base.py  =>   which will include common settings. ortak dosyaları burada tututoruz


dev.py which will include developmend specific settings.  local dosyalar burada

prod.py => which will include production specific settings. Product kısmına ait dosyalar burada


Copy all the staff inside settings.py to base.py. And delete settings.py

__init__.py =>

from .base import *

env_name = config('ENV_NAME')


if env_name == 'dev':
    from .dev import *

elif env_name == 'prod':
    from .prod import *


.env =>

ENV_NAME = dev ya da prod oluyor

dev.py=>

from .base import *

THIRD_PARTY_APPS = [

"debug_toolbar",
]

INSTALLED_APPS += THIRD_PARTY_APPS



THIRD_PARTY_MIDDLEWARE = [

 "debug_toolbar.middleware.DebugToolbarMiddleware",
]

MIDDLEWARE += THIRD_PARTY_MIDDLEWARE


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

prod.py =>

postgres i tanımladık

from .base import *


DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql_psycopg2",
        "NAME": config("SQL_DATABASE"),
        "USER": config("SQL_USER"),
        "PASSWORD": config("SQL_PASSWORD"),
        "HOST": config("SQL_HOST"),
        "PORT": config("SQL_PORT"),
        "ATOMIC_REQUESTS": True,
    }
}

.env => postgres için env

SQL_DATABASE=flightDB
SQL_USER=postgres
SQL_PASSWORD=postgres
SQL_HOST=localhost
SQL_PORT=5432






# Logging
burada gelecek hataların kayır edilmesi için bir file oluşturduk ve bu file da ve terminalde hataları sınıflarına göre listeledik. aşağıdaki kod olduğu gibi bas.py en sonuna ekleniyor
ve otomatik olarak debug.log file oluşuyor.


LOGGING = {
    "version": 1,
    # is set to True then all loggers from the default configuration will be disabled.
    "disable_existing_loggers": True,
    # Formatters describe the exact format of that text of a log record. 
    "formatters": {
        "standard": {
            "format": "[%(levelname)s] %(asctime)s %(name)s: %(message)s"
        },
        'verbose': {
            'format': '{levelname} {asctime} {module} {process:d} {thread:d} {message}',
            'style': '{',
        },
        'simple': {
            'format': '{levelname} {message}',
            'style': '{',
        },
    },
    # The handler is the engine that determines what happens to each message in a logger.
    # It describes a particular logging behavior, such as writing a message to the screen, 
    # to a file, or to a network socket.
    "handlers": {
        "console": {
            "class": "logging.StreamHandler",
            "formatter": "standard",
            "level": "INFO",
            "stream": "ext://sys.stdout",
            },
        'file': {
            'class': 'logging.FileHandler',
            "formatter": "verbose",
            'filename': './debug.log',
            'level': 'WARNING',
        },
    },
    # A logger is the entry point into the logging system.
    "loggers": {
        "django": {
            "handlers": ["console", 'file'],
            # log level describes the severity of the messages that the logger will handle. 
            "level": config("DJANGO_LOG_LEVEL", "INFO"),
            'propagate': True,
            # If False, this means that log messages written to django.request 
            # will not be handled by the django logger.
        },
    },
}
.env=>
DJANGO_LOG_LEVEL=INFO



# AUTHENTICATION

projenin auth işlemleri için users app oluşturduk.

users app de auth için ek paket kurulumu ile devam edeceğiz

*** dj-rest-auth ***

https://dj-rest-auth.readthedocs.io/en/latest/index.html

pip install dj-rest-auth


INSTALLED_APPS = (
    ...,
    'rest_framework',
    'rest_framework.authtoken',
    ...,
    'dj_rest_auth'
)


python manage.py migrate

app urls.py içinde 

urlpatterns = [
    ...,
    path('dj-rest-auth/', include('dj_rest_auth.urls'))
]

patterns ne yönlendirme yapıyoruz.
aşağıda belirtildiği gibi,

ilgili auth işlemlerini seçiyoruz,



users/ auth/ password/reset/ [name='rest_password_reset']
users/ auth/ password/reset/confirm/ [name='rest_password_reset_confirm']
users/ auth/ login/ [name='rest_login']
users/ auth/ logout/ [name='rest_logout']
users/ auth/ user/ [name='rest_user_details']
users/ auth/ password/change/ [name='rest_password_change']


bu peketin register işlemleri içinde özelliği bulunmaktada fakat özelleştirilebilirlik açısından biz kendi registerimizi yazdık 



urlpatterns = [
    ...,
    path('dj-rest-auth/', include('dj_rest_auth.urls')),
    path('dj-rest-auth/registration/', include('dj_rest_auth.registration.urls'))
]


ayrıca social hesapları ile auth işlemlerine imkan sağlamaktadır. 



*** register.py ***

** register işlemini ilgili app de seerializers.py da tanımlıyoruz.

User modelinden register işlemini tanımlıyoruz. Burada değiştirmek istediğimiz fields tekrar yazıyoruz.

emaili uniq ve zorunlu olması için tekrar tanımladık,

serializers.py

from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validated_password


class RegisterSerializer(serializers.ModelSerializer):
    email= serializers.EmailField(
        required=True,
 
        # burada dökümantasyondan gelen validatör işlemini kullanıyoruz. User dan mail vardı fakat burada biz required ve uniq olması içinvalidatör işlemi yaptık
        validators=[validators.UniqueValidator(queryset=User.objects.all())]
     ) 
    password = serializers.CharField(
        write_only=True,
        required =True,
        #pass özel hazır validator kullandık
        validators=[validated_password]
        style={"input-type":"password"}
     )
    password2 = serializers.CharField(
        write_only=True,
        required =True,
        #pass özel hazır validator kullandık
        validators=[validated_password]
        style={"input-type":"password"}
     )

     class Meta:
        model=User
        fields = (
            "username",
            "email",
            "first_name",
            "last_name",
            "password",
            "password2"
        )
    
    def create(self, validate_data):
        password = validated_data.pop("password")
        validated_data.pop("password2")
        user = User.objects.create(**validated_data)
        user.set_password(password)
        user.save()
        return user

    def validate(self, data):
        if data["password"] != data["password2"]
            raise serializers.ValidationError(
                {"password":"password didn't match..."}
            )
        return data 

views.py

from rest_framework.generics import CreateAPIView
from django.contrib.auth.models import User
from .serializers import RegisterSerializer


class RegisterView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer



urls.py 

from django.urls import path, include
from .views import RegisterView


urlpatterns = [
    
    path('auth/', include('dj_rest_auth.urls')),
    path("register/", RegisterView.as_view()),
]

base.py

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.TokenAuthentication',
       
    ]
}


*** signals.py ***

ilgili app de signals.py da 

from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

@receiver(post_save, sender=User)
def create_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)


create_token satıra sabit gelmekte, üzerinde tanımlanan dekoratır önenli, sender in user modeli create olunca token ni kaydet

apps.py da bu yazılan signalin çalışması için 



from django.apps import AppConfig


class UsersConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'users'
    
    (bu ifadeyi tanımlıyoruz, bu ifade olmazsa çalışmaz)
    def ready(self):
        import users.signals
    

register olduktan sonra token da oluşması için view içirisine ekledik, class içine, bunun sebebi user kayıt olduktan sonra token oluyor, tekrar login için response göndermiyoruz. 

def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        data = serializer.data
        if Token.objects.filter(user=user).exists():
            token = Token.objects.get(user=user)
            data["token"] = token.key
        else:
            data["token"] = "No token created for this user.... :))"
        headers = self.get_success_headers(serializer.data)
        return Response(data, status=status.HTTP_201_CREATED, headers=headers)


*** USERS bilgilerinin frontende gönderilmesi ****

from dj_rest_auth.serializers import TokenSerializer

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            "id",
            "username",
            "first_name",
            "last_name",
            "email"
        )

class CustomTokenSerializer(TokenSerializer):
    user = UserSerializer(read_only=True)

    class Meta(TokenSerializer.Meta):
        fields = (
            "key",
            "user"
        ) 



settigns.py

REST_AUTH_SERIALIZERS = {
    'TOKEN_SERIALIZER': 'users.serializers.CustomTokenSerializer',

}

## FLIGHTS APP

*** 1 ***
* Projede kullancağımız tablolar için planlamamızı yaptık.

* login olan userlar

---flight
listelenmiş uçakları görecekler

---reservation 
reservations oluşturma
see only the reservation you have created

* admin/staff

---flight
- listelenmiş uçaklara ait reservationlarıda görecekler
- uçuş ekleyebilecekler

---reservation 
reservations oluşturma
reservation create and all flight view


models.py da 

üç adet tablo oluşturuyoruz.

flight, passenger , reservation ve django modelden aldığımız User 

3 atblodan faydalanarak oluşturduğumuz reservation tablomuzu inceleyelim


class Reservation(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    passenger = models.ManyToManyField(Passenger, related_name='reservations')
    flight = models.ForeignKey(Flight, on_delete=models.CASCADE, related_name='reservations') 



user : ManyToOne ilişki mevcut, bir kullanacıbir çok reservation yapabilir
user silindiğinde reservationlarıda silincek, User tablasundan aldık

passenger: ManyToMany ilişki mevcut, bir yolcu birden çok reservation içinde bulunabilir, bu reservationun içinde birden fazla yolcu olabilir.yolcu silindiğinde reservation içinde diğer yolcular olduğundan on_delete methodu kullanmadık.

flight : ManyToOne ilişkisi mevcut, bir uçağa birden fazla reservation yapılabilir. uçak slindiğinde reservationlarda iptal olacağından on_delete de Cascade kullandık.


flight = models.ForeignKey(Flight, on_delete=models.CASCADE, related_name='reservations') 


- related_name='reservations' yazamızın sebebi, modeli serializers da dosya içinde çağırdığımızda kullamak için

- örn : reservasyon_tablosu.user_tablosu.user_name

- reverasyon tablosundan user tablosuna oradan da user name ulaştık.

- flight.reservations.all ile o uçuşa ait tüm reservationlar görüntülenebilmektedir.

- child tablosundan parent tablosuna uaşık

-- tabloları oluşturduktan sonra make-mige yaparak db oluşturduk

-- Admin panelde gözükmesi için admin.py içerisne model tablaloalarını kaydettik

-- Oluşturulan abloları listeleyebilmek görüntüleyebilmek ve API oluşturabilemek için serializers.py file oluşturduk

-- modeldeki tabloyu modelserializers ile çağırdık

-- serializersdeki veriyi görüntüleyebilmek için views.py ve urls.py file larına ihtiyacımız var.

-- views.py da views de class ve func yapıları ile gelen veriyi kullanabiliyoruz. bu projede class viewseti kullandık,

-- viewset kullanıldığından urls.py da router yapısı kullanıyoruz. tek bir url pattern ile crud işlemleri yapmamızı sağlıyor

-- bu aşamada api görüntüledik ve post get put delete yapabiliyoruz, herhangi bir kullanıcı kısıtlaması olmadan bu işlemleri yaptık, 2. aşamda kullanıcı permissionsları getirerek ilerleyeceğiz.











