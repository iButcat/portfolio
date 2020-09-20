from django.test import TestCase
from django.contrib.auth.models import User
from rest_framework.permissions import IsAdminUser, AllowAny
from rest_framework.test import APIRequestFactory


class TestPermission(TestCase):

    def setUp(self):
        self.factory = APIRequestFactory()
        self.admin_user = User.objects.create(
        username = 'superAdmin',
        email='admin@gmail.com',
        password='admin997',
        is_staff=True)
        self.random_user = User.objects.create(
        username = 'superRandom',
        email='test@gamil.com',
        password='random166',
        is_staff=False)

    def test_access_admin_permission(self):
        request = self.factory.get('/api/project')
        request.user = self.admin_user
        permission_check = IsAdminUser()
        permission = permission_check.has_permission(request, None)
        self.assertTrue(permission)

    def test_access_user_permission(self):
        request = self.factory.get('/api/project')
        request.user = self.random_user
        permission_check = IsAdminUser()
        permission = permission_check.has_permission(request, None)
        self.assertFalse(permission)

    def test_access_post_no_permission(self):
        request = self.factory.post('/api/project')
