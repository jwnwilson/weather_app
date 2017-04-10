from restless.dj import DjangoResource


class WeatherResource(DjangoResource):
    def detail(self):
        # get data by city id from api
        return {}

    def list(self):
        # Handle url params
        return {}
