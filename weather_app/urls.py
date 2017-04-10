from django.conf.urls import include, url

from weather_app import views

urlpatterns = [
    url(r'^$', views.Home.as_view(), name='home'),
    url(r'^api/', include('api.urls')),
]
