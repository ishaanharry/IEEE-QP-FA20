from django.db import models
from django.utils import timezone

# Create your models here.

class Todo(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    completed = models.BooleanField(default=False)
    ongoing = models.BooleanField(default=False)
    startTime = models.DateTimeField(auto_now=False, default=timezone.now)
    endTime = models.DateTimeField(auto_now=False)

    def _str_(self):
        return self.title
        