from django.urls import path
from .views import CategoryView , RecipeView , IngredientView , RatingView

urlpatterns = [
    path('categories/',CategoryView.as_view() , name="Categories"),
    path('recipies/' ,RecipeView.as_view() , name="Recipies" ),
    path('ingredients/' ,IngredientView.as_view() , name='Ingredients' ),
    path('ratings/' , RatingView.as_view() , name='Rating' )
]
