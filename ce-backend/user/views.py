from .models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializer import UserSerializer
from django.contrib.auth import authenticate,login

# Create your views here.

class UserAuthenticationView(APIView):

    def post(self,request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)
        if user is None:
            return Response({'error':'requested user does not exists'},status=status.HTTP_400_BAD_REQUEST)
        login(request,user)
        serializer = UserSerializer(user)
        return Response(serializer.data,status=status.HTTP_200_OK)

class UserRegistrationView(APIView):
    
    serializer_class = UserSerializer

    def post(self,request):
        username = request.data.get('username')
        password = request.data.get('password')
        username_exists = User.objects.filter(username=username)
        if username_exists:
            result = 'Username already taken'
        elif request.data['password1'] != request.data['password2']:
            result = 'Password Does not match'
        else:
            User.objects.create_user(username=username,password=password)
            result = 'User created successfully'
        return Response({'response':result})
