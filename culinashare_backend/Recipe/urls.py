from django.urls import path
from django.conf.urls.static import static
from django.conf import settings
from .views import CategoryView , RecipeView , IngredientView , RatingView

urlpatterns = [
    path('categories/',CategoryView.as_view() , name="Categories"),
    path('recipies/' ,RecipeView.as_view() , name="Recipies" ),
    path('recipies/<int:recipe_id>/' ,RecipeView.as_view() , name="Recipie" ),
    path('ingredients/' ,IngredientView.as_view() , name='Ingredients' ),
    path('ratings/' , RatingView.as_view() , name='Rating' )
] + static(settings.MEDIA_URL , document_root = settings.MEDIA_ROOT)
