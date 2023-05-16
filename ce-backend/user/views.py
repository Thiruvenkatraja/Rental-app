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
        data = request.data
        mobile_no = request.data.get('mobile_no')
        password = request.data.get('password1')
        user_exists = User.objects.filter(Mobile_No=mobile_no)
        if user_exists:
            result = 'User already exists'
        elif request.data['password1'] != request.data['password2']:
            result = 'Password Does not match'
        else:
            User.objects.create_user(
                Mobile_No=mobile_no, password=password, Full_Name=data["full_name"], email=data['email'], Role=data['role'], Construction_Name=data['construction_name'], GST_No=data["gst_no"], City=data['city'], Address=data['address'])
            result = 'User created successfully'
        return Response({'response': result})


    def get(self, request, User_ID=None, *args, **kwargs):
        try:
            if User_ID:
                data = User.objects.get(Use_ID=User_ID)
                serializer = UserSerializer(data)
            else:
                data = User.objects.all()
                serializer = UserSerializer(data, many=True)
            return Response(serializer.data)
        except User.DoesNotExist:
            return Response({"Response":"Users Data not Found"},status=status.HTTP_404_NOT_FOUND)

# {
#     "mobile_no": 7356556336,
#     "password1": "test",
#     "password2": "test",
#     "full_name": "rahul",
#     "email": "rahul@gmail.com",
#     "role": "admin",
#     "construction_name": "test",
#     "city": "chennai",
#     "address": "test"
# }
