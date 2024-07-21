import React, { Component } from 'react';
import Select, { components } from 'react-select';
import '../../../src/styles/selectView.scss'

// Custom Menu Component to handle scrollable options
class CustomMenu extends Component {
  render() {
    const { children, ...props } = this.props;
    return (
      <components.Menu {...props}>
        <div style={{ maxHeight: '150px', overflowY: 'auto' }}>
          {children}
        </div>
      </components.Menu>
    );
  }
}

export default class SelectInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
        { value: 'ilf', label: 'lla' },
        { value: 'ala', label: 'lla' },
        { value: 'ala', label: 'lla' },
        { value: 'ala', label: 'lla' },
        { value: 'ala', label: 'lla' },
        { value: 'ala', label: 'lla' },
        { value: 'ala', label: 'lla' },
        { value: 'ala', label: 'lla' },
        { value: 'eva', label: 'ella' },
        { value: 'hello', label: 'qwerty' },
        { value: 'ala', label: 'lla' },
        { value: 'eva', label: 'ella' },
        { value: 'hello', label: 'qwerty' },
      ],
      inputValue: '',
    };
  }

  handleInputChange = (inputValue) => {
    this.setState({ inputValue });
  };

  filterOptions = () => {
    const { options, inputValue } = this.state;
    if (inputValue === '') {
      return options;
    }
    return options.filter(option =>
      option.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  render() {
    const { inputValue } = this.state;
    const filteredOptions = this.filterOptions();

    return (
      <div className='select-view'>
        <div>Above div</div>
        <Select
          options={filteredOptions}
          onInputChange={this.handleInputChange}
          components={{ Menu: CustomMenu }}
          inputValue={inputValue}
          menuIsOpen
          styles={{
            control: (base) => ({
              ...base,
              marginBottom: '10px',
              borderColor: '#ccc', // Change border color
              boxShadow: 'none', // Remove shadow
              '&:hover': {
                borderColor: '#888' // Change border color on hover
              }
            }),
            menu: (base) => ({
              ...base,
              margin: 0,
              position: 'static',
              boxShadow: 'none',
              borderTop: '1px solid #ccc',
              maxHeight: '150px',
              overflowY: 'auto'
            }),
            option: (base) => ({
              ...base,
              backgroundColor: 'white',
              color: 'black',
              '&:hover': {
                backgroundColor: '#1dff47'
              }
            }),
            input: (base) => ({
              ...base,
              color: 'black', // Change input text color
              fontSize: '14px' // Change input text size
            }),
            singleValue: (base) => ({
              ...base,
              color: 'black' // Change selected option color
            })
          }}
        />
        <div>Below div</div>
      </div>
    );
  }
}
