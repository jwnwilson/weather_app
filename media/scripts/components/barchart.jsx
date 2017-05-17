import React from 'react';
import BarChart from 'react-bar-chart';

class WeatherBarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 200,
      height: 400,
      data: this.props.data,
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
      <div className="barChartContainer">
        <h3>{this.props.title}</h3>
        <BarChart
          ylabel={this.props.ylabel}
          width={this.state.width}
          height={this.state.height}
          margin={this.state.margin}
          data={this.props.data}
          onBarClick={this.handleBarClick}/>
      </div>
    )
  }
}

export default WeatherBarChart;
