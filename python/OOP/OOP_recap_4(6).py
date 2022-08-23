#  property decorators, setters, getters ve deleters kavramlarını öğreniyoruz. @property, @degisken.setter, @degisken.deleter 

class Personel:

    zam_orani = 1.05

    def __init__(self, isim, soyisim, maas):
        self.isim = isim.title()
        self.soyisim = soyisim.title()
        self.maas = maas

    @property
    def eposta(self):
        return f"{self.isim.lower()}.{self.soyisim.lower()}@firmam.com"

    @property
    def tam_isim(self):
        return f"{self.isim} {self.soyisim}" 
    
    @tam_isim.setter
    def tam_isim(self, ad):
        isim, soyisim = ad.split(" ")
        self.isim = isim
        self.soyisim = soyisim

    @tam_isim. deleter
    def tam_isim(self):
       print("degiskenler silindi")
       self.isim= None
       self.soyisim=None    




    # def __str__(self):
    #    return f"{self.tam_isim()}- {self.eposta}"





# print(str(per_1))

# ! @property 
# yukarıda nesneyi türetirken isim olrak "mesut" yazdık, sonradan fark ettik ki "John" yazılması gerekiyordu. John olarak değişiklik yaptık

#Fakat init içinde tanımladığımız eposta değişmedi, tam_isim() methodugüncel doğru ismi verdi. bunun sebebi init ilk oluşturulurken aldı, method ise güncel değeri aldı.

# bu durumu düzeltmek için eposta attributunu method olarak tanımlayacağız. method olarak tanımlandığı için eposta() şeklinde kullanılması gerekir.

# son olarak burada  tanımladığımız methodu "eposta()"" olrak kulllanılması gerekiyor, bu methodu attribut olarak kullanabilmek için @property decoretörü kullanıyoruz



#! @method_name.setter

# tanımladığımız methodu attribu gibi kullanmak istediğimizde ve bu methodu kullanarak attirbutlere ulaşıp güncelleme yapabiliyoruz.


# nesneyi tekrar oluşturmadan, nesne değişkenlerini yeniden oluşturmuş olduk(set etmiş)


# ilgili methodu @property ile sardık sonra aynı methodu @setter ile yeniden oluşturduk.

#! deleter

# delete işlemi içim yeni bir method tanımladık,  


per_1 = Personel("mesut", "mete", 13000)
# per_1.isim="John"



per_1.tam_isim = "John Wick"
print(per_1.isim)
print(per_1.eposta)
print(per_1.tam_isim)

del per_1.tam_isim
print(per_1.isim)
