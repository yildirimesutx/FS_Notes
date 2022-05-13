# oop nin avantajı;
# -gruplandırması, 100 adet araba varsa 10 adet özelliği 1000 adet değişken tanımlanması gerekir
#  aynı zamanda metot da ekleyebiliriz(claslara ait func)
# func bir kere tanımlayıp gerektği yerlerde kullanılması

# pythonda ki collection type larında class yapıda olduğunun örneği

def print_type(data):
    for i in data:
        print(i, type(i))

test = [122, "mesut", [1,2,3], (1,2,3), {1,2,3}, True, lambda x:x]  
print_type(test)

#CLASS TANIMLAMA, ilk harf büyük olacak 

class Person: 
    name = "mesut"
    age  = 34


person1 = Person()  # mavi class resinden türettiklerimiz objeye  instance deniliyor
person2 = Person()

print(person1.name)
print(person1.name)

Person.job = "engineer" #mavi resime değişiklik yaptık ve instance tekrar çağırdık ve yapılan değişiklik instance ları etkiledi.

print(person1)
print(person1.job)

# CLASS ATTRIBUTE vs INSTANCE ATTRIBUTE


person1.location = "Turkey"

# print(person2.location) # instance yapılan değişiklik classı etkilemedi

person2.name = "Aaeron"

print(person1.name)

#  instance ların içindeki attribute instance attribute, class attributlere de class attribut olarak tanımlanıyor

# isim ve age gibi instance ait özellikler instance attribute olarak  tanımlanması gerekir

# SELF keyword
# class içindeki func lara methot diyoruz


# class Person:
#     name = "mesut"
#     age = 34

#     def test(self):
#         print("test")

# person1= Person()
# # person1.test()        #bu örnekte test() içinde self koymadık, aşağıdaki örneği yapabilmek için ekledik 

# # yukarıdaki instance methotu çağırdığımızda çalışmadı çünkü  class ile instance arasında bağ kurulmadı, instance lar fiziki elamanlar class yapısı soyut, bu baplantıyı SELF keywordu ile yapıyoruz, self yerine farklı keyword yazılabilir fakat bestpractiv bu şekilde


# Person.test(person1)


# instance lara methot tanımlama, yani bir bir func yazıyoruz bu methot ile class yapısında genel bir yapı oluşuyor, ve bu methotta belirlediğimiz değerler ile  instance tanımlarken girilmesi ile yeni instanceları dinamik olarak oluşturuyoruz. aşağıdaki örnekte

# class Personel:

#     def set_details(self, name, age): #bu methot ile tanımlanacak yeni instanceler için bir yapı oluşturuldu, instanceleri ilgilendiren attributeler için
#         self.name = name
#         self.age = age

#     def get_details(self):
#         print(self.name, self.age) 


# per = Personel()

# per.set_details("mesut yildirim", 34)  # bu methot ile tanımlama yapıyoruz

# per.get_details()  # bu methot ile tanımlanan değerleri alıyoruz


# statik method

# classtan ve instance dan bağımsız kendi başına çalışan func


# class Personel:

#     company = "Clarusway"

#     def set_details(self, name, age): 
#         self.name = name
#         self.age = age

#     def get_details(self):
#         print(self.name, self.age)

#     @staticmethod  # class ve instance dan bağımsız olduğu için self kullanmadık, django da statik method kullanmayacağız, djangonun class yspılarını kullanacağız
#     def salute():
#         print("hi there!")   

# person1 = Personel()
# person1.salute()

# SPECIAL METHODS

class Person:
    company = "clarusway"

    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    # def __str__(self):
    #     return f"{self.name} {self.age}"

    def get_details(self):
        print(self.name, self.age)  

person1 = Person("mesut", 33)  # yukarıda verilen tanımlamada set_details method unda tanımlamaları aldık ve bu methodu kullanarak instance tanımlamaları yaptık,  burada ise ilk instance tanımlarken ilgili özellikler içerisine yazılıyor. constracter yapıyoruz
# person1.get_details() 

liste = [4, 2, 3, 5 ,8]
print(liste)  #burada class yapıyı çağırdığımızda gösteriyor, fakat person1 çağırdığımızda göstermiyor

print(person1)   # bu şekilde çağırdığımızda instance içindeki attributleri göstermedi, bunun için str yapısını lullanıyoruz.

# print(person1.company)


# OOP’nin 4 Ana Prensibi: Encapsulation, Inheritence, Abstraction, Polymorphism

# encapsulation and abstraction

