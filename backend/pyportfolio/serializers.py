from rest_framework import serializers
from .models import Project, Contact, CertificationAndBook

# Project serializers
class ProjectSerializers(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'
        lookup_field = 'id'


class ContactSerializers(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ('name', 'email', 'message')


class CertificationAndBookSerializers(serializers.ModelSerializer):
    class Meta:
        model = CertificationAndBook
        fields = ('title', 'description', 'image')
