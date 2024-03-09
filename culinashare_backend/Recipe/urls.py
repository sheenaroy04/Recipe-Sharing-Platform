from django.urls import path
from .views import CategoryView , RecipeView , IngredientView , RatingView,BookmarkView

urlpatterns = [
    path('categories/',CategoryView.as_view() , name="Categories"),
    
    path('recipies/' ,RecipeView.as_view() , name="Recipies" ),
    path('recipies/recipe=<int:recipe_id>/' ,RecipeView.as_view() , name="Recipie" ),
    path('recipies/category=<int:categories>' , RecipeView.as_view() , name = "Recipe By Category"),
    path('recipies/vegetarian' , RecipeView.as_view() ,{'is_vegetarian' : True}, name="Recipe By Vegetarian"),
    path('recipies/non-vegetarian' , RecipeView.as_view() ,{'is_vegetarian' : False}, name="Recipe By Non Vegetarian"),
    path('recipies/author=<int:author>' , RecipeView.as_view() , name="Recipe By Author"),
    
    path('recipies/<int:categories>/vegetarian' , RecipeView.as_view() ,{'is_vegetarian' : True}, name="Recipe By Category - Vegetarian"),
    path('recipies/<int:categories>/non-vegetarian' , RecipeView.as_view() ,{'is_vegetarian' : False}, name="Recipe By Category - Non Vegetarian"),
    
    path('ingredients/recipe=<int:recipe>' ,IngredientView.as_view() , name='Ingredients' ),
    path('ingredients/' , IngredientView.as_view() , name='Ingredients Post'),
    path('ratings/' , RatingView.as_view() , name='Rating' ),
    path('ratings/<int:recipe>' , RatingView.as_view() , name='Recipe Rating' ),
    
    path('bookmarks/' , BookmarkView.as_view() , name='Bookmarks'),
    path('bookmarks/<int:user>' , BookmarkView.as_view() , name='Bookmarks by user'),
    
    path('recipies/viewer=<int:viewer>' , RecipeView.as_view() , name="Recipe By Author"),
] 


