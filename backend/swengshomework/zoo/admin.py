from django.contrib import admin
from .models import *


class ZooAdmin(admin.ModelAdmin): pass


class ZookeeperAdmin(admin.ModelAdmin): pass


class AnimalAdmin(admin.ModelAdmin): pass


admin.site.register(Zoo,ZooAdmin)
admin.site.register(Zookeeper,ZookeeperAdmin)
admin.site.register(Animal,AnimalAdmin)


