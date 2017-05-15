import React from 'react';
import {render} from 'react-dom';
import InputWidget from './components/inputWidget.jsx';
import OutputWidget from './components/outputWidget.jsx';
import WeatherBarChart from './components/barchart.jsx';
import moment from 'moment';
import cityList from './cityList.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datetime: moment(),
      city: null,
      singleCityApiData: null,
      multipleCityApiData: [],
      cityList: cityList,
      multipleCityLoaded: false
    };
  }

  componentDidMount() {
    if( this.state.multipleCityLoaded == false){
      this.getApiData();
      this.setState({multipleCityLoaded: true});
    }
  }

  onInputUpdate = (inputData) => {
    for(var key of ['city', 'datetime', 'singleCityApiData', 'multipleCityLoaded']){
      if(key in inputData){
        console.log('Setting state: ' + key);
        let stateData = {}
        stateData[key] = inputData[key];
        this.setState(stateData);
      }
    }
  }

  getApiData = () => {
    if(this.state.cityList){
      console.log('Getting API data:');
      let url = '/api/group/?id=';
      let cityIds = [];
      for(var city in this.state.cityList){
        cityIds.push(this.state.cityList[city].id);
      }
      url += cityIds.join(',');

      console.log(url);

      return $.getJSON(url)
        .then((data) => {
          //Update output
          this.onInputUpdate(
            {multipleCityApiData: data}
          );
        });
    }
  }

  render () {
    return (
      <div>
        <WeatherBarChart
          apiData={this.state.multipleCityApiData} />
        <InputWidget
          onInputUpdate={this.onInputUpdate}
          placeHolder='Select a city'
          datetime={this.state.datetime}
          city={this.state.city}
          cityList={this.state.cityList} />
        <OutputWidget
          datetime={this.state.datetime}
          city={this.state.city}
          apiData={this.state.singleCityApiData} />
      </div>
    )
  }
}

export default App;
