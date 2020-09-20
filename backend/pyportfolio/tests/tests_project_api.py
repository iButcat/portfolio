from rest_framework.test import APITestCase, APIRequestFactory
from pyportfolio.models import Project
from rest_framework.response import Response
from rest_framework import status


class ProjectAPITest(APITestCase):

    def setUp(self):
        self.factory = APIRequestFactory()
        self.response = Response()
        self.project = Project.objects.create(
        title = "Title test",
        description = "Description test",
        technology = "Technology test"
        )

    def test_project_post(self):
        post_project_to_api = self.factory.post('project/',
        {'data': self.project})
        self.assertEqual(self.response.status_code, status.HTTP_200_OK)

    def test_project_get(self):
        request = self.factory.get('api/project/')
        self.assertEqual(self.response.status_code, status.HTTP_200_OK)
