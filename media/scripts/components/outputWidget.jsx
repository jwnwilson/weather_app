import React, { Component } from 'react'

class OutputWidget extends React.Component {
  formatDate = () => {
    if(this.props.datetime){
      return this.props.datetime.format('MM:HH DD/MM/YYYY');
    }
    return '';
  }

  formatApiData = () => {
    console.log('here');
    console.log(this.props.apiData);
    if(this.props.apiData){
      let cityData = this.props.apiData.objects[0];
      return (<div>
        <strong>Weather</strong>
        <p>{cityData.weather[0].main}</p>
        <p>{cityData.weather[0].description}</p>
        <strong>Details</strong>
        <p>humidity: {cityData.main.humidity}</p>
        <p>average temp: {cityData.main.temp}</p>
        <p>max temp: {cityData.main.temp_max}</p>
        <p>min temp: {cityData.main.temp_min}</p>
    </div>);
    }
    return ;
  }

  render() {
    return (
      <div className='outputWidget'>
        <h3>Location</h3>
          <p className='clear'>{this.props.city}</p>
        <h3>Time</h3>
          <p className='clear'>{this.formatDate()}</p>
        <h3>Weather Results:</h3>
          {this.formatApiData()}
      </div>
    );
  }
}

export default OutputWidget;
