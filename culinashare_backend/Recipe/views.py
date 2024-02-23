from django.db.models import Avg,Count
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
            recipes = Recipe.objects.annotate(
                        average_score = Avg('Rating__score') or 0,
                        number_of_ratings = Count('Rating')
                        ).order_by('-recipe_id').get(recipe_id=recipe_id)
            serializer = RecipeSerializer(recipes)
            return Response(serializer.data)
        
        elif categories is not None:
            
            recipes = Recipe.objects.annotate(
                        average_score = Avg('Rating__score') or 0,
                        number_of_ratings = Count('Rating')
                        ).order_by('-recipe_id').filter(categories = categories).order_by('-recipe_id')
            serializer = RecipeSerializer(recipes , many=True)
            return Response(serializer.data)
        
        recipes = Recipe.objects.annotate(
            average_score = Avg('Rating__score') or 0,
            number_of_ratings = Count('Rating')
            
        ).order_by('-average_score')
        for recipe in recipes:
            recipe.average_score = round(recipe.average_score, 1) if recipe.average_score else None
            
            
        serializer = RecipeSerializer(recipes , many=True)
        return Response(serializer.data)
        # response = Recipe.objects.all().order_by('-recipe_id')
        # serializer = RecipeSerializer(response , many=True)
        # return Response(serializer.data)
    def post(self,request):
        recipe = RecipeSerializer(data=request.data)
        if recipe.is_valid():
            recipe.save()
            return Response({'message' : 'Success'})
        return Response({'message' : 'Error'})

class IngredientView(APIView):
    def get(self,request,recipe):
        response = Ingredient.objects.filter(recipe=recipe)
        serializer = IngredientSerializer(response , many=True)
        return Response(serializer.data)

class RatingView(APIView):
    def get(self,request,recipe=None):
        if recipe is not None:
            ratings = Rating.objects.filter(recipe=recipe)
             # Calculate average score and count
            ratings_aggregate = ratings.aggregate(Avg('score'), Count('id'))
            serializer = RatingSerializer(ratings , many=True)
            return Response({
                'data':serializer.data,
                'average_score' : ratings_aggregate['score__avg'] or 0,
                'no_of_ratings' : ratings_aggregate['id__count']
                },status=status.HTTP_200_OK)
        response = Rating.objects.all()
        serializer = RatingSerializer(response , many=True)
        return Response(serializer.data)
    
