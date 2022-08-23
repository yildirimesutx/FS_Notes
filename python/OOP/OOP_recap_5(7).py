
#* Encapsulation, kapsulleme, private ve public degiskenler

class Personel:


    def __init__(self, isim, soyisim, maas):
       self.isim = isim.title()
       self.soyisim = soyisim.title()
       self.maas = maas
       self.__zam_orani = 1.05

    def zam_uygula(self):
        self.maas = int(self.maas*self.__zam_orani)

    def getZamOrani(self):
        return self.__zam_orani

    def __setZamOrani(self, oran):
       self.__zam_orani= oran       



per_1 = Personel("John", "Wick", 13000)



# print(per_1.isim)
# print(per_1.maas)
# print(per_1.zam_orani)
# print(per_1.__dict__) # per_1 oluşturuken zam_orani değişkenini constin, sabit bir rakam olduğu için, tanımlama esnasında ek olarak yazmadık, 


# bazı attributlere sınıf dısından ulasilmasini engellemek
# burada amacımız zam_orani attributine disaridan mudahaleyi kesmek,
# attributleri private yapabilmek için başlarına __ ikiadet alt çizgi getiririz 


# per_1.zam_orani = 1.2
# print(per_1.maas)
# per_1.zam_uygula()
# print("Yeni maas miktari :", per_1.maas)


# ------------------------------------------------------------

#* Private yapıdaki attributu GORMEK için method yazıyoruz.

# def getZamOrani(self):
#     return self.__zam_orani

#burada get getirilmesi gerekmektedir. 

# print(per_1.getZamOrani())


# aynı zamanda bu methodlarıda private yapabiliyoruz


#* Private yapıdaki attributu DEGISTIRMEK için method yazıyoruz.


# def setZamOrani(self, oran):
#     self.__zam_orani= oran


# print(per_1.getZamOrani())
# per_1.setZamOrani(1.2)
# print(per_1.getZamOrani())

# per_1.zam_uygula()
# print(per_1.maas)

print(help(per_1))