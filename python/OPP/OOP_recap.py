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
    def __init__(self, isim, soyisim, maas):
        self.isim = isim
        self.soyisim = soyisim
        self.maas = maas
        self.eposta = f'{isim.lower()}.{soyisim.lower()}@firmam.com'

    def  tam_isim(self):   #sonradan dahil ettik, yeni nesnelerin bilgilerine ulaşmak için bir method tanımladık.
        return f'{self.isim} {self.soyisim}'   

#self türetilecek nesneyi ifade eder. self yerine başka ifade de yazılabilir fakat bestpractive

# self.ad = isim olarakda yazılabilir. per_1.ad olarak çağrılmalıdır

per_1 = Personel(isim = "John", soyisim = "Smith", maas = 30000)
per_2 = Personel("Mary", "Smith", 35000)

print(per_1.isim)
print(per_1.soyisim)
print(per_1.maas)
print(per_1.eposta)

print(per_2.eposta)

print(f'{per_1.isim} {per_1.soyisim}')

# burada yeni instanceların bilgilerine ulaşmak için teker teker yazmaktanda class içinde method tanımlarız.

print(per_1.tam_isim()) #methodu çağırabilmek için () ile kullanılmalı

print(Personel.tam_isim(per_1)) #yukarıdaki ifade ile aaynı değeri döndürdü, argüman olarak class içine tanımladık




