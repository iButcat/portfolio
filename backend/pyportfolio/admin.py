from django.contrib import admin
from .models import Project, Contact, CertificationAndBook

class ProjectAdmin(admin.ModelAdmin):
    pass


class ContactAdmin(admin.ModelAdmin):
    pass


class CertificationAndBookAdmin(admin.ModelAdmin):
    pass


admin.site.register(CertificationAndBook, CertificationAndBookAdmin)
admin.site.register(Contact, ContactAdmin)
admin.site.register(Project, ProjectAdmin)
