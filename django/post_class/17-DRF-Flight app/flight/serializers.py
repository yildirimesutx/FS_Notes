from rest_framework import serializers
from .models import Flight, Passenger, Reservation


class FlightSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Flight
        # fields = '__all__'
        fields = (
            "id",
            "flight_number",
            "operation_airlines",
            "departure_city",
            "arrival_city",
            "date_of_departure",
            "etd"
        )


class PassengerSerializer(serializers.ModelSerializer):

    class Meta:
       model = Passenger
       fields = '__all__'         


class ReservationSerializer(serializers.ModelSerializer):

    passenger = PassengerSerializer(many=True, required=False)
    # flight = FlightSerializer()
    flight = serializers.StringRelatedField()
    user = serializers.StringRelatedField()
    flight_id = serializers.IntegerField(write_only=True)
    user_id = serializers.IntegerField(write_only=True, required=False)


    class Meta:
        model = Reservation
        # fields = '__all__'
        fields =(
           "id",
           "flight",
           "flight_id",
           "user",
           "user_id",
           "passenger"
        )