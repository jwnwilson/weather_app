import React, { Component } from 'react'
import CityDropdown from './dropdown.jsx';
import WeatherDatePicker from './datepicker.jsx';
import WeatherButton from './button.jsx';
var moment = require('moment');

class InputWidget extends React.Component {
  constructor(props) {
    super(props);
  }

  onCitySelect = (option) => {
    this.props.onInputUpdate({
      'city': option.label
    });
  }

  onDateTimeSelect = (option) => {
    this.props.onInputUpdate({
      'datetime': option
    });
  }

  buttonClicked = () => {
    // Make api call
    this.getApiData();
  }

  getApiData = () => {
    if(this.props.city){
      console.log('Getting API data:');
      return $.getJSON('/api/current/?q=' + this.props.city)
        .then((data) => {
          //Update output
          this.props.onInputUpdate(
            {apiData: data}
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
          <strong> {this.props.city} </strong>
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
