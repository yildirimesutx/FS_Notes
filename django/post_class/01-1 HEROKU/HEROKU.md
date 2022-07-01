**********HEROKU**********


--A---CLI METHODU

herokuya CLI ile deploy yönteminde, Github da olan repoyu local e clonlaya biliriz, yada localde çalıştığımız ve github a pushladığımız versiyonunu kullanabiliriz. 

bu yöntemde de .git klasörü  silerek devam edeceğiz. Heroku üzerinde yeni bir branch oluşturarak devam edeceğiz. 

1=>
ana dizinde Procfile isimli file oluşturduk,

Procfile =>


web: gunicorn main.wsgi     buradaki main project ismi ile aynı olacak


2=>
pip install gunicorn

3=>
```
settings.py içine

STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

STATICFILES_DIRS = (
os.path.join(BASE_DIR, 'static'),
)
```

4=>

pip install whitenoise

5=>
```
settings.py içinde MIDDLEWARE da en üste aşağıdaki kodu yazıyoruz. 

MIDDLEWARE = (
# Simplified static file serving.
# https://warehouse.python.org/project/whitenoise/
'whitenoise.middleware.WhiteNoiseMiddleware',
```
6=>
```
settings.py en altına yapıştırdık

STATICFILES_STORAGE =
'whitenoise.storage.CompressedManifestStaticFilesStorage'
```
7=>
```
settings.py da import ettik, ilgili kodu en alta yazdık

pip install django-heroku

import django_heroku

django_heroku.settings(locals())
```
8=>

https://cli-assets.heroku.com/heroku-x64.exe  clı KURDUK

kurulum yapıldıktan sonta VSC kapatılıp açılacak

heroku --version  kontrol edilecek

9=>


heroku login  komutu ile browsera aktarılarak login olduk

heroku create  app ismi yazdık uniq olacak



git init
heroku git:remote -a {App Name}
heroku git:remote -a app-todo-pro-ymx


git add .
git commit -am "Inıtıal setup"
git push heroku master    buradaki master ana branch ismi olacak main de olabilir. 

arada deploy aşamasında hata çıkarsA 

heroku config:set DISABLE_COLLECTSTATIC=1


10=>
9. madde de proje heroku sayfasında olması gerekiyor,

10 . madde de key ler ve db oluşturacağız.

sırası ile terminalden komutları yazıyoruz.
```
heroku config:set DEBUG = True

heroku config:set SQL_DATABASE=todoapidb

heroku config:set SQL_USER=postgres

heroku config:set SQL_PASSWORD=mete1254

heroku config:set SQL_HOST=localhost

heroku config:set SQL_PORT=5432


 secret_key i herokuda panelde Settings/Config Vars içinde tanımlıyoruz. özel karakterler terminalde sorun oluşturuyor.

SECRET_KEY = *tj+&w1!cfzmb&p5meb7mzwip68^bo7el#&=rk9r46!n(qt5r(

```
11=>

bu aşamadan sonra heroku tarafından verilen url çalışması gerekmektedir. 

son olarak oluşturulan db için terminalden  migrate işlemi yapıyoruz.

heroku run python manage.py migrate

12=>

proje üzerinde bir değişiklik yapıldığından 

terminalden 

git add .

git commit -m

ve 
git push heroku main/master hangi branch üzerinden devam ediliyorsa

heroku open projeyi açar

*HEROKU DB*

gönderilen projenin db overview/heroku postgres ile görüntüleyebilirz.

Dataclips/

girip sql komutları ile tabloları görüntüleyebiliyoruz, 

 


--B---GITHUB METHODU

1. proje dosyasında yukarıda belirtilen ilk 7 maddeyi ve 10.maddedeki key ve value leri  uyguluyoruz.

2. heroku da github bağlantısı seçilerek projeyi deploy ediyoruz olası alınacak  DISABLE_COLLECTSTATIC hatasında 

herokuda panelde Settings/Config Vars da aşağıda ifadeyi yazıyoruz.

key = DISABLE_COLLECTSTATIC  value = 1

3. en son db oluşturmak için aşağıda 

Heroku sağ üstte more diye bi buton var ona tıklayıp oradan da run console u seçip

python manage.py migrate komutu yazıyoruz










***PYTHONAYWHERE*****

bash paneli açtık
git clone proje url
proje klasörü içine girdik
env oluşturduk
source env/bin/activate
pwd ile dizin url alınıyor
alınan bu dizin web sayfanına code bölümüne ekledik
source ve working directory 
Virtualenv: sayfadaki bölüme env kısayolu ekledik


