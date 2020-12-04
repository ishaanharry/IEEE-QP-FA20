from django.shortcuts import render
from rest_framework import viewsets
from .serializers import PlannedEventSerializer, DeterminedEventSerializer
from .models import PlannedEvent, DeterminedEvent

# Create your views here.

class PlannedEventView(viewsets.ModelViewSet):
    serializer_class = PlannedEventSerializer
    queryset = PlannedEvent.objects.all()

class DeterminedEventView(viewsets.ModelViewSet):
    serializer_class = DeterminedEventSerializer
    queryset = DeterminedEvent.objects.all()

