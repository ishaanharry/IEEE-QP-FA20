from django.db import models
from django.utils import timezone

# Create your models here.

class PlannedEvent(models.Model):

    class Priority(models.IntegerChoices):
        ONE = 1
        TWO = 2
        THREE = 3
        FOUR = 4
        FIVE = 5

    title = models.CharField(max_length=120)
    startTime = models.DateTimeField(auto_now=False, default=timezone.now)
    endTime = models.DateTimeField(auto_now=False)
    duration = models.PositiveIntegerField()
    priority = models.IntegerField(choices=Priority.choices)


    def _str_(self):
        return self.title


class DeterminedEvent(models.Model):
    title = models.CharField(max_length=120)
    startTime = models.DateTimeField(auto_now=False, default=timezone.now)
    endTime = models.DateTimeField(auto_now=False)