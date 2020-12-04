from django.contrib import admin
from .models import PlannedEvent, DeterminedEvent

class PlannedEventAdmin(admin.ModelAdmin):
    list_display = ('title', 'startTime', 'endTime', 'duration', 'priority')

class DeterminedEventAdmin(admin.ModelAdmin):
    list_display = ('title', 'startTime', 'endTime')

# Register your models here.
admin.site.register(PlannedEvent, PlannedEventAdmin)
admin.site.register(DeterminedEvent, DeterminedEventAdmin)

