from django.shortcuts import render
from .serializers import FlightSerializer
from .models import Flight, Passenger, Reservation
from rest_framework import viewsets


class FlightView(viewsets.ModelViewSet):
    queryset = Flight.objects.all()
    serializer_class =  FlightSerializer   


