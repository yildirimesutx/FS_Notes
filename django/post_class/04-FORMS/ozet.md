  #  FORM

  -- 2 farklı yöntem ile form oluşturabiliyoruz

  ** 1. yöntem

''''''''  form.py dosyası oluşturuyoruz

class StudentFormSimple(forms.Form):     
     first_name = forms.CharField(max_length=50)
     last_name = forms.CharField(max_length=50)
     number = forms.IntegerField(required=False)

   ** 2. yöntem

class StudentForm(forms.ModelForm):
     class Meta :
          model = Student  # burada model olarak   models den import ettiğimiz Student class ını aldık
          fields= '__all__' # import ettiğimiz modelden hangi field ları alacağımız yazıyoruz
          fields = ["first_name", "last_name"] # sadece istediğimiz değişkenleri aldık
          labels = {"last_name" : "Surname"} # bu şekilde de formada görünen isimleri değiştirdik



        



''''''''    views.py

def student_page(request):
     form = StudentForm()   # forms.py da oluşturduğumuz studentform u form değişkenine tanımladık ve boşbir şekilde gönderdik

     context = {
          'form': form
     }

     return render(request, 'student/student.html', context)

 


'''''''student.html 


*** bu 2. hal  tarzı için uygun form yapsı,
1. hal tarzı olsaydı tekrar label ve inputlarla form yapısı oluşturacaktık



<form action="" method=" POST" enctype="multipart/form-data">

{% csrf_token%}  # formu gönderirken güvenlik setifikasını ekliyoruz
{{form.as_p}}

</form>

template de form un görüntülenmesi için bir form yapısı için aldık, 

    ++  enctype="multipart/form-data"  bu özellik ile forma resim vebelge yüklenebilmektedir
    ++  as_p ile de herbir gelen satır arasına boşluk bırak  için p tagı yazılmıştır

```
### forma fotoğraf gönderilmesi

  if form.is_valid():
        student= form.save()  form.save bir değişkene atadık

        if 'profile_pic' in request.FILES:
            student.profile_pic = request.FILES['profile_pic']
            student.save()


burada belirtilen profil_pic models içerinde tanımlanan değişken ismi, 
models içindeki ;
      profile_pic = models.ImageField(upload_to="profile_pics", blank=True)

değişkende bu şekilde oluşturuluyor


```


```
### BOOTSTRAP BAĞLAMA


BASE.HTML içersine getbootstrap.com dam

Include via CDN 

css ve js kısımlarını kopyaladık, 


### CSS 

app içinde static şeklinde bir dosya oluşturulur
static/app_ism/style.css  şeklinde bir yapıyoruz

base.html de head kısmına, 

<link rel="stylesheet" href="{% static 'student/styles.css' %}">  dosya yolunu static dosyasından itibarenyazmak gerekiyor

html en üst kısma 

{% load static %} 

```


```
## ayrıca django da kullanılan form yapıs 

pip install django-crispy-forms,   ile bu yapıyı yükledik


 'crispy_forms',   bu app yi settings app ler altına ekledik,

 settings en alt kısma ekliyoruz

 CRISPY_TEMPLATE_PACK = 'bootstrap4' 

ilgili html sayfasındaki 
formun üstüne
{% load crispy_forms_tags %} ekledik 

ayrıca form u çağırdığımız yerde crispy bu şekilde uyguladık
{{ form | crispy }}

```




```
#### TOASTFY 

from django.contrib import messages

viewsy sayfasında import ediyoruz


redirect tan önce yazılır 
  messages.success(request, "Student saved successfully")


base.html

--mesajın geldiği yapı
{% if messages %}
    {% for message in messages %}
    {% if message.tags == "error" %}
    <div class="alert alert-danger">{{ message }}</div>
    {% else %}
    <div class="alert alert-{{ message.tags }}">{{ message }}</div>
    {% endif %}
    {% endfor %}
    {% endif %}

--mesajı belli sn sonra kaldırma için
<script src="{% static 'student/timeout.js' %}"></script>

```
```


static/student folder içinde

timeout.js=>

let element = document.querySelector('.alert');

setTimeout(function () {
  element.style.display = 'none';
}, 3000);

```


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