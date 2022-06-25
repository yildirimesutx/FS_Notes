from django.shortcuts import render
from .serializers import FlightSerializer, ReservationSerializer
from .models import Flight, Passenger, Reservation
from .permission import IsStafforReadOnly
from rest_framework import viewsets


class FlightView(viewsets.ModelViewSet):
    queryset = Flight.objects.all()
    serializer_class =  FlightSerializer
    permission_classes = (IsStafforReadOnly,) 





class ReservationView(viewsets.ModelViewSet):
    queryset = Reservation.objects.all()
    serializer_class =  ReservationSerializer


