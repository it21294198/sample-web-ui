import React, { Component } from 'react';
import '../styles/autoSlideShow.scss';

export default class AutoSlideShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deviceType : 'mobile',
      freshFarmDetails: [
        { 
          imageDesktop: 'https://placehold.co/336x332?text=Fresh\nVegetable',
          imageMobile: 'https://placehold.co/295x234?text=Fresh\nVegetable',
          link: '#'
        },
        { 
          imageDesktop: 'https://placehold.co/336x332?text=Dairy\nProducts',
          imageMobile: 'https://placehold.co/295x234?text=Dairy\nProducts',
          link: '#'
        },
        { 
          imageDesktop: 'https://placehold.co/336x332?text=Sea\nFoods',
          imageMobile: 'https://placehold.co/295x234?text=Sea\nFoods',
          link: '#'
        },
        { 
          imageDesktop: 'https://placehold.co/336x332?text=Mead\nPoultry',
          imageMobile: 'https://placehold.co/295x234?text=Mead\nPoultry',
          link: '#'
        },
        { 
          imageDesktop: 'https://placehold.co/336x332?text=Fresh\nFruits',
          imageMobile: 'https://placehold.co/295x234?text=Fresh\nFruits',
          link: '#'
        }
      ]
    };
  }

  render() {
    const { freshFarmDetails } = this.state;

    return (
      <div className="freshFarm-container">
        <div className='freshFarm-grid' ref={this.autoScrollRef}>
          {
            freshFarmDetails.map((e, index) => (
              <div key={index}>
                <img className='freshFarm-img' src={this.state.deviceType === 'desktop' ? e.imageDesktop : e.imageMobile } onClick={() => { window.location.href = e.link; }} alt="Farm Detail" />
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

