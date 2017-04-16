import React, { Component } from 'react'

class OutputWidget extends React.Component {
  constructor(props) {
    super(props);

    this.formatDate = this.formatDate.bind(this);
  }

  formatDate(){
    if(this.props.datetime){
      return this.props.datetime.format('DD MM YYYY');
    }
    return '';
  }

  render() {
    return (
      <div className='outputWidget'>
        <h3>Location</h3>
          <p>{this.props.city}</p>
        <h3>Time</h3>
          <p>{this.formatDate()}</p>
        <h3>Weather Results:</h3>
          <pre>
            {JSON.stringify(this.props.apiData)}
          </pre>
      </div>
    );
  }
}

export default OutputWidget;
