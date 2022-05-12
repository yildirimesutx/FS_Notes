# nesneler
# özellikleri ve funcları
# oop nin avantajı;
# -gruplandırması, 100 adet araba varsa 10 adet özelliği 1000 adet değişken tanımlanması gerekir
#  aynı zamanda metot da ekleyebiliriz(claslara ait func)
# func bir kere tanımlayıp gerektği yerlerde kullanılması



import os
os.system('cls' if os.name == 'nt' else 'clear')

# def print_type(data):
#    for i in data:
#        print(i, type(i))


# test = [122, "barry", [1,2,3], (1,2,3), {1,2,3}, True, lambda x:x]

# print_type(test)

#  class tanımlama, ilk harf büyük olacak

# class Person:
#     name = "Barry"
#     age= 45


# person1 = Person() #bir classtan üretilmiş değişknelere instance oluyor
# person2 = Person()

# print(person1.name)
# print(person2.name)

# Person.job = "teacher"

# print(person1.job)

# # class attributes ve instance attributes

# person1.location = "Turkey"

# # bu durumda person2 etkilenir mi

# print(person2.location) 
# # instance yapılan değişiklik diğer instanceleri etkilemedi



# SELF keyword

# class Person:
#     name = "Barry"
#     age= 45

#     def test(self):
        
#         print("test") 

#     def set_details(self, name, age):
#         self.name = name
#         self.age = age

#     def get_details(self):
#         print(self.name, self.age)        


# person1 = Person()

# # class ta tanımlanan methotları çağırma, instance ile class ı bağlamak gerekiyor, bu bağlantıyı SELF ile yapıyoruz js deki this
# person1.test()

# person1.get_details()
# person1.set_details("Aaron", 37)
# person1.get_details()

# # static method

# class Person:
#     company = "Clarusway"

#     def set_details(self, name, age):
#         self.name = name
#         self.age = age

#     def get_details(self):
#         print(self.name, self.age) 

#       #yukarıdaki methodlar instance ihtiyac duyuyor çalışiması için
#       # aşağodaki static method bağımsız çalışabiliyor instance ihtiyaç duymuyor django da kullanılmıyor  

#     @staticmethod
#     def salute():
#         print("Hi there")

# person1 :Person()
# person1.salute()


# special method

# class Person :
#     company = "Clarusway"  # class attributu defler instance lerin 

#     def __init__(self, name, age):
#         self.name = name
#         self.age=age

#     def __str__(self):
#         return f"{self.name} {self.age}"  

#     def get_details(self):
#         print(self.name, self.age) 

# person1 = Person("barry", 34)
# person1.get_details()

# liste = [4,2,9,11,5]

# print(liste)
# print(person1)
# print(person1.__str__())


# encapsulation and abstraction


# class Person :
#     company = "Clarusway"  

#     def __init__(self, name, age):
#         self.name = name
#         self.age=age
#         self._id = 5000  # burada belirtilrn alt çizgi bu özelliğin değiştirilmeemsi gerektiğini işaret eder, private olmadığından dolayı erişebilir 
#         self.__id2=400 # bu şekilde olduğundan erişelemez ama 3. satırda olduğu gibi yazılırsa erişilir. özel çağırma


#     def __str__(self):
#         return f"{self.name} {self.age}"  

#     def get_details(self):
#         print(self.name, self.age)

# person1=Person("areon", 37)
# print(person1._id)

# # print(person1.__id2)
# print(person1._Person__id2) # 3.satır da geliyor kuralı deliyor özel bilgi



# inheritance and polymorphism


class Person :
    company = "Clarusway"  

    def __init__(self, name, age):
        self.name = name
        self.age=age
        self._id = 5000  
        self.__id2= 4000 

    def __str__(self):
        return f"{self.name} {self.age}"  

    def get_details(self):
        print(self.name, self.age)

class Lang:
    def __init__(self,langs):
        self.langs = langs

    def display_langs(self):
        print(self.langs)            

class Employee(Person, Lang): # burada Person nu miras alıyor ve tüm attributleri ve methodları alıyor
    # pass ilk başta pass geçerek yaptık örneği sonra personın dışında verilen başka özellik tanımladık , sonradan lang classınıda tanımladık multi oldu

    def __init__(self, name, age, path, langs):
        # self.name = name     #buradki ifadeleri sıfırdan tanımlamak yerine parenta havale ediyoruz
        # self.age=age

        super().__init__(name,age)
        self.path = path

        Lang.__init__(self, langs)

        # BURADA miras alınan diğer kısımlarıda yazıyoruz yeni attribute yazarken fakat bu durum çok özellik olan durumlarda özellikleri parente aktarıyoruz

    #override; miras alınan özellikleri değiştirmek işimize yarayan kısımları kullanmak
    def get_details(self):
        #  print(self.name, self.age, self.path)
        super().get_details()
        print(self.path)



emp1 = Employee("barry", 45, "FS", ["python", "js"])
emp1.get_details()
emp1.display_langs()


print(Employee.mro())  # bu komut ile hangi class lardan türetildiğyse onu gösteriyor


