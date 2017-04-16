import React, { Component } from 'react'
import CityDropdown from './dropdown.jsx';
import WeatherDatePicker from './datepicker.jsx';
import WeatherButton from './button.jsx';
var moment = require('moment');

class InputWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datetime: moment(),
      city: null,
      apiData: null
    };

    this.onCitySelect = this.onCitySelect.bind(this);
    this.onDateTimeSelect = this.onDateTimeSelect.bind(this);
    this.buttonClicked = this.buttonClicked.bind(this);
    this.getApiData = this.getApiData.bind(this);
  }

  onCitySelect(option) {
    console.log('You selected city:', option.label);
    this.setState({
      city: option.label
    });
    this.props.onInputUpdate({
      'city': option.label
    });
  }

  onDateTimeSelect(option) {
    console.log('You selected datetime:', option);
    this.setState({
      datetime: option
    });
    this.props.onInputUpdate({
      'datetime': option
    });
  }

  buttonClicked () {
    // Get city and time
    if('city' in this.state){
      console.log('City: ', this.state.city);
    }
    if('datetime' in this.state){
      console.log('DateTime: ', this.state.datetime);
    }
    // Make api call
    this.getApiData();
  }

  getApiData() {
    if(this.state.city){
      console.log('Getting API data:');
      return $.getJSON('/api/current/?q=' + this.state.city)
        .then((data) => {
          this.setState({
            apiData: data
          });
          //Update output
          this.props.onInputUpdate(
            {apiData: this.state.apiData}
          );
        });
    }
  }

  render() {
    const options = [
      { value: 'london', label: 'London' },
      { value: 'new_york', label: 'New York' }
    ];
    const defaultOption = options[0];

    return (
      <div className='inputWidget'>
        <p>Please Select a city:</p>
        <CityDropdown
          options={options}
          onCitySelect={this.onCitySelect}/>
        <div className='result'>
          You selected
          <strong> {this.state.city} </strong>
        </div>
        <p>Please select a date and time:</p>
        <WeatherDatePicker
          onDateTimeSelect={this.onDateTimeSelect}/>
        <WeatherButton
          buttonClicked={this.buttonClicked} />
      </div>
    );
  }
}

InputWidget.defaultProps = {
  placeHolder: "Select an option",
  onInputUpdate: function(){}
};

export default InputWidget;
