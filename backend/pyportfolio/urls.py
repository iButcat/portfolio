from django.urls import path, include
from . import views

from rest_framework import routers
from .api import ProjectViewSet, ContactViewSet, CertificationAndBookViewSet

router = routers.SimpleRouter()
router.register('project', ProjectViewSet, 'project')
router.register('contact', ContactViewSet, 'contact')
router.register('education', CertificationAndBookViewSet, 'education')

app_name = 'portfolio'

urlpatterns = [
 path('api/', include(router.urls)),
]
