from django.conf.urls import url, include

from .resources import WeatherResource


urlpatterns = [
    url(r'^weather/', include(WeatherResource.urls())),
]