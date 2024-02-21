from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Category , Recipe , Ingredient , Rating
from .serializers import CategorySerializer , RecipeSerializer , IngredientSerializer , RatingSerializer



class CategoryView(APIView):
    def get(self,request):
        
        response = Category.objects.all()
        serializer = CategorySerializer(response , many=True)
        return Response(serializer.data)
    
class RecipeView(APIView):
    def get(self,request,recipe_id=None,categories = None):
        if recipe_id is not None:
            response = Recipe.objects.get(recipe_id=recipe_id)
            serializer = RecipeSerializer(response)
            return Response(serializer.data)
        
        elif categories is not None:
            response = Recipe.objects.filter(categories = categories).order_by('-recipe_id')
            serializer = RecipeSerializer(response , many=True)
            return Response(serializer.data)
        
        response = Recipe.objects.all().order_by('-recipe_id')
        serializer = RecipeSerializer(response , many=True)
        return Response(serializer.data)
    def post(self,request):
        recipe = RecipeSerializer(data=request.data)
        if recipe.is_valid():
            recipe.save()
            return Response({'message' : 'Success'})
        return Response({'message' : 'Error'})

class IngredientView(APIView):
    def get(self,request):
        response = Ingredient.objects.all()
        serializer = IngredientSerializer(response , many=True)
        return Response(serializer.data)

class RatingView(APIView):
    def get(self,request):
        response = Rating.objects.all()
        serializer = RatingSerializer(response , many=True)
        return Response(serializer.data)
    
