import React from 'react';
import BarChart from 'react-bar-chart';

class WeatherBarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 1000,
      height: 500,
      data: [
        {text: 'Man', value: 500},
        {text: 'Woman', value: 300}
      ],
      margin : {top: 20, right: 20, bottom: 30, left: 40}
    };
  }

  componentDidMount = () => {
    window.onresize = () => {
     this.setState({width: this.refs.root.offsetWidth});
    };
  }

  handleBarClick = (element, id) => {
    console.log(`The bin ${element.text} with id ${id} was clicked`);
  }

  render () {
    return (
      <BarChart
        ylabel='Quantity'
        width={this.state.width}
        height={this.state.height}
        margin={this.state.margin}
        data={this.state.data}
        onBarClick={this.handleBarClick}/>
    )
  }
}

export default WeatherBarChart;
