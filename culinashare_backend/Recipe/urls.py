from django.urls import path
from .views import CategoryView , RecipeView , IngredientView , RatingView

urlpatterns = [
    path('categories/',CategoryView.as_view() , name="Categories"),
    
    path('recipies/' ,RecipeView.as_view() , name="Recipies" ),
    path('recipies/recipe=<int:recipe_id>/' ,RecipeView.as_view() , name="Recipie" ),
    path('recipies/<int:categories>' , RecipeView.as_view() , name = "Recipe By Category"),
    
    path('ingredients/recipe=<int:recipe>' ,IngredientView.as_view() , name='Ingredients' ),
    
    path('ratings/' , RatingView.as_view() , name='Rating' )
] 


