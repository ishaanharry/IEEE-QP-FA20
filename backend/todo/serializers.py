# todo/serializers.py

from rest_framework import serializers
from .models import PlannedEvent, DeterminedEvent

class PlannedEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlannedEvent
        fields = ('id', 'title', 'startTime', 'endTime', 'duration', 'priority')

class DeterminedEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = DeterminedEvent
        fields = ('id', 'title', 'startTime')

        