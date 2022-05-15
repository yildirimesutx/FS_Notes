1- pyhton --version =>python versinını kontrol edelim
2- python -m venv env => environment alanını oluştur, sondaki env ismi best practice farklı isimde kullanılabilir
3- .\env\Scripts\activate (env yi aktive etmek için Scripts in içine gidip activate yap)
!!!(Eğer bu aşamada bi hata alırsan "security error" bunu yaz -> 
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted
ve 3.adımı tekrar uygula!!!
4- pip install django (djangoyu yükle) -güncelleme çıkarsa güncelle
5- django-admin startproject fscohort . ( projeyi oluştur, fscohort= kendi proje ismin, proje isminin sonuna nokta ekliyoruz ve alt klasör oluşturmuyor bu şekilde)
6- python manage.py runserver (sserver ı çalıştır)
(deafault olarak 8000 portunda çalışır,başka serverda çalışmak isterseniz kodun sonuna numarayı eklemek yeterli. (örn: python manage.py runserver 8080))
(Terminalde server dan çıkmak için ctrl+c)
7- terminalde yazan http://127.0.0.1:8000/ linkine tıkla, tarayıcıda roketi gör :)
8- python manage.py startapp student ( ilk app i oluştur, student= senin app adın) 
9- oluşturulan app adı seeting dosyasında INSTALLED_APPS içerisine eklenir.

views.py içinde; 
     from django.shortcuts import render
     from django.http import HttpResponse  buraya kullanılanacaklar import ediliyor



        def index(request):
            return HttpResponse("<h1>First Django Projet</h1>")

            bu bölümde ( içine string yazılabilir yada template koyulabilir)

buraya gösterilmesi gereken sayfa ve iafdeleri yazdık, 

project içindeki urls.py içinde routları ayarlıyoruz

from store.views import index   ilgili sayfa ve def i import ettik

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index, name="index"  )   bu satırı biz yazdık, "" içine url yolunu yazıyoruz "home/" url git ve index def imizdeki func yapıyı göster
    path("url yolu/", views içindeki def ismi, name="def ism,")
]

İNCLUDE KULLANIMI
from django.urls import path, include

bu kullanımda sayfa sayısı çok olabileck durumlar için include import ediyoruz ve include func içine nereye yönlendirilmesi gerektiği ilgili sayfayı yönlendiriyoruz, ilgili app içinde urls.py sayfası oluşturduk. include içine store.urls tanımladık.
tüm app ler için aşağıdaki yapıyı kuruyoruz

path('', include('store.urls')),bu yapıyı ana urls içinde yazdık

sonra app içinde oluşturduğumuz urls e de aşağıda olduğu gibi yönlendirmeleri yapıyoruz.

from django.urls import path
from .views import index
from .views import image

urlpatterns = [
    path('', index, name="index"),
    path('about/', image, name="image"),

]


####### MODELS ########

models dosyası ile DB de verileri tutabiliyoruz
her bir model DB de bir tabloya denk geliyor
istenilirse başka bir DB apı ile bağlanabilir (postsql, mysql, oracle, maria Db)


MODEL OLUŞTURMA (https://docs.djangoproject.com/en/4.0/topics/db/models/)

from django.db import models


class Customer(models.Model) :
     first_name= models.CharField(max_lenght=30)
     last_name = models.CharField(max_lenght=30)

Customer : table name
last_name : Column name
CharField : Field Type, Field options, relations 


model tanımlaması yapıldıktan sonra;

python manage.py makemigrations store(app ismi)

komutunu yazıyoruz ve yeni initial dosyası oluştu. biz ORM YAZDIK ve SQL komutuna çeviriyor.

bu yapılan işlemi DB söylememiz gerekiyor

python manage.py migrate  komutunu kullanıyoruz

her değişiklik yapıldığında makemigrate sonra bu değişiklikleri DB e iletmek için migrate yapıyoruz.

python manage.py createsuperuser ile admin oluşturuyoruz

admin.py sayfası içinde 

from store.models import Customer ilgili class ı import ettik



admin.site.register(Customer)   ilgili class tanımladık, burada tanımladığımız name ve surname başlıklı tablo oluşuyor, bunuda admin page içinde Customer içine girince görüyoruz