import React, { Component } from 'react'
import Dropdown from 'react-dropdown';

const options = [
  'london', 'new-york', 'berlin'
]

class CityDropdown extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: options[0]
    }
    this._onSelect = this._onSelect.bind(this)
  }

  _onSelect (option) {
    console.log('You selected ', option.label)
    this.setState({selected: option})
  }

  render () {
    const defaultOption = this.state.selected
    const placeHolderValue = typeof this.state.selected === 'string' ? this.state.selected : this.state.selected.label

    return (
      <section>
        <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
        <div className='result'>
          You selected
          <strong> {placeHolderValue} </strong>
        </div>
      </section>
    )
  }
}

export default CityDropdown;
