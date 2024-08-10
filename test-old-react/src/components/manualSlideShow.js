import React, { Component } from 'react';
import '../styles/manualSlideShow.scss';

export default class ManualSlideShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deviceType: window.innerWidth <= 375 ? 'mobile' : 'desktop',
      freshFarmDetails: [
        { imageDesktop: 'https://placehold.co/250x250?text=Fresh\nVegetable', imageMobile: 'https://placehold.co/150x200?text=Fresh\nVegetable', link: '#' },
        { imageDesktop: 'https://placehold.co/250x250?text=Dairy\nProducts', imageMobile: 'https://placehold.co/150x200?text=Dairy\nProducts', link: '#' },
        { imageDesktop: 'https://placehold.co/250x250?text=Sea\nFoods', imageMobile: 'https://placehold.co/150x200?text=Sea\nFoods', link: '#' },
        { imageDesktop: 'https://placehold.co/250x250?text=Mead\nPoultry', imageMobile: 'https://placehold.co/150x200?text=Mead\nPoultry', link: '#' },
        { imageDesktop: 'https://placehold.co/250x250?text=Mead\nPoultry', imageMobile: 'https://placehold.co/150x200?text=Mead\nPoultry', link: '#' },
        { imageDesktop: 'https://placehold.co/250x250?text=Mead\nPoultry', imageMobile: 'https://placehold.co/150x200?text=Mead\nPoultry', link: '#' },
        { imageDesktop: 'https://placehold.co/250x250?text=Fresh\nFruits', imageMobile: 'https://placehold.co/150x200?text=Fresh\nFruits', link: '#' },
      ],
      currentStartIndex: 0,
    };
  }

  handleRightClick = () => {
    const { currentStartIndex, freshFarmDetails, deviceType } = this.state;
    const maxIndex = deviceType === 'desktop' 
      ? freshFarmDetails.length - 4 
      : freshFarmDetails.length - 2;
    if (currentStartIndex < maxIndex) {
      this.setState({ currentStartIndex: currentStartIndex + (deviceType === 'desktop' ? 1 : 2) });
    }
  };

  handleLeftClick = () => {
    const { currentStartIndex, deviceType } = this.state;
    if (currentStartIndex > 0) {
      this.setState({ currentStartIndex: currentStartIndex - (deviceType === 'desktop' ? 1 : 2) });
    }
  };

  render() {
    const { freshFarmDetails, currentStartIndex, deviceType } = this.state;
    const visibleItems = deviceType === 'desktop' 
      ? freshFarmDetails.slice(currentStartIndex, currentStartIndex + 4) 
      : freshFarmDetails.slice(currentStartIndex, currentStartIndex + 2);

    return (
      <div className="credit-container">
        <div className="mobile-left-mover" onClick={this.handleLeftClick}>left</div>
        <div className="credit-grid">
          {visibleItems.map((e, index) => (
            <div key={index}>
              <img
                className="credit-img"
                src={deviceType === 'desktop' ? e.imageDesktop : e.imageMobile}
                onClick={() => { window.location.href = e.link; }}
                alt="Farm Detail"
              />
            </div>
          ))}
        </div>
        <div className="mobile-right-mover" onClick={this.handleRightClick}>right</div>
        <div className="desktop-mover">
          <div className="left-mover" onClick={this.handleLeftClick}>Left</div>
          <div className="right-mover" onClick={this.handleRightClick}>Right</div>
        </div>
      </div>
    );
  }
}
