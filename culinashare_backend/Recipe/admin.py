from django.contrib import admin
from .models import Category , Recipe , Ingredient , Rating




class RecipeAdmin(admin.ModelAdmin):
    list_display = ['title' , 'author' , 'description' ,]
    list_filter = ['categories']
    
admin.site.register(Recipe , RecipeAdmin)
admin.site.register(Category)
admin.site.register(Ingredient)
admin.site.register(Rating)

