"""swengshomework URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from django.urls import path
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework_jwt.views import obtain_jwt_token

from .zoo import views

schema_view = get_schema_view(
    openapi.Info(
        title='API',
        default_version='v1'
    ),
)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('zoo/options', views.zoo_option_list),
    path('animal/list', views.animal_list),
    path('animal/create', views.animal_form_create),
    path('animal/<int:pk>/get', views.animal_form_get),
    path('animal/<int:pk>/update', views.animal_form_update),
    path('animal/<int:pk>/delete', views.animal_delete),
    path('zoo/list', views.zoo_list),
    path('zoo/create', views.zoo_form_create),
    path('zoo/<int:pk>/get', views.zoo_form_get),
    path('zoo/<int:pk>/update', views.zoo_form_update),
    path('zoo/<int:pk>/delete', views.zoo_delete),
    path('zookeeper/options', views.zookeeper_list),

    url(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    url(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    url(r'^redoc/$', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    url(r'^api-token-auth/', obtain_jwt_token),
]
