from django.shortcuts import render
from rest_framework.response import Response
from .models import Clients
from .serializers import ClientsSerializer, ClientsSerializerID
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import ValidationError

# Create your views here.

class ClientsView (APIView):
    serializer_class = ClientsSerializer
    def get(self, request, Client_ID=None, *args, **kwargs):
        if Client_ID:
            data = Clients.objects.get(Client_ID=Client_ID)
            serializer = ClientsSerializerID(data)
        else:
            data = Clients.objects.all()
            serializer = ClientsSerializerID(data, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        data = request.data
        serializer = ClientsSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
        return Response({"Response": "Clients Data is Successfully saved", "data": serializer.data})

    def put(self, request, Client_ID, *args, **kwargs):
        data = request.data
        ClientsData = Clients.objects.get(Client_ID=Client_ID)
        serializer = ClientsSerializerID(instance=ClientsData, data=data)
        if serializer.is_valid():
            serializer.save()
        return Response({"Response": "Clients Data is Successfully Updated", "data": serializer.data})

    def delete(self, request, Client_ID, *args, **kwargs):
        ClientsData = Clients.objects.filter(Client_ID=Client_ID)
        ClientsData.delete()
        return Response({"Response": "Clients Data is Successfully Deleted"})
