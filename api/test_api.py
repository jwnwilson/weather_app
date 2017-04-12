import django
from django.conf import settings
from django.test import Client, RequestFactory

import pytest
import requests_mock

from .resources import (
    CurrentWeatherResource, WeatherForcastResource, WeatherHistoryResource)

django.setup()

resource_list = [
    [CurrentWeatherResource, 'weather'],
    [WeatherForcastResource, 'forecast'],
    [WeatherHistoryResource, 'history'],
]


@pytest.fixture(scope='session', params=resource_list)
def resource(request):
    return request.param


@pytest.fixture(scope='function')
def client():
    return Client()


class TestWeatherResource:
    def setup_method(self, method):
        self.api_base = settings.BASE_API_URL
        self.factory = RequestFactory()

    def test_detail(self, resource):
        """
        Test the resource makes correct url call to weather api for general
        api queries
        """
        res_class, res_name = resource
        query = '1'
        with requests_mock.mock() as m:
            m.get(
                '{}{}?id={}'.format(self.api_base, res_name, query),
                json={})

            detail_endpoint = res_class.as_detail()
            req = self.factory.get('/api/{}/{}/'.format(res_name, query))
            resp = detail_endpoint(req, query)

            assert resp.status_code == 200
            assert m.called is True

    def test_list(self, resource):
        """
        Test the resource makes correct url call to weather api for specific 
        city ids
        """
        res_class, res_name = resource
        query = '?q=london'
        with requests_mock.mock() as m:
            m.get(
                '{}{}{}'.format(self.api_base, res_name, query),
                json={})

            detail_endpoint = res_class.as_list()
            req = self.factory.get('/api/{}{}'.format(res_name, query))
            resp = detail_endpoint(req)

            assert resp.status_code == 200
            assert m.called is True