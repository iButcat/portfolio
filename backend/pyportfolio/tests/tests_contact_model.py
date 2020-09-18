from django.test import TestCase
from pyportfolio.models import Contact


class ContactModelTest(TestCase):

    @classmethod
    def setUpTestData(cls):
        cls.obj_id = Contact.objects.create(
        name = 'Test Name',
        email = 'myemail@test.com',
        message = 'My test message'
        ).pk

    def test_contact_name(self):
        contact = Contact.objects.get(id=self.obj_id)
        field_label = contact._meta.get_field('name').verbose_name
        self.assertEqual(field_label, 'name')

    def test_contact_email(self):
        contact = Contact.objects.get(id=self.obj_id)
        field_label = contact._meta.get_field('email').verbose_name
        self.assertEqual(field_label, 'email')

    def test_contact_message(self):
        contact = Contact.objects.get(id=self.obj_id)
        field_label = contact._meta.get_field('message').verbose_name
        self.assertEqual(field_label, 'message')

    def test_contact_name_length(self):
        contact = Contact.objects.get(id=self.obj_id)
        max_length = contact._meta.get_field('name').max_length
        self.assertEqual(max_length, 30)

    def test_contact_message_length(self):
        contact = Contact.objects.get(id=self.obj_id)
        max_length = contact._meta.get_field('message').max_length
        self.assertEqual(max_length, 300)
