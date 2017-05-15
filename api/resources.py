from restless.dj import DjangoResource
from restless.exceptions import BadRequest

from weather_api.api import WeatherApi


class BaseWeatherResource(DjangoResource):
    def __init__(self, *args, **kwargs):
        self.weather_api = WeatherApi()
        super().__init__(*args, **kwargs)


class CurrentWeatherResource(BaseWeatherResource):
    def detail(self, pk):
        # get data by city id from api
        return self.weather_api.current_weather(
            params={'id': pk})

    def list(self):
        # Handle url params check for city name
        query = self.request.GET.get('q')
        if not query:
            raise BadRequest('No "?q=" url param provided.')

        return [self.weather_api.current_weather(
            params=self.request.GET.dict())]


class GroupWeatherResource(BaseWeatherResource):
    def detail(self, pk):
        # get data by city id from api
        return self.weather_api.group_weather(
            params={'id': pk})

    def list(self):
        # Handle url params check for city name
        query = self.request.GET.get('id')
        if not query:
            raise BadRequest('No "?id=" url param provided.')

        return [self.weather_api.group_weather(
            params=self.request.GET.dict())]


class WeatherForcastResource(BaseWeatherResource):
    def detail(self, pk):
        # get data by city id from api
        return self.weather_api.weather_forecast(
            params={'id': pk})

    def list(self):
        # Handle url params check for city name
        query = self.request.GET.get('q')
        if not query:
            raise BadRequest('No "?q=" url param provided.')

        return [self.weather_api.weather_forecast(
            params=self.request.GET.dict())]


class WeatherHistoryResource(BaseWeatherResource):
    def detail(self, pk):
        # get data by city id from api
        return self.weather_api.weather_history(
            params={'id': pk})

    def list(self):
        # Handle url params check for city name
        query = self.request.GET.get('q')
        if not query:
            raise BadRequest('No "?q=" url param provided.')

        return [self.weather_api.weather_history(
            params=self.request.GET.dict())]
