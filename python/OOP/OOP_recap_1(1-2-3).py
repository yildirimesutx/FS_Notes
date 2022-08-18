import os
os.system('cls' if os.name == 'nt' else 'clear')

# 1. LESSON/VIDEO-class-object
# class Personel:
#     pass

# per_1 = Personel()
# per_2 = Personel()

# print(Personel)
# print(per_1)
# print(per_2)

# per_1.isim="John"
# per_1.soyisim="Smith"
# per_1.eposta = "john.smith@firmam.com"


# per_2.isim="Mary"
# per_2.soyisim="Smith"
# per_2.eposta = "mary.smith@firmam.com"

# print(per_1.eposta)
# print(per_2.eposta)

# yukarıda Personel classını bos bıraktık, manuel olarak instanceların özelliklerini tanımladık, 

# aşağıda Personel class ını daha moduler hale getiiriyoruz, içerisine alması gereken attributleri yazdık, self ise sonradan tanımlayacağımız instance temsil ediyor.

# class Personel:
#     def __init__(self, isim, soyisim, maas):
#         self.isim = isim
#         self.soyisim = soyisim
#         self.maas = maas
#         self.eposta = f'{isim.lower()}.{soyisim.lower()}@firmam.com'

#     def  tam_isim(self):   #sonradan dahil ettik, yeni nesnelerin bilgilerine ulaşmak için bir method tanımladık.
#         return f'{self.isim} {self.soyisim}'   

#self türetilecek nesneyi ifade eder. self yerine başka ifade de yazılabilir fakat bestpractive

# self.ad = isim olarakda yazılabilir. per_1.ad olarak çağrılmalıdır

# per_1 = Personel(isim = "John", soyisim = "Smith", maas = 30000)
# per_2 = Personel("Mary", "Smith", 35000)

# print(per_1.isim)
# print(per_1.soyisim)
# print(per_1.maas)
# print(per_1.eposta)

# print(per_2.eposta)

# print(f'{per_1.isim} {per_1.soyisim}')

# burada yeni instanceların bilgilerine ulaşmak için teker teker yazmaktanda class içinde method tanımlarız.

# print(per_1.tam_isim()) #methodu çağırabilmek için () ile kullanılmalı

# print(Personel.tam_isim(per_1)) #yukarıdaki ifade ile aynı değeri döndürdü, argüman olarak class içine tanımladık

# 2.LESSON/VIDEO-class variable

# class variable : class içinde sabit kalan, nesnelerle paylaşılabilen, nesneler arası değişiklik göstermez

# class Personel:
#     personel_sayisi = 0
#     zam_orani = 1.05

#     def __init__(self, isim, soyisim, maas):
#         self.isim = isim
#         self.soyisim = soyisim
#         self.maas = maas
#         self.eposta = f'{isim.lower()}.{soyisim.lower()}@firmam.com'

#         Personel.personel_sayisi += 1
#         # self.personel_sayisi +=1 # bu şekilde tanımladığımıza sonucu vermedi,class a ait nesnelerin sayısını bulabilmek için class tan türetmemiz gerekiyor. Personel.personel_sayisi şeklinde

#     def  tam_isim(self):  
#         return f'{self.isim} {self.soyisim}' 

#     def zam_uygula(self):
#         # self.maas = int(self.maas*1.05)  # hard kod uyguladık, 
#         self.maas = int(self.maas * self.zam_orani)

#* class variable 2 farklı şekilde çağırabiliyoruz, Personel.zam_oranı, self.zam_oranı BU BÖLÜM ÇOK ÖNEMLİ, aşağıda kırmızı commentli bölümde ek örnek yaptım



# # tanımladığımız maas kat sayısına class üzerinden ulaşamıyoruz, ayrıca bir değişiklik olduğunda dahahızlı aksiyon alabilmek için zam katsayısını değişken olarak tanımlayacağız
# per_1 = Personel("John", "Smith", 30000)
# per_2 = Personel("Mary", "Smith", 35000)


# print(per_1.maas)
# per_1.zam_uygula()
# print(per_1.maas)

# print(Personel.zam_orani)
# print(per_1.zam_orani)     # per_1 içinde zam_oranı attributu yok, türetildiği class a bakıyor ve oradan alıyor
# print(per_2.zam_orani)


# # namespace

# # oluşturulan her bir class ve object için dict yapısında namespaca oluşturuyor python

# from pprint import pprint 

# #terminalde daha net görebilmek için import ettik

# pprint(per_1.__dict__)
# print("_____________________")
# pprint(Personel.__dict__)


# # Personel.zam_orani = 1.1 # class attributu değiştiğinde nesnelerinde attributleri değişti

# per_1.zam_orani = 1.1 # burada nesne üzerinden attributu değiştirdiğimizde sadece per_1 deki zam oranı değişti, zam_oranı attributunu önceden class içinden alıyordu şimdi ise per_1 içinde attriburt olarak tanımlandı. __dict__ de kontrol edildiğinde çıkmaktadır. 

# print(Personel.zam_orani)
# print(per_1.zam_orani)
# print(per_2.zam_orani)

# pprint(per_1.__dict__)

# print("_____________________")
# Personel.zam_orani = 1.5


# print(Personel.zam_orani)
# print(per_1.zam_orani)  # per_1 kendi attribute olduğu için onun zam_orani değeri değişmedi
# print(per_2.zam_orani)

# print(Personel.personel_sayisi)

#! Personel.zam_oranı şeklinde kullanılması durumunu açıklamak için  örnek yapıldı.

# class Personel:

#     zam_orani = 1.05

