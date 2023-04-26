from rest_framework import serializers
from .models import Clients

#Create your serializers here:

class ClientsSerializerID(serializers.ModelSerializer):
    
    class Meta:
        model = Clients
        fields = ['Client_ID','Client_Name','Client_Block','Client_FlatNo','Client_ListingType','Client_BHK','Client_Status','Client_PropertyID']

class ClientsSerializer(serializers.ModelSerializer):
    Client_PropertyAmenities = serializers.MultipleChoiceField(
        choices=Clients.Amenities_List)

    class Meta:
        model = Clients
        exclude = ("Client_ID",)
