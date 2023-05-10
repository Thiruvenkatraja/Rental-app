from .models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserSerializer
from django.contrib.auth import authenticate, login
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

# Create your views here.
class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, User):
        # Use the correct attribute for the primary key
        user_id = getattr(User, 'User_Id')
        token = super().get_token(User)
        token['User_Id'] = user_id
        return token

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer

class UserAuthenticationView(APIView):

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)
        if user is None:
            return Response({'error': 'requested user does not exists'}, status=status.HTTP_400_BAD_REQUEST)
        login(request, user)
        return Response({'response': 'login successfull'}, status=status.HTTP_200_OK)


class UserRegistrationView(APIView):

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password1')
        username_exists = User.objects.filter(username=username)
        if username_exists:
            result = 'Username already taken'
        elif request.data['password1'] != request.data['password2']:
            result = 'Password Does not match'
        else:
            User.objects.create_user(username=username, password=password)
            result = 'User created successfully'
        return Response({'response': result})
