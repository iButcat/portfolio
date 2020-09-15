from django.db import models
from django.db.models import Model
from django.conf import settings
import PIL

class Project(models.Model):
    title = models.CharField(max_length=30)
    description = models.TextField()
    technology = models.CharField(max_length=30)
    image = models.ImageField(blank=True)
    github_url = models.URLField(name='Github')

    def __str__(self):
        return "{}".format(self.title)


class CertificationAndBook(models.Model):
    title = models.CharField(max_length=30)
    description = models.TextField()
    image = models.ImageField()

    def __str__(self):
        return "{}".format(self.title)


class Contact(models.Model):
    name = models.CharField(max_length=30)
    email = models.EmailField()
    message = models.TextField(max_length=300)

    def __str__(self):
        return "@: {}".format(self.email)
