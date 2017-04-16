import React, { Component } from 'react'
import CityDropdown from './dropdown.jsx';
import WeatherDatePicker from './datepicker.jsx';
import WeatherButton from './button.jsx';

class InputWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datetime: null,
      city: null
    };

    this.onCitySelect = this.onCitySelect.bind(this);
    this.onDateTimeSelect = this.onDateTimeSelect.bind(this);
  }

  onCitySelect(option) {
    console.log('You selected city:', option.label);
    this.setState({
      city: option.label
    });
  }

  onDateTimeSelect(option) {
    console.log('You selected datetime:', option);
    this.setState({
      datetime: option
    });
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
          city={this.state.city}
          datetime={this.state.datetime} />
      </div>
    );
  }
}

InputWidget.defaultProps = {
  placeHolder: "Select an option"
};

export default InputWidget;
