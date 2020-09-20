from django.shortcuts import render
from PIL import *
from django.urls import reverse_lazy

from .serializers import ProjectSerializers, ContactSerializers
from pyportfolio.models import Project, Contact
from . import models

from rest_framework.generics import (
ListAPIView,
RetrieveAPIView,
CreateAPIView
)
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.parsers import (
MultiPartParser,
FormParser,
JSONParser
)
from rest_framework import status
from rest_framework.permissions import IsAdminUser
from rest_framework.views import APIView


class PortfolioListView(ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializers
    permission_classes = (AllowAny,)


class PortfolioDetailView(RetrieveAPIView):
    lookup_field = 'pk'
    queryset = Project.objects.all()
    serializer_class = ProjectSerializers
    permission_classes = (AllowAny,)


class ContactCreateView(CreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializers
    permission_classes= (AllowAny,)

    def post(self,request):
        parser_classes = (MultiPartParser, )
        serializer = ContactSerializers(data=self.queryset)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
