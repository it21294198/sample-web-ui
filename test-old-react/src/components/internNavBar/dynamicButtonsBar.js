import React, { Component } from 'react';

export default class DynamicButtonsBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { buttonDetails } = this.props;
    return (
      <div className='dynamicNavBar'>
        {buttonDetails.map((e, index) => (
          <div className='buttonContainer' key={index}>
            <div className='separator'>|</div>
            <div onClick={() => { window.location.href = e.butLink }}>{e.btnName}</div>
          </div>
        ))}
      </div>
    );
  }
}
