import React, { Component } from 'react'
var Datetime = require('react-datetime');
var moment = require('moment');

class WeatherDatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment()
    };
  }

  handleChange = (date) => {
    this.setState({
      startDate: date
    });
    this.props.onDateTimeSelect(date);
  }

  render() {
    return (
      <div>
        <Datetime
          dateFormat="DD MM YYYY"
          value={this.state.startDate}
          onChange={this.handleChange} />
      </div>
    )
  }
};

WeatherDatePicker.defaultProps = {
  onDateTimeSelect: function(){}
};

export default WeatherDatePicker;
