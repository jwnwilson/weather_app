# Weather App

Weather app to see the minimum, maximum, average temperature, and humidity for a
given city and period of time.

Available here:

https://weather-app-nw.herokuapp.com/

# Backend

## Setup

To setup the virtual env with dependancies with python3 to run the djagno tests:

$ source py_env.sh

## Testing

$ DJANGO_SETTINGS_MODULE=weather_app.settings pytest

# Front end

## Setup

To build the frontend javascript and css:

$ cd media

$ npm install

$ gulp

## Development

$ gulp watch


## Testing

$ npm test
