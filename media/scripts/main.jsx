import React from 'react';
import {render} from 'react-dom';
import InputWidget from './inputWidget.jsx';

class App extends React.Component {
  render () {
    return (
      <InputWidget
        placeHolder='Select a city' />
    )
  }
}

render(<App/>, document.getElementById('app'));
