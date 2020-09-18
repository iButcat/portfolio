from django.urls import include, re_path, path
from .views import (
PortfolioListView,
PortfolioDetailView,
ContactCreateView
)

from rest_framework import routers
from .api import ProjectViewSet, ContactViewSet, CertificationAndBookViewSet

router = routers.SimpleRouter()
router.register('project', ProjectViewSet, 'project')
router.register('contact', ContactViewSet, 'contact')
router.register('education', CertificationAndBookViewSet, 'education')

app_name = 'portfolio'

urlpatterns = [
 re_path('api/', include(router.urls)),
 path('project/', PortfolioListView.as_view()),
 path('project/<int:pk>', PortfolioDetailView.as_view()),
 path('contact/', ContactCreateView.as_view())
]
