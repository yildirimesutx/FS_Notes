from rest_framework import serializers
from .models import Student
from django.utils.timezone import now




# class StudentSerializer(serializers.Serializer):
#     first_name = serializers.CharField(max_length=50)
#     last_name= serializers.CharField(max_length=50)
#     number = serializers.IntegerField()
#     # id = serializers.IntegerField()

#     def create(self, validated_data):
#         return Student.objects.create(**validated_data)

#     def update(self, instance, validated_data):
#         instance.first_name = validated_data.get('first_name', instance.first_name)
#         instance.last_name = validated_data.get('last_name', instance.last_name)
#         instance.number = validated_data.get('number', instance.number)
#         instance.save()
#         return instance


class StudentSerializer(serializers.ModelSerializer):
    days_since_joined = serializers.SerializerMethodField()
    class Meta:
        model= Student
        # fields = ['id', 'first_name', 'last_name', 'number', 'days_since_joined']
        fields = '__all__'
        # exclude = ['id'] / ('id',) list veya tuple olarak yazılabilir.
        #  
    def validate_first_name(self, value):
        
        if value.lower() == 'rafe':
            raise serializers.ValidationError("Rafe can not be our student!")
        return value  

    def validate_number(self, value):

        if value > 2000:
            raise serializers.ValidationError("Student number can not be greater than 2000!")  
        return value
    
    def get_days_since_joined(self, obj):
        return (now() - obj.register_date).days

