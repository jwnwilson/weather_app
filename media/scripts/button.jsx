import React, { Component } from 'react'

class WeatherButton extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <button
        className='input-button btn btn-default'
        type='button'
        onClick={this.props.buttonClicked}>
      Get Weather </button>
    )
  }
}

export default WeatherButton;
