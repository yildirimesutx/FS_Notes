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

class Personel:
    def __int__(self, isim, soyisim, maas):
        self.isim = isim
        self.soyisim = soyisim
        self.maas = maas


per_1  = Personel(isim = "John", soyisim = "Smith", maas = 30000)
per_2 = Personel("Mary", "Smith", 35000)

print(per_1.isim)
print(per_1.soyisim)




