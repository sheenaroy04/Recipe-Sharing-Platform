from rest_framework import serializers
from .models import Category , Recipe , Ingredient , Rating


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'
        
class RecipeSerializer(serializers.ModelSerializer):
    
    average_score =serializers.FloatField(read_only=True)
    number_of_ratings = serializers.IntegerField(read_only=True)
    
    class Meta:
        model = Recipe
        fields = '__all__'
        read_only_fields = ['date_published']
    
    # def create(self,validated_data):
    #     categories = validated_data.pop('categories' , '')
    #     recipe = Recipe.obejcts.create(**validated_data)
    #     recipe.categories.set(categories)
    #     return recipe

class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = '__all__'
        
class RatingSerializer(serializers.ModelSerializer):
    username = serializers.CharField(max_length=50 , read_only=True)
    
    class Meta:
        model = Rating
        fields = '__all__'