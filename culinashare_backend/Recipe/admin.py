from django.contrib import admin
from .models import Category , Recipe


admin.site.register(Category)

class RecipeAdmin(admin.ModelAdmin):
    list_display = ['title' , 'author' , 'description' , 'categories',]
    
admin.site.register(Recipe , RecipeAdmin)
