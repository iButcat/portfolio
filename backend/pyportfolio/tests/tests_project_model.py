from django.test import TestCase
from pyportfolio.models import Project


class ProjectModelTest(TestCase):

    @classmethod
    def setUpTestData(cls):
        cls.obj_id = Project.objects.create(
        title = 'My title',
        description= 'My description',
        technology = 'Django',
        ).pk

    def test_project_title(self):
        project = Project.objects.get(id=self.obj_id)
        field_label = project._meta.get_field('title').verbose_name
        self.assertEqual(field_label, 'title')

    def test_project_description(self):
        project = Project.objects.get(id=self.obj_id)
        field_label = project._meta.get_field('description').verbose_name
        self.assertEqual(field_label, 'description')

    def test_project_technology(self):
        project = Project.objects.get(id=self.obj_id)
        field_label = project._meta.get_field('technology').verbose_name
        self.assertEqual(field_label, 'technology')

    def test_project_title_length(self):
        project = Project.objects.get(id=self.obj_id)
        max_length = project._meta.get_field('title').max_length
        self.assertEqual(max_length, 30)

    def test_project_technology_length(self):
        project = Project.objects.get(id=self.obj_id)
        max_length = project._meta.get_field('technology').max_length
        self.assertEqual(max_length, 30)
