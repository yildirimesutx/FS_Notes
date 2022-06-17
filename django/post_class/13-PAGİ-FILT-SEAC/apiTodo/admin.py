from django.contrib import admin
from .models import Todo


class TodoAdmin(admin.ModelAdmin):
    list_display = ['task', 'priority', 'done', 'updateDate', 'createdDate']

# Register your models here.

admin.site.register(Todo, TodoAdmin)
