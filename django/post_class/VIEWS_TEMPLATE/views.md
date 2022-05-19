# views nedir?

bir python func veya class dır, 
web request alıp response dönüyor
iki tip views, func views, class views

en basit views örneği

# HttpResponse gösterimi

from django.http import HttpResponse


def home(request):
    return HttpResponse("<h1>Hello World!</h1>")



urls.py =>>> burada belirtilen name ile 

{% url namede yazılan isim-home %} DTL ile o sayfaya gidiyoruz

urlpatterns = [
   
    path('', home, name='home')

]

 views içinde dönen request te gelenleri bu şekilde sorgulayabiliyoruz
    # print(request.GET)
    # print(request.META)
    # print(request.user)

# HttpResponse içindeki alan bize yetmediği için hazır yapılar olsun ve yazacağımız daha detaylı sayfaları kullanabilmek için TEMPLATE oluşturuyoruz.

def special(request):
    return render(request, 'app/special.html')  

yukarıda belirtilrn func yapısını kurduk, render i import ediyoruz,  

oluşturulacak olan templata klasörünü ilgili app altında oluşturduk, template içinde de app isminde bir klasör daha oluşturduk ve içerisine kullanacağımız template sayfasını yazıyoruz.    

app/template/app/special.html  şeklinde, 

render içine import ederken template klasöründen itibaren dizni alıyoruz

## Django Template Language
frontend tarafını dinamik hale getiriyor
-Variable
-Tags
-Filters
-Comments


# static

settings içinde 

STATIC_URL = 'static/'  app lerin içine bakar,
yapısı static klasörüne yönlendirir
bu sebeple ;

app içinde  static dosyası oluşturuyoruz
bu oluşturulan klasör içine syle dosyası oluşturuyoruz
style.css gibi

bu dosyayı html  template içerisine 

{% load static %}


<head>
    <link rel="stylesheet" href="{% static 'app/style.css' %}">
</head>



app lerin dışında bir yere static kalsörü eklenecekse
bu yapı settings static altına eklenmesli

STATICFILES_DIRS = [
    BASE_DIR / "static",
]

python manage.py findstatic style.css komut ile yazılan dosyanın yolunu buluyoruz








