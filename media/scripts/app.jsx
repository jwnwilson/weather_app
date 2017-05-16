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
      barChartApiData: [],
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
    for(var key of ['city', 'datetime', 'singleCityApiData', 'multipleCityApiData']){
      if(key in inputData){
        console.log('Setting state: ' + key);
        let stateData = {}
        stateData[key] = inputData[key];
        this.setState(stateData);
      }
    }
  }

  // Set bar chart data for barchart widget
  barChartData = (data) => {
    let tempData = [];
    let pressureData = [];
    let humidityData = [];
    let keyList = {
      "temp": tempData,
      "pressure": pressureData,
      "humidity": humidityData
    };

    for(var i in data){
      for(var key in keyList){
        let name = data[i].name;
        let value = data[i].main[key];
        let obj = {
          text: name,
          value: value
        };
        keyList[key].push(obj);
      }
    }

    this.setState({
      barChartApiData: [
        tempData, pressureData, humidityData
      ]
    });

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
          //Sanitise data
          data = this.barChartData(data.objects[0].list);
        });
    }
  }

  render () {
    var barCharts = [];
    for (var i in this.state.barChartApiData) {
        barCharts.push(
          <WeatherBarChart
            data={this.state.barChartApiData[i]}
            xlabel="temperature"/>
        );
    }

    return (
      <div>
        {barCharts}
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
