### SERIALIZERS 


pip install djangorestframework

INSTALLED_APPS = [
    ...
    'rest_framework',
]



İlgili app içinde serializers.py dosyası oluşturun.

serializers.Serializer:  ile models.py da tanımlanan tüm fields tekrar tanımlıyoruz.

Bu yöntemde CRUD işlemleri için ayrıca class içinde func ları tanımlamak gerekli.


tanımlamada models.py daki attributlerin kullanılması gerekiyor

serializers.py 

from rest_framework import serializers

class StudentSerializer(serializers.Serializer):
    first_name = serializers.CharField(max_length=50)
    last_name= serializers.CharField(max_length=50)
    number = serializers.IntegerField() 

CRUD işlemleri yapılabilmesi için devamına ekliyoruz.

    def create(self, validated_data):
        return Student.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.number = validated_data.get('number', instance.number)
        instance.save()
        return instance


PUT : tamamının update edilmesi
PATCH : yalnızca birkaç alanın update edilmesi


<hr>

# ModelSerializer

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model= Student
        fields = ['id', 'first_name', 'last_name', 'number']
        # fields = '__all__'
        # exclude = ['id'] / ('id',) list veya tuple olarak yazılabilir. tuple daha hızlıdır.

<hr>

# Validation

validate lere giriş adminden yapılan işlemler için kısıltlama getirmez

* Field-level validation

serializers.py da ilgili serializer altına validatorların tanımı yapılabilir.

validate_ sonra ilgili attribut geliyor

def validate_first_name(self, value):
        
        if value.lower() == 'rafe':
            raise serializers.ValidationError("Rafe can not be our student!")
        return value  

    def validate_number(self, value):
        
        if value > 2000:
            raise serializers.ValidationError("Student number can not be greater than 2000!")  
        return value

* Object-level validation  

SerializerMethodField() methodu kullandık, bu method, modelden gelen tabloya serializers işlemi uygularken ek olarak veri eklemek için kullanılıyor

class içinde tanımladık => 


 days_since_joined = serializers.SerializerMethodField()

 def get_days_since_joined(self, obj):
        return (now() - obj.register_date).days

# Relational fields

*Nested Serializer
öğrenci tablomuza ayrıca ForeignKey ile path tablomuzu bağladık

path = models.ForeignKey(Path,related_name='students', on_delete=models.CASCADE)

ForeignKey tanımlarken related_name='students' isimlendirdiğimiz atribut ile geliyor ÖNEMLİ

example :her bir path altında tanımlanan öğrenciler gözüksün 


class PathSerializer(serializers.ModelSerializer):

    students = StudentSerializer(many=True)
    BU DURUMDA PATH TE TANIMLANAN ATTRİBUT ALTINDA TOPLANIYOR, bütün özellikleri geliyor ONA BAĞLI ATTİBUTE KAYITLI OLAN OBJELER 

    # students = serializers.StringRelatedField(many=True)
    bu kullanımda ise students de gösterilmesi gereken kısımları belirliyoruz modeldeki self te tanımlanan çıkmaktadır
    return f"{self.number}-{self.first_name} {self.last_name}" toplu çağırmak için tuple kullandık

    # students = serializers.PrimaryKeyRelatedField
    (read_only=True, many=True)
   bu path altındaki id leri veriyor
    PrimaryKeyler ile birlikte göstermektedir

    class Meta:
        model = Path
        fields = '__all__'



