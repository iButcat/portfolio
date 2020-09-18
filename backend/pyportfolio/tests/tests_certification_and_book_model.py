from django.test import TestCase
from pyportfolio.models import CertificationAndBook


class CertificationAndBookModelTest(TestCase):

    @classmethod
    def setUpTestData(cls):
        cls.obj_id = CertificationAndBook.objects.create(
        title = 'My Test Title',
        description = 'My Test Description'
        ).pk

    def test_certification_and_book_title(self):
        certification_and_book = CertificationAndBook.objects.get(id=self.obj_id)
        field_label = certification_and_book._meta.get_field('title').verbose_name
        self.assertEqual(field_label, 'title')

    def test_certification_and_book_description(self):
        certification_and_book = CertificationAndBook.objects.get(id=self.obj_id)
        field_label = certification_and_book._meta.get_field('description').verbose_name
        self.assertEqual(field_label, 'description')

    def test_certification_and_book_title_length(self):
        certification_and_book = CertificationAndBook.objects.get(id=self.obj_id)
        max_length = certification_and_book._meta.get_field('title').max_length
        self.assertEqual(max_length, 30)
