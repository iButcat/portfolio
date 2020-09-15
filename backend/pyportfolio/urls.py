from django.urls import path, include
from django.conf.urls import url,re_path
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
 #path('', views.PortfolioListView.as_view(), name='list'),
 #path('<int:id>', views.PortfolioDetailView.as_view(), name=''),
 #path('api/create/', views.ContactCreateView.as_view())
]
