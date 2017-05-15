from django.conf.urls import url, include

from .resources import (
    CurrentWeatherResource, GroupWeatherResource, WeatherForcastResource,
    WeatherHistoryResource)


urlpatterns = [
    url(r'^current/', include(CurrentWeatherResource.urls())),
    url(r'^forcast/', include(WeatherForcastResource.urls())),
    url(r'^group/', include(GroupWeatherResource.urls())),
    url(r'^history/', include(WeatherHistoryResource.urls())),
]
