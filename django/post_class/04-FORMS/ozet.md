html sayfalara static dosyaları import etmek için =>  

{% load static %}  sayfanın en üstine eklenir



** {% block container %}
   { % endblock container %}

   ana html sayfamıza block oluşturduk, tekbir navbar ın her sayfa da gözükmesi gibi, 
    
    diğer html sayfalarından bu blok içine ekleyeceğimiz yapıları kullanmak için aşağıda verilen extends ile base html o sayfaya çağrılır ve ilgili sayfa içindeki yapı 

--{% extends 'student/base.html' %}

{% block container %}

 ilgili yapı buraya yazılır

{ % endblock container %}

base.html içerisineyazılan yapılan extends ile çağrılan sayfalarda gözükür