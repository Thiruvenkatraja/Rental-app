from django.shortcuts import render
from .serializers import PropertySerializer, PropertySerializerID
from .models import Property
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Create your views here.


class PropertyView(APIView):
    serializer_class = PropertySerializer

    def get(self, request, Property_ID=None):
        if Property_ID:
            data = Property.objects.get(Property_ID=Property_ID)
            serializer = PropertySerializerID(data)
        else:
            data = Property.objects.all()
            serializer = PropertySerializerID(data, many=True)
        return Response(serializer.data)

    def post(self, request):
        data = request.data
        serializer = PropertySerializer(data=data)
        if serializer.is_valid():
            serializer.save()
        return Response({"data": "data saved successfully", "data": serializer.data})

    def put(self, request, Property_ID):
        data = request.data
        PropertyData = Property.objects.get(Property_ID=Property_ID)
        serializer = PropertySerializerID(instance=PropertyData, data=data)
        if serializer.is_valid():
            serializer.save()
        return Response({"Response": "Data Updated Successfully", "data": serializer.data})

    def delete(self, request, Property_ID):
        PropertyData = Property.objects.filter(Property_ID=Property_ID)
        PropertyData.delete()
        return Response({"Response": "Data Deleted Successfully"})
