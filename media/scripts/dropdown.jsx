import React, { Component } from 'react'
import Dropdown from 'react-dropdown';

const options = [
  'london', 'new-york', 'berlin'
]

class DropdownIgnorePlaceholder extends Dropdown {
  // Dropdown will use placeholder when re-rendering
  componentWillReceiveProps(newProps) {
    if(newProps.value !== this.state.selected){
      super.componentWillReceiveProps(newProps);
    }
  }
}

class CityDropdown extends Component {
  constructor (props) {
    super(props);
    this.state = {
      selected: null
    };

    this._onSelect = this._onSelect.bind(this);
  }

  _onSelect (option) {
    this.setState({selected: option});
    this.props.onCitySelect(option);
  }

  render () {
    return (
      <DropdownIgnorePlaceholder
        options={options}
        onChange={this._onSelect}
        value={this.state.selected}
        placeholder="Select a city" />
    )
  }
}

export default CityDropdown;
