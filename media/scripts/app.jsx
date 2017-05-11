import React from 'react';
import {render} from 'react-dom';
import InputWidget from './components/inputWidget.jsx';
import OutputWidget from './components/outputWidget.jsx';
import WeatherBarChart from './components/barchart.jsx';
import moment from 'moment';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datetime: moment(),
      city: null,
      apiData: null
    };
  }

  onInputUpdate = (inputData) => {
    for(var key of ['city', 'datetime', 'apiData']){
      if(key in inputData){
        console.log('Setting state: ' + key);
        let stateData = {}
        stateData[key] = inputData[key];
        this.setState(stateData);
      }
    }
  }

  render () {
    return (
      <div>
        <WeatherBarChart>
        </WeatherBarChart>
        <InputWidget
          onInputUpdate={this.onInputUpdate}
          placeHolder='Select a city'
          datetime={this.state.datetime}
          city={this.state.city} />
        <OutputWidget
          datetime={this.state.datetime}
          city={this.state.city}
          apiData={this.state.apiData} />
      </div>
    )
  }
}

export default App;
