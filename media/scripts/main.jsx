import React from 'react';
import {render} from 'react-dom';
import CityDropdown from './dropdown.jsx';

class InputWidget extends React.Component {
  render() {
    const options = [
      { value: 'london', label: 'London' },
      { value: 'new_york', label: 'New York' }
    ];
    const defaultOption = options[0];

    return (
      <div>
        <CityDropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
      </div>
    )
  }
}

class App extends React.Component {
  render () {
    return <InputWidget />;
  }
}

render(<App/>, document.getElementById('app'));
