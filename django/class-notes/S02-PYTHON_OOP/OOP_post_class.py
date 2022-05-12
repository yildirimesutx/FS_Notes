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

class Person:
    name = "mesut"
    age = 34

    def test():
        print("test")

        








