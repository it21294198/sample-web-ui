import React, { Component } from 'react';
import './shopByCategories.scss';

export default class ShopByCategoriesV2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopByCat: [
        { subDepartmentName: 'Test Test Test1', imageMobile: 'https://placehold.co/100x100?text=Mead\nPoultry', link: '#' },
        { subDepartmentName: 'Test Test Test2', imageMobile: 'https://placehold.co/100x100?text=Mead\nPoultry', link: '#' },
        { subDepartmentName: 'Test Test Test3', imageMobile: 'https://placehold.co/100x100?text=Mead\nPoultry', link: '#' },
        { subDepartmentName: 'Test Test Test4', imageMobile: 'https://placehold.co/100x100?text=Fresh\nFruits', link: '#' },
        { subDepartmentName: 'Test Test Test5', imageMobile: 'https://placehold.co/100x100?text=Mead\nPoultry', link: '#' },
        { subDepartmentName: 'Test Test Test6', imageMobile: 'https://placehold.co/100x100?text=Mead\nPoultry', link: '#' },
        { subDepartmentName: 'Test Test Test7', imageMobile: 'https://placehold.co/100x100?text=Mead\nPoultry', link: '#' },
        { subDepartmentName: 'Test Test Test8', imageMobile: 'https://placehold.co/100x100?text=Fresh\nFruits', link: '#' },
        { subDepartmentName: 'Test Test Test9', imageMobile: 'https://placehold.co/100x100?text=Mead\nPoultry', link: '#' },
        { subDepartmentName: 'Test Test Test10', imageMobile: 'https://placehold.co/100x100?text=Mead\nPoultry', link: '#' },
        { subDepartmentName: 'Test Test Test11', imageMobile: 'https://placehold.co/100x100?text=Mead\nPoultry', link: '#' },
        { subDepartmentName: 'Test Test Test12', imageMobile: 'https://placehold.co/100x100?text=Fresh\nFruits', link: '#' },
        { subDepartmentName: 'Test Test Test13', imageMobile: 'https://placehold.co/100x100?text=Mead\nPoultry', link: '#' },
        { subDepartmentName: 'Test Test Test14', imageMobile: 'https://placehold.co/100x100?text=Mead\nPoultry', link: '#' },
        { subDepartmentName: 'Test Test Test15', imageMobile: 'https://placehold.co/100x100?text=Mead\nPoultry', link: '#' },
        { subDepartmentName: 'Test Test Test16', imageMobile: 'https://placehold.co/100x100?text=Fresh\nFruits', link: '#' },
      ],
      showIndex: 0,
      isAnimating: false,
      touchStartX: 0,
    };
    this.mobileShopByCatGrid = React.createRef();
  }

  handleTouchStart = (e) => {
    this.setState({ touchStartX: e.touches[0].clientX });
  };

  handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchDifference = this.state.touchStartX - touchEndX;

    if (touchDifference > 50) {
      this.handleSwipeLeft();
    } else if (touchDifference < -50) {
      this.handleSwipeRight();
    }
  };

  changeItemsLeft = () => {
    if (this.state.showIndex > 0) {
      this.setState((prevState) => ({
        showIndex: prevState.showIndex - 8,
      }));
    }
  };

  changeItemsRight = () => {
    const { showIndex, shopByCat } = this.state;
    if (showIndex + 8 < shopByCat.length) {
      this.setState((prevState) => ({
        showIndex: prevState.showIndex + 8,
      }));
    }
  };

  handleSwipeLeft = () => {
    if (!this.state.isAnimating) {
      this.setState({ isAnimating: true }, () => {
        this.mobileShopByCatGrid.current.classList.add('swiping-left');
        setTimeout(() => {
          this.mobileShopByCatGrid.current.classList.remove('swiping-left');
          this.changeItemsRight();
          this.setState({ isAnimating: false });
        }, 300);
      });
    }
  };

  handleSwipeRight = () => {
    if (!this.state.isAnimating && this.state.showIndex > 0) {
      this.setState({ isAnimating: true }, () => {
        this.mobileShopByCatGrid.current.classList.add('swiping-right');
        setTimeout(() => {
          this.mobileShopByCatGrid.current.classList.remove('swiping-right');
          this.changeItemsLeft();
          this.setState({ isAnimating: false });
        }, 300);
      });
    }
  };

  shouldRenderDivideLine = (index, screenSize, itemsToShow) => {
    if (screenSize >= 768) {
      return {
        side: index !== itemsToShow.length - 1,
      };
    }
    return {
      side: false,
    };
  };

  render() {
    const itemsToShow = this.state.shopByCat.slice(this.state.showIndex, this.state.showIndex + 8);

    return (
      <div className="shopByCat-main">
        <div className="mobile-shopByCat-container">
          <div
            onClick={this.changeItemsLeft}
            className={this.state.showIndex > 0 ? 'active-mover-btn-icon' : 'deactive-mover-btn-icon'}
          >
            left
          </div>
          <div
            className="mobile-shopByCat-grid-wrapper"
            onTouchStart={this.handleTouchStart}
            onTouchEnd={this.handleTouchEnd}
          >
            <div ref={this.mobileShopByCatGrid} className="mobile-shopByCat-grid">
              {itemsToShow.map((e, index) => {
                const { side } = this.shouldRenderDivideLine(index, window.innerWidth, itemsToShow);
                return (
                  <div key={index} className="shopByCat-item">
                    <img className="mobile-shopByCat-img" src={e.imageMobile} alt="shopByCat Detail" />
                    <div className="shopByCat-title">{e.subDepartmentName}</div>
                    {side && <div className="sbc-side-divideLine" />}
                  </div>
                );
              })}
            </div>
          </div>
          <div
            onClick={this.changeItemsRight}
            className={this.state.showIndex + 8 < this.state.shopByCat.length ? 'active-mover-btn-icon' : 'deactive-mover-btn-icon'}
          >
            right
          </div>
        </div>
      </div>
    );
  }
}
