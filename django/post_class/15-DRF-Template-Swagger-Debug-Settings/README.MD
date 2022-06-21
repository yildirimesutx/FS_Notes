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
