import React, { Component } from 'react';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { isDrawerOpen: false };
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
  }

  handleDrawerOpen() {
    this.setState({ isDrawerOpen: true });
  }

  handleDrawerClose() {
    this.setState({ isDrawerOpen: false });
  }

  render() {
    return (
      <div className='container'>
        <nav>
          <div className='logo'>
            <img src='logo.png' alt='logo' width='50px' height='50px' />
          </div>
          <ul className={this.state.isDrawerOpen ? 'drawer-open' : ''}>
            <div className='btn close-btn' onClick={this.handleDrawerClose}>
              <img src='close-icon.png' alt='close' width='20px' height='20px' />
            </div>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Product</a></li>
            <li><a href='#'>Profile</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Help</a></li>
          </ul>
          <div className='btn open-btn' onClick={this.handleDrawerOpen}>
            <img src='menu-icon.png' alt='menu' width='20px' height='20px' />
          </div>
        </nav>
      </div>
    );
  }
}
