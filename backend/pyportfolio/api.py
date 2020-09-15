from .models import Project, Contact, CertificationAndBook
from rest_framework import viewsets, permissions
from rest_framework.permissions import IsAdminUser
from .serializers import (ProjectSerializers, ContactSerializers,
CertificationAndBookSerializers)


# Project Viewset
class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    permissions_classes = [
    permissions.IsAdminUser
    ]
    serializer_class = ProjectSerializers


# Contact Viewset
class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    permissions_classes = [
    permissions.IsAdminUser
    ]
    serializer_class = ContactSerializers


# Certification And Book Viewset
class CertificationAndBookViewSet(viewsets.ModelViewSet):
    queryset = CertificationAndBook.objects.all()
    permissions_classes = [
    permissions.IsAdminUser
    ]
    serializer_class = CertificationAndBookSerializers
