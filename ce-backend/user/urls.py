from django.urls import path
from .views import UserAuthenticationView,UserRegistrationView,CustomTokenObtainPairView
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path("login/",UserAuthenticationView.as_view()),
    path("signup/",UserRegistrationView.as_view()),
    path("token/",CustomTokenObtainPairView.as_view()),
    path("refreshtoken/",TokenRefreshView.as_view()),
    path("", UserRegistrationView.as_view()),
]
