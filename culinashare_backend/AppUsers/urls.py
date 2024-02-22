from django.urls import path
from .views import RegisterView , LoginView , MyTokenObtainPairView

from rest_framework_simplejwt.views import TokenRefreshView


urlpatterns = [
    path('users/register/' , RegisterView.as_view() , name='Register'),
    path('users/login/' , LoginView.as_view() , name='Login'),
    path('token/' , MyTokenObtainPairView.as_view() , name='token-obtain-pair'),
    path('token/refresh/' , TokenRefreshView.as_view() , name='token-refresh-view')
]