#     def __init__(self, isim, soyisim, maas):
#         self.isim = isim
#         self.soyisim = soyisim
#         self.maas = maas
#         self.eposta = f'{isim.lower()}.{soyisim.lower()}@firmam.com'

#     def  tam_isim(self):  
#         return f'{self.isim} {self.soyisim}' 

#     def zam_uygula(self):
#         # self.maas = int(self.maas*1.05)  # hard kod uyguladık, 
#         # Personel.maas = int(self.maas * Personel.zam_orani) # class ile çağırdığımızda nesneler için kullanıldığında çalışmadı
#         self.maas = int(self.maas * Personel.zam_orani)




# per_1 = Personel("John", "Smith", 30000)
# per_2 = Personel("Mary", "Smith", 35000)

# print(Personel.zam_orani)
# print(per_1.zam_orani)
# print(per_2.zam_orani)

# per_1.zam_orani = 1.1

# burada per_1 için zam_orani nı değiştirsek bile 
# self.maas = int(self.maas * Personel.zam_orani) burada tanımlanan zam_orani self ile değil Personel ile tanımlandığındna yeni değeri almadı 


# print(per_1.maas)
# print(per_1.zam_uygula()) # method içindeki Personel olarak tanımlandığında objeler üzerinde çalışmadı
# print(per_1.maas)





# Personel.zam_orani = 1.1



# print(Personel.zam_orani)
# print(per_1.zam_orani)
# print(per_2.zam_orani)


# print("__________")
# per_1.zam_orani = 1.5

# print(Personel.zam_orani)
# print(per_1.zam_orani)
# print(per_2.zam_orani)

# print(per_1.__dict__)


#* 3.LESSON/VIDEO-class method

# Regular Method : sıradan method 2. derste yaptığımız gibi,  nesnenin kendisini alır. argüman olarak self alıyor, nesne üzerinden çağırıyoruz.

# Class Method  : Argüman olarak class ı tanımlıyoruz. Bu tanımlanan method ile nesnelere uygulandığında tün bu classtan türetilmiş nesneler ve class etkileniyor

# Statik Method :methodun içerisinde class ya da nesneye ait bir tanımlamaya/attribute ihtiyaç duymadan yapılan methodlara denir.
# 
# 
#  
 






class Personel:
    personel_sayisi = 0
    zam_orani = 1.05

    def __init__(self, isim, soyisim, maas):
        self.isim = isim
        self.soyisim = soyisim
        self.maas = maas
        self.eposta = f'{isim.lower()}.{soyisim.lower()}@firmam.com'
        Personel.personel_sayisi +=1

    def  tam_isim(self):  
        return f'{self.isim} {self.soyisim}' 

    def zam_uygula(self):
        self.maas = int(self.maas * self.zam_orani)

    @classmethod
    def zam_oranini_belirle(cls, oran):
        # cls.zam_orani = oran # class in içinde bir attributü tanıttığımız i.in cls.zam_oranı şeklinde kullandık 1. kullanım
        eski_oran = cls.zam_orani # 2. tanımlama, burada esli_oran method içinde tanımlandı bu sebeple cls kullanılmadı, eski oranı tanımladık, sonra yeni değeri tanımlanık
        cls.zam_orani = oran
        print(f'Eski zam orani ({eski_oran}) güncellendi. Yeni oran: {cls.zam_orani}')

    @classmethod
    def from_string(cls, per_str):  #per_str şeklinde gelen stringi al ve split ile ayır, isim, soyisim, maas şeklinde
      isim, soyisim, maas = per_str.split("-")
      return cls(isim, soyisim, maas)

    @staticmethod
    def mesai_gunu(gun):
        if gun.weekday() == 5 or gun.weekday() == 6:
            return "hafta sonu"
        else:
            return "hafta ici"



# yukarıda tanımlanan staticmethod için bir örnek yaptık
import datetime
tarih = datetime.date(2020,3,27)
print(tarih.day)
print(Personel.mesai_gunu(tarih))








per_1 = Personel("John", "Smith", 30000)
per_2 = Personel("Mary", "Smith", 35000) 

# class method tanımlanırken, @classmethod dekaretörü kullanılır, argüman olarak class ı temsilen "cls" anahtar sözcüğünü alır. Argüman ile birlikte yeni tanımlayacağımız değeride ekledik.            



# Personel.zam_oranini_belirle(oran) # içerisine alacağı değer "oran" olrak tanımlandığı için syntax ı bu şekilde olcak,



# # Personel.zam_oranini_belirle(1.3)
# Personel.zam_orani = 1.3  2. derste yaptığımız tanımlama ile aynı

# per_1.zam_oranini_belirle(1.5) # nesne üzerinden method çağrıldığında tüm classtan türetilmiş nesneler etkileniyor


print(Personel.zam_orani)
print(per_1.zam_orani)
print(per_2.zam_orani)

print(per_1.__dict__)

# class methoddan yapılandırma ile yeni nesne üretilmesi 

# @classmethod
#     def from_string(cls, per_str):  #per_str şeklinde gelen stringi al ve split ile ayır, isim, soyisim, maas şeklinde
#       isim, soyisim, maas = per_str.split("-")
#       return cls(isim, soyisim, maas)


new_per_1 = Personel.from_string("Sam-Winchester-40000")

print(new_per_1.maas)
print(new_per_1.eposta)


#tanımlamalar dışında bir tarih func çalışması
# from datetime import datetime

# timestamp = 1545730073
# dt_object = datetime.fromtimestamp(timestamp)
# print(dt_object)



