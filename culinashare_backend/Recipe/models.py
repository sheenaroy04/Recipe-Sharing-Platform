from django.db import models

# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length = 50 , unique=True)
    def __str__(self):
        return self.name
    
class Recipe(models.Model):
    recipe_id = models.AutoField(primary_key = True)
    title = models.CharField(max_length = 100)
    author = models.CharField(max_length = 40)
    description = models.TextField()
    preparation_time = models.PositiveIntegerField(help_text = "Preparation in minutes")
    cooking_time = models.PositiveIntegerField(help_text = "Cooking time in minutes")
    total_time = models.PositiveIntegerField(help_text = "Total time in minutes")
    servings = models.PositiveIntegerField()
    date_published = models.DateTimeField(auto_now_add = True)
    image = models.ImageField(upload_to='recipe-images/')
    categories = models.CharField(max_length=50)
    
    def __str__(self):
        return self.title
    