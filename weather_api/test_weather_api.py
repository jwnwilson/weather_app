import time

from freezegun import freeze_time
import pytest

from api.resources import WeatherApi


class TestWeatherApi():

    def setup_method(self, method):
        self.api = WeatherApi()

    def test_request_get_params(self):
        pass

    def test_request_post_data(self):
        pass

    def test_error_handled(self):
        pass

    def test_get_returns_dict(self):
        pass


