from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    # User_Id = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ('User_Id','username','password','Role','Created_By','Created_At','Updated_At')

