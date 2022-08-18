
import os
os.system('cls' if os.name == 'nt' else 'clear')

#* 4.LESSON/VIDEO-Inherintance

class Personel:
    
    zam_orani = 1.05

    def __init__(self, isim, soyisim, maas):
        self.isim = isim
        self.soyisim = soyisim
        self.maas = maas
        self.eposta = f'{isim.lower()}.{soyisim.lower()}@firmam.com'
        # print(f"Yeni personel tanımlandı {isim} {soyisim}")


    def  tam_isim(self):  
        return f'{self.isim} {self.soyisim}' 

    def zam_uygula(self): 
        self.maas = int(self.maas * self.zam_orani)



# class Yazilimci: bu ifade ile yeni bir class tanımlıyoruz

# class Yazilimci(Personel): bu ifade ile inheritance yaptık,


# aşağıdaki örnekte Personel sınıfından inherit yapıldı
#METHOD RESOLUTION ORDER (kalıtım zinciri),aşağıdaki örneğin adı

# => Sub class oluşturulması

# class Yazilimci(Personel):
#     pass



# yaz_1 = Yazilimci("John", "Smith", 30000)
# yaz_2 = Yazilimci("Mary", "Smith", 35000)
# print(yaz_1.eposta)
# print(yaz_2.eposta)


# print(help(Yazilimci)) bu komut bize class hakkında bilgi veriyor, 

# print(yaz_1.maas)
# yaz_1.zam_uygula()
# print(yaz_1.maas)

# yukarıdaki zam_uygula() methodu zam_oranı attributunu Personel class dan aldı, Yazilimci class ı boş olduğundan dolayı


#=> Sub class a attribut tanımlanması

# class Yazilimci(Personel):
#     zam_orani = 1.1


# yaz_1 = Yazilimci("John", "Smith", 30000)
# yaz_2 = Yazilimci("Mary", "Smith", 35000)


# print(yaz_1.maas)
# yaz_1.zam_uygula()
# print(yaz_1.maas)

# Yazilimci class ında yeni zam_orani tanımladığımızda zam_orani methodu Yazilimci class ından aldı attributu, aynı zamanda Personel sınıfını alıp override yaptık

#alt sınıfta yapılan değişiklikler ana sınıfı etkilemez


#=> Sub class a attribut tanımlanması

class Yazilimci(Personel):
    zam_orani = 1.1

    def __init__(self, isim, soyisim, maas, prog_dili):
        # Personel.__init__(self, isim, soyisim, maas)
        super().__init__(isim, soyisim, maas)
        self.prog_dili = prog_dili
        # print(f"Yeni personel yazılımcı kategorisine tasındı {self.isim} {self.soyisim}")

# yukarıda init ile yeni tanımlamalar için oluşturuyoruz,
# def init ile içinde olması gereken attirbutleri yazdık, ana class ın kileri dahil ettik, ayrı olarak eklemek istediğimiz atributu yazdık,
# sonra methodun içinde tek tek tanımlama yapmamk için ana classtan aldığımız attributleri Personel.__init__(self, isim, soyisim, maas) şeklinde tanımladık, ek olarak yazdığımız prog_dili için tanımlama yaptık,


# ONEMLI ==> 
 
# Personel.__init__(self, isim, soyisim, maas) BU İFADENİN DAHA DOĞRU ŞEKLİ, ek olarak self de kullanmıyoruz. bu kullanım oluşturulan alt sınıftan da alt sınıfoluşturulmasını sağlıyo
# super().__init__(isim, soyisim, maas)


#yukarıda personel ve alt class ta print ile çalışma sırasını kontrol ettik.


# yaz_1 = Yazilimci("John", "Smith", 30000, "python")
# # yaz_2 = Yazilimci("Mary", "Smith", 35000, "javascript" )


# print(yaz_1.eposta)
# print(yaz_1.prog_dili)


#  ikinci sub class oluşturulması

class Mudur(Personel):

    def __init__(self, isim, soyisim, maas, personeller=None):
        super().__init__(isim, soyisim, maas)
        if personeller is None :
           self.personeller = []
        else:   
           self.personeller = personeller

    def personel_ekle(self, per):
           if per not in self.personeller:
              self.personeller.append(per)

    def personel_cikar(self, per):
        if per in self.personeller:
            self.personeller.remove(per)

    def personelleri_listele(self):
        for e, per in enumerate(self.personeller):
            e += 1
            print(e, per.tam_isim())        




# yukarıda gerçek bir durumu canlandırdık, mdr_2 nesnesi gibi ilk oluşturuluken personel olmazsa hata alınmasın diye None tanımladık ve şart tanımladık
       


yaz_1 = Yazilimci("John", "Smith", 30000, "python")
yaz_2 = Yazilimci("Mary", "Smith", 35000, "javascript")

# mdr_1 = Mudur("John", "Wick", 50000,[yaz_1, yaz_2])

# mdr_2 = Mudur("John", "Snow", 50000)
mdr_1 = Mudur("John", "Wick", 50000,[yaz_1])

print(mdr_1.tam_isim())
print("______________")
mdr_1.personelleri_listele()
print("______________")
mdr_1.personel_ekle(yaz_2)
print("______________")
mdr_1.personelleri_listele()
mdr_1.personel_cikar(yaz_1)
mdr_1.personelleri_listele()



# isinstance()

print(isinstance(yaz_1, Personel))
print(isinstance(yaz_1, Mudur))

# nesnelerin hangi classa ait olduğunu verir
print(isinstance(123, int))

# issubclass()
#classların hangi clastan türetildiğini verir.
print(issubclass(Mudur, Yazilimci))
