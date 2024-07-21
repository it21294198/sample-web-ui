import React, { Component } from 'react';
import DynamicButtonsBar from './dynamicButtonsBar';
import Delivery from './delivery';
import About from './about';
import Help from './help';
import './scss/mainNavBar.scss'

export default class MainBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonDetails: [
        { id: 1, btnName: 'qwerty', btnLink: '#' },
        { id: 2, btnName: 'qwerty', btnLink: '#' },
        // { id: 3, btnName: 'qwerty', btnLink: '#' },
        // { id: 4, btnName: 'qwerty', btnLink: '#' },
        // { id: 5, btnName: 'qwerty', btnLink: '#' },
        // { id: 6, btnName: 'qwerty', btnLink: '#' },
        // { id: 7, btnName: 'qwerty', btnLink: '#' },
        // { id: 8, btnName: 'qwerty', btnLink: '#' },
      ],
    };
  }

  render() {
    return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <div className='navBar'> 
        <Delivery />
        <DynamicButtonsBar buttonDetails={this.state.buttonDetails} />
        <div className='separator'>|</div>
        <About />
        <div className='separator'>|</div>
        <Help />
      </div>
      </div>
    );
  }
}
