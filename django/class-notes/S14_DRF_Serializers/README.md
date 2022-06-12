### SERIALİZERS 


pip install djangorestframework

INSTALLED_APPS = [
    ...
    'rest_framework',
]



İlgili app içinde serializers.py dosyası oluşturun.

serializers.Serializer:  ile models.py da tanımlanan tüm fields tekrar tanımlıyoruz.

Bu yöntemde CRUD işlemleri için ayrıca class içinde func ları tanımlamak gerekli.


tanımlamada models.py daki attributlerin kullanılması gerekiyor

serializers.py =>

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

*** ModelSerializer

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model= Student
        fields = ['id', 'first_name', 'last_name', 'number']
        # fields = '__all__'
        # exclude = ['id'] / ('id',) list veya tuple olarak yazılabilir. tuple daha hızlıdır.

<hr>

*** Validation

* Field-level validation



