from django.conf.urls import include, url

from weather_app import views

urlpatterns = [
    url(r'^$', views.home, name='home'),
    url(r'^api/', include('api.urls')),
]
