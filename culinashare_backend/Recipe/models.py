from django.db import models
from django.core.validators import MinValueValidator , MaxValueValidator

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
    categories = models.ManyToManyField(Category , related_name='recipes')
    
    def __str__(self):
        return self.title

class Ingredient(models.Model):
    recipe = models.ForeignKey(Recipe , on_delete = models.CASCADE , related_name='ingredients')
    ingredient_name = models.CharField(max_length = 200)
    quantity = models.CharField(max_length=50)
    
    def __str__(self):
        return f"{self.quantity} of {self.ingredient_name} - {self.recipe}"

class Rating(models.Model):
    recipe = models.ForeignKey(Recipe , on_delete = models.CASCADE , related_name = 'Rating')
    user = models.CharField(max_length = 200)
    score = models.IntegerField(
        validators=[
            MinValueValidator(1),
            MaxValueValidator(5)
        ],help_text = "Enter a value between 1 - 5"
    )
    comments = models.TextField()
    
    def __str__(self):
        return f"{self.score} by {self.user} for {self.recipe.title}"