import React, { Component } from 'react';
import { render } from 'react-dom';

import MultiToggle from '../index.es6';

import '../style.css';

const groupOptions = [
  {
    displayName: 'Couple',
    value: 2
  },
  {
    displayName: 'Family',
    value: 4
  },
];

class Example extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groupSize: 2
    };
  }

  onGroupSizeSelect = value => this.setState({ groupSize: value });

  render = () => {
    const { groupSize } = this.state;

    return (
      <span>
        <MultiToggle
          options={groupOptions}
          selectedOption={groupSize}
          onSelectOption={this.onGroupSizeSelect}
          label="Select Group Size"
        />
      <strong>Selected group size:</strong> {groupSize}
      </span>
    );
  }
}


render(<Example />, document.getElementById('app'));
