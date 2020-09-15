from django import forms
from django.forms import ModelForm
from django.core import validators
from .models import Contact


class ContactForm(forms.ModelForm):
    class Meta:
        model = Contact
        fields = '__all__'
