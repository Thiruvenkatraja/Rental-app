from django.urls import path
from .views import UserAuthenticationView,UserRegistrationView
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView

urlpatterns = [
    path("login/",UserAuthenticationView.as_view()),
    path("signup/",UserRegistrationView.as_view()),
    path("token/",TokenObtainPairView.as_view()),
    path("refreshtoken/",TokenRefreshView.as_view()),
]