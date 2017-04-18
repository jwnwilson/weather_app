# Weather App

Weather app to see the minimum, maximum, average temperature, and humidity for a given city and period of time. The purpose 
of this project is to get better at React and learn some new front end tools such as karma and try to deploy python / 
javascript code to heroku.

Available here:

https://weather-app-nw.herokuapp.com/

## TO DO:

 - Bar chart with multiple city weather data
 - Table with multiple city weather data


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

$ bower install

$ gulp

## Development

$ gulp watch


## Testing

$ npm test

# User story:

As a user, I want to be able to see the minimum, maximum, average temperature, and humidity for a
given city and period of time.

Requirements:

● RESTful API to serve weather data (ideally Django)

○ Fetch weather data from any API, e.g. http://openweathermap.org/api

● Front end to display the requested data (ideally React)

○ Include a table showing results

○ Include a bar chart of results

● Components must be responsive and work on restricted screen sizes

● Use git for version control and publish on GitHub

● Unit tests

Extra goals:

● Allow the user to input a location from the UI

● Allow the user to input a time period from the UI

● Deploy it somewhere publicly available

● Make the component easy to embed into other projects
