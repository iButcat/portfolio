from django.shortcuts import render
from PIL import *
from django.urls import reverse_lazy

from .serializers import ProjectSerializers, ContactSerializers
from pyportfolio.models import Project, Contact
from . import models

from rest_framework.generics import  (
ListAPIView, RetrieveAPIView, CreateAPIView
)
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
from rest_framework import status
from rest_framework.permissions import IsAdminUser
from rest_framework.views import APIView


class PortfolioListView(ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializers


class PortfolioDetailView(RetrieveAPIView):
    lookup_field = 'id'
    queryset = Project.objects.all()
    serializer_class = ProjectSerializers


class ContactCreateView(CreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializers

    def post(self,request):
        parser_classes = (MultiPartParser, )
        serializer = ContactSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
