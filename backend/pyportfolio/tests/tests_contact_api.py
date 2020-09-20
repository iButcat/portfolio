from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIRequestFactory, APITestCase
from rest_framework.response import Response
from pyportfolio.models import Contact
from pyportfolio.views import ContactCreateView


class CreateNewExperimentTest(APITestCase):

    def setUp(self):
        self.contact = Contact.objects.create(
        name="Test",
        email="email@test.com",
        message="Message test"
        )
        self.factory = APIRequestFactory()
        self.response = Response()

    def test_valid_contact_post(self):
        request = self.factory.post('contact/', {
        'name': 'test',
        'email': 'email@test.com',
        'message': 'some message'
        },
        format='json')
        self.assertEqual(self.response.status_code, status.HTTP_200_OK)