# encapsulation da private yapılar kullanılmaktadır. Bunn sebebi dışarıdan bir müdahale ile yapıyı bozmamaktadır. Pythonda da private yapı kullanılmamktadır, ulaşılmamsı istenilen değerlerin önüne _ koyulmuş _id bu şekilde, bu _id şekilde ifadelerde bu yapının değişmemesi gerektiği değişirse eğer yapının bozulacağını ifade eder, sonra gelişen süreçte bu tek çizgiyi __ iki kere yazılması ile ulaşılıp değiştirilmeyecek hale gelmiştir. 
#
 
# class Person:
#     company = "clarusway"

#     def __init__(self, name, age):
#         self.name = name
#         self.age = age
#         self._id = 5000
#         self.__id2 = 4000
    
#     def __str__(self):
#         return f"{self.name} {self.age}"

#     def get_details(self):
#         print(self.name, self.age)  

# person1 = Person("aeron", 34)
# # print(person1._id)
# # print(person1.__id2)
# print(person1._Person__id2) # bu şekilde yazıldığında kuralı deliyorve ilgili değere ulaşabiliyoruz

# Abstraction

# kod parçaçığı çalışırken arka tarafta nasıl ve ne şekilde işlemlerin yapıldığını bilinmemesinin istenilmesi, girdi çıktıya odaklanma 




# inheritance and polymorphism

class Person:
    company = "clarusway"

    def __init__(self, name, age, surname):
        self.name = name
        self.age = age
        self.surname = surname
        
       
    
    def __str__(self):
        return f"{self.name} {self.age}"

    def get_details(self):
        print(self.name, self.age, self.surname) 


# class Employee(Person):   # burada Person clasını miras aldık onun tüm attributleri alabiliyoruz
#      pass

# emp1 = Employee("Barry", 24)
# emp1.get_details()

# class Employee(Person):   # burada Person clasını miras aldık onun tüm attributleri alabiliyoruz
#         def __init__(self, name, age, path, surname):
#             # self.name = name
#             # self.age = age    # BURADA BELİRTİLEN AGE VE NAME PARENT DAN GELDİ, PARENT İN ATTİBUTLERİ ÇOK SAYIDA OLABİLİR BU SEBEPLE TEK TEK YAZILMASI UYGUN DEĞİL, BU SEBEPLE super() keywordunu kullanıyoruz
#             super().__init__(name, age, surname) #parent ta ulaşmak için super() kullanıldı
#             self.path = path



# emp1 = Employee("Barry", 24, "FS", "yıldırım")
# emp1.get_details()  

# yukarıda tanımladığımız path özelliği yazdırıldığı zaman gelmiyor, çünkü get_details miras alındığı classa ait, miras alınan clasta istenilen değerlerin alınmasına polymorphism deniyor

# polymorphism
# miras alınan clasta istenilen değerlerin alınmasına polymorphism deniyor
        
# class Employee(Person):   # burada Person clasını miras aldık onun tüm attributleri alabiliyoruz
#         def __init__(self, name, age, path, surname):
           
#             super().__init__(name, age, surname) 
#             self.path = path

#         # override işlemi deniliyor, miras alındıktan sonra istenilen attributle ile işimize gelenleri kullanıyoruz

#         def get_details(self):
#             # print(self.name, self.age, self.path) # 1.yol bu şekilde de yazılabilir, kullanmak istediklerimiz miras alınanlar ve yeni eklediğimiz özellik
#             super().get_details() #2.yol da bu şekildegwt_details çağırdık ve yeni eklenmesi gereken özelliği dahil ettik print ile
#             print(self.path)




# emp1 = Employee("Barry", 24, "FS", "yıldırım")
# emp1.get_details()  

# multi inheritance 

class Lang:
    def __init__(self, langs):
         self.langs=langs

    # def display_langs(self):
    #     print(self.langs)     


class Employee(Person, Lang):   
        def __init__(self, name, age, path, surname, langs):
           
            super().__init__(name, age, surname) 
            self.path = path
            Lang.__init__(self, langs) # burada ikinci gelen classa bu şekilde ulaştık

      

        def get_details(self):
           
            super().get_details()
            print(self.path)
            print(self.langs) # gösterilmesi için burada tanımladık, 2. yol display ile tanımlayıp tekrar disolay ile çağırabilirdik


emp1 = Employee("Barry", 24, "FS", "yıldırım", ["python", "js"])
emp1.get_details()
# emp1.display_langs() 
print(Employee.mro())  # bu komut bize class ın hangi classlardan türetildiğini bize veriyor.

