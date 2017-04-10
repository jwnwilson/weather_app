import json
import logging

import requests
from requests.exceptions import ConnectTimeout

from .exceptions import WeatherApiException
import settings

logger = logging.getLogger(__name__)


class WeatherApi():
    """
    Requests wrapper to make api calls to the weather API
    """
    def __init__(self):
        self.base_url = settings.BASE_API_URL

    def request(
            self,
            method,
            url,
            params=None,
            data=None,
            timeout=None):
        """
        Make a request to the Api with given params using requests

        Args:
            method: (str) standard HTTP method ('GET', 'POST')
            params: (dict) key values for url params
            data: (dict) body of POST requests
            timeout: (int) seconds to fail wait before timing out a request
        Returns:
            Response object
        """
        params = params or {}
        url = self.base_url + url

        request_func = requests.request

        try:
            resp = request_func(
                method.upper(), url, params=params, data=data, timeout=timeout)
        except ConnectTimeout:
            msg = 'Connection timed out for: {}'.format(url)
            logger.warning(msg)
            raise WeatherApiException(msg)

        return resp

    def _handle_resp_errors(self, resp):
        """
        Check for invalid / bad responses and raise error
        """
        if not resp or resp.status_code >= 400:
            # handle API error
            if resp:
                raise WeatherApiException(resp.content)
            else:
                raise WeatherApiException

    def get(self, url, params=None, timeout=None):
        """
        Make a single GET request to the marvel with url being the path
        and params being the url params
        
        Args:
            url: (str) relative api url to be added to base url
            params: (dict) url parms to be added
            timeout: (int) optional timeout

        Returns:
            (dict) json data
        """
        params = params or {}

        resp = self.request(
            'GET', url, params, timeout=timeout)
        self._handle_resp_errors(resp)
        return json.loads(resp.content)

