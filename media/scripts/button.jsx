import React, { Component } from 'react'

class WeatherButton extends Component {
  constructor (props) {
    super(props);
    this.state = {};

    this._onClick = this._onClick.bind(this);
  }

  _onClick () {
    // Get city and time
    console.log('City: ', this.props.city);
    console.log('DateTime: ', this.props.datetime);
    // Make api call

    // Display data
  }

  render () {
    return (
      <button
        className='input-button'
        type='button'
        onClick={this._onClick}>
      Get Weather </button>
    )
  }
}

export default WeatherButton;
