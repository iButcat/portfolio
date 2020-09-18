from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIRequestFactory
from rest_framework.response import Response
from pyportfolio.models import Contact
from pyportfolio.views import ContactCreateView

response = Response()


class CreateNewExperimentTest(TestCase):

    def setUp(self):
        self.valid_contact = Contact.objects.create(
        name = 'Test',
        email = 'email@test.com',
        message = 'Some text'
        )
        self.invalid_contact = Contact.objects.create(
        name = 'test'
        )

    def test_right_contact_post(self):
        factory = APIRequestFactory()
        request = factory.post('contact/', {
        'name': 'test',
        'email': 'email@test.com',
        'message': 'some message'
        },
        format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_valid_contact_post_(self):
        contact_create_view = ContactCreateView()
        request = contact_create_view.post(self.valid_contact)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_bad_contact_post(self):
        contact_create_view = ContactCreateView()
        request = contact_create_view.post(self.invalid_contact)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
