#method resolution order- katılım zinciri
# pythonda inherit edilen class da yeni eklem vs olduğunda python derleyicisi ilkönce sub class a sonra ana clası kontrol ediyor. buna kalıtım zinciri diyoruz.

# DUNDER METHODS- double under method

# def __repr__(self):
#     pass

# def __str__(self):
#     pass





class Personel:


    """
    bu satıir help komutu ile okunabilmektedir. bu alana genel aciklama yapabiliriz
    """
    
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
    
    def __repr__(self):
        # return "bu test mesajidir"
        return f"Personel({self.isim}, {self.soyisim}, {self.eposta} )"

#geliştiriciler için bilgi        



    def __str__(self):
       return f"{self.tam_isim()}- {self.eposta}"
# kullanıcılar için bilgi   

    def __add__(self, other):
        return self.maas + other.maas     



per_1 = Personel("John", "Smith", 30000)
per_2 = Personel("Mary", "Smith", 35000) 


# print(per_1)
# print(str(per_1))
# print(repr(per_1))

# #yukarıdaki iki komut ile aşağıdaki iki komut aynı sonucu veriyor
# print(per_1.__str__())
# print(per_1.__repr__())


# print(help(per_1))

# print(1+3)
# print(int.__add__(1,3))

print(per_1+ per_2)
print(per_1.__add__(per_2))
print(Personel.__add__(per_1, per_2))
#yukarıdaki 3 komut aynı sonucu verir

