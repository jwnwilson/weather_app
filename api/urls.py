from django.conf.urls import url, include

from .resources import (
    CurrentWeatherResource, WeatherForcastResource, WeatherHistoryResource)


urlpatterns = [
    url(r'^current/', include(CurrentWeatherResource.urls())),
    url(r'^forcast/', include(WeatherForcastResource.urls())),
    url(r'^histroy/', include(WeatherHistoryResource.urls())),
]
