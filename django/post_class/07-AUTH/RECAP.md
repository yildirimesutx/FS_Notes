### 1 .admin panelden kullanıcı oluşturma

###  shell-terminalile kullanıcı oluşturma
  
  *** 
  -- python manage.py shell 

  shell içinde import ediyoruz 

 -- from django.contrib.auth.models import User

 # create_user(username, email=None, password=None, **extra_fields)

username verilmesi zorunlu diğerleri olmadanda user oluşturulabiliyor

# Creates, saves and returns a User.
user1 = User.objects.create_user('myusername', 'myemail@crazymail.com', 'mypassword')
 
 iki farklı seçilde oluşturulur, ilk değer username temsil eder, diğerleri karışmaması iiçin keyler yazılır


user2 = User.objects.create_user('john', email='lennon@thebeatles.com', password='johnpassword', is_staff=True)


örn :
user1 = User.objects.create_user('sinan', 'sinan@mail')
şeklinde sorgulayailiyoruz
user1.username
user1.email


### Auth views


*****LOGIN********

 ***views.py kullanılarak kullanıcı işlemleri

ana urls.py

 path('accounts/', include('django.contrib.auth.urls'))
 
 8000/accounts/ ile sayfalara gidiyoruz
```
accounts/login/ [name='login']
accounts/logout/ [name='logout']
accounts/password_change/ [name='password_change']
accounts/password_change/done/ [name='password_change_done']
accounts/password_reset/ [name='password_reset']
accounts/password_reset/done/ [name='password_reset_done']
accounts/reset/<uidb64>/<token>/ [name='password_reset_confirm']
accounts/reset/done/ [name='password_reset_complete']
```
 => templates/registration/login.html

 <h1>Login Page</h1>


<form action="" method="POST">

     {% csrf_token %} 

    {{ form.as_p }}

    <input type="submit" value='Login'>
</form>

setting.py eklendi

LOGIN_REDIRECT_URL = "/" 

LOGİN İŞLEMİ OLDUKTAN SONRA HANGİ SAYFAYA GİDECEĞİNİZ BELİRTTİK

burada home page and / olabilir



****** REGISTRATION ****

views.py  

from django.contrib.auth.forms import UserCreationForm


def register(request):
    form = UserCreationForm()

    context = {
        'form':form
    }

    return render(request, 'registration/register.html', context)

urls.py

 path('register', register, name='register')

registration/register.html
<h1>Register Page</h1>


<form action="" method="POST">

{% csrf_token %}
   {{form.as_p}}

   <input type="submit" value='register'>

</form>

 yukarıda yazmış olduğum hali ilede oluşturulam html sayfasına form yapısı geliyor fakat kayıt işlemi olmuyor, bu sebeple def register()
 bir kaç işlem yapmalıyız

def register(request):

    if request.method == 'POST':   
          form = UserCreationForm(request.POST)

          if form.is_valid():
            form.save()

#buraya kadar normal bir kontrol işlemi yaptık, form dolduruldu mu? bundan sonra login işleminin sağlanması için devam ediyoruz,

   login, authenticate i import ediyoruz

   form cleaned yapılarını django yapısından aldık, aşağıdaki username ve password u da sayfayı sağ tıklayıp incelediğimizde gönderdiğimiz formdan aldık
 
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password1')

            user = authenticate(username=username,
            password=password)
            login(request, user)
            return redirect('home')



    form = UserCreationForm()
    context = {
        'form':form
    }

    return render(request, 'registration/register.html', context)

   

******PASS-CHANGE***


urls.py içine 

import yapıoruz

from django.contrib.auth import views as auth_views


path ile ilgili change sayfasına yönlendirdik

8000/change-password

 path(
        'change-password',
        auth_views.PasswordChangeView.as_view(template_name='registration/change-password.html'), name='change-password'
    ),


******* PASS-RESET *******




path('reset-password', auth_views.PasswordResetView.as_view(template_name='registration/reset-password.html'), name='reset-password'),


<h1>Password Reset Page</h1>


<form action="" method="POST">

{% csrf_token %}

{{form.as_p}}

<input type="submit" value="reset password">

</form>


settings

EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'


********* LOGOUT ************

LOGOUT_REDIRECT_URL = "/"

8000/accounts/logout denildiğinde sayfadan çıkış işlemi oluyor



******* SPECIAL PAGE-DECORATOR ****


views.py sayfasına 

from django.contrib.auth.decorators import login_required

import etik,

ilgili def kısmının üstüne


@login_required  ekledik
def my_view(request):
    ...
