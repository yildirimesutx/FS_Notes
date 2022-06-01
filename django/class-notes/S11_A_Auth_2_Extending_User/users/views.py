from django.shortcuts import render, redirect, HttpResponse

from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from .forms import UserForm, UserProfileForm

from django.contrib.auth.forms import AuthenticationForm

# Create your views here.

def home(request):
    return render(request, 'users/home.html')

def user_logout(request):

    messages.success(request, 'You logged out!')
    logout(request)
    return redirect('home')    


def register(request):
    form_user =UserForm()
    form_profile =  UserProfileForm()
    
    if request.method == 'POST':
        form_user = UserForm(request.POST)
        form_profile= UserProfileForm(request.POST, request.FILES) #YÜKLENEN DOSYALAR İÇİN FILES YOLU AÇTIK

        if form_user.is_valid() and form_profile.is_valid():
            user =  form_user.save()
            profile = form_profile.save(commit=False)  #28.user  satır çalıştı fakat profile kaydı yapmıyor, db kaydetme form dan gelen bilgiler ile form oluşturduk,  forms u tanımlarken profile exculud tanımladığımız için user gelmedi ve biz meoluşan user ile profile formu çakıştırdık, forms ta profile nin tüm bilgilerini alsaydık formu dolduran kullanıcı kendisi user select ini görüp userlar arasından seçme yapacaktı
            profile.user = user
            profile.save()

           

            login(request, user)
            messages.success(request, 'You registered successfully!')

            return redirect('home')

    context = {
         "form_user": form_user,
         "form_profile": form_profile
     } 

    return render(request, 'users/register.html', context) 



def user_login(request):
    form = AuthenticationForm(request, data=request.POST)

    if form.is_valid():
        # username = form.cleaned_data('username')
        # password = form.cleaned_data('password')

        # user = authenticate(username=username, password=password)
     
     #yukarıdaki uç satır için get_user tek başına yeterli

        user = form.get_user()

        if user :
            messages.success(request,'login successfully')
            login(request, user)
 
            return redirect('home')  # form doluysa buraya değilde aşağıyı render ediyor

    return render(request, 'users/user_login.html', {'form': form}) #context içinde tanımladık    