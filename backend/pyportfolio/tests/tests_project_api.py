from rest_framework.test import APITestCase
from pyportfolio.models import Project
from django.test import Client


class ProjectAPITest(APITestCase):
    client = Client()

    def setUp(self):
        self.project = Project.objects.create(
        title = "Test title",
        description = "My test description",
        technology = "Django",
        )
