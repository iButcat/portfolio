from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIRequestFactory, APITestCase
from rest_framework.response import Response
from pyportfolio.models import Contact
from pyportfolio.views import ContactCreateView

response = Response()

class CreateNewExperimentTest(APITestCase):

    def setUp(self):
        self.name = 'Test'
        self.email = 'email@test.com'
        self.message = 'Some text'
        contact = Contact.objects.create(
        name=self.name,
        email=self.email,
        message=self.message
        )

    def test_valid_contact_post(self):
        factory = APIRequestFactory()
        request = factory.post('contact/', {
        'name': 'test',
        'email': 'email@test.com',
        'message': 'some message'
        },
        format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_invalid_contact_post(self):
        factory = APIRequestFactory()
        request = factory.post('contact/',{})
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
