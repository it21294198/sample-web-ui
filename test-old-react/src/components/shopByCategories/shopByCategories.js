import React, { Component } from 'react';
import './shopByCategories.scss';

class ShopByCategoriesV2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      slideWidth: 0,
      startX: 0,
      currentX: 0,
      isSwiping: false,
    };
    this.sliderRef = React.createRef();
  }

  componentDidMount() {
    if (this.sliderRef.current) {
      this.setState({
        slideWidth: this.sliderRef.current.offsetWidth,
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.slides.length !== this.props.slides.length) {
      this.setState({
        activeIndex: 0, // Reset the index to avoid out-of-bounds errors
      });
    }
  }

  handleTouchStart = (e) => {
    this.setState({
      startX: e.touches[0].clientX,
      isSwiping: true,
    });
  };

  handleTouchMove = (e) => {
    if (this.state.isSwiping) {
      this.setState({
        currentX: e.touches[0].clientX,
      });
    }
  };

  handleTouchEnd = () => {
    const { startX, currentX, activeIndex } = this.state;
    const threshold = 50; // Minimum swipe distance to trigger slide change
    const { slides, rowCount, columnCount } = this.props;
    const totalGroups = Math.ceil(slides.length / (rowCount * columnCount));

    if (startX - currentX > threshold && activeIndex < totalGroups - 1) {
      // Swiped left
      this.setState((prevState) => ({
        activeIndex: prevState.activeIndex + 1,
      }));
    } else if (currentX - startX > threshold && activeIndex > 0) {
      // Swiped right
      this.setState((prevState) => ({
        activeIndex: prevState.activeIndex - 1,
      }));
    }

    // Reset swipe states
    this.setState({
      isSwiping: false,
      startX: 0,
      currentX: 0,
    });
  };

  goToPrevSlide = () => {
    if (this.state.activeIndex > 0) {
      this.setState((prevState) => ({
        activeIndex: prevState.activeIndex - 1,
      }));
    }
  };

  goToNextSlide = () => {
    const { slides, rowCount, columnCount } = this.props;
    const totalGroups = Math.ceil(slides.length / (rowCount * columnCount));
    if (this.state.activeIndex < totalGroups - 1) {
      this.setState((prevState) => ({
        activeIndex: prevState.activeIndex + 1,
      }));
    }
  };

  render() {
    const { activeIndex, slideWidth } = this.state;
    const { slides, rowCount, columnCount } = this.props;
    const totalGroups = Math.ceil(slides.length / (rowCount * columnCount));

    return (
      <div className="slider-containerV1">
        <div
          className="slider-wrapperV1"
          ref={this.sliderRef}
          onTouchStart={this.handleTouchStart}
          onTouchMove={this.handleTouchMove}
          onTouchEnd={this.handleTouchEnd}
          style={{
            transform: `translateX(-${activeIndex * slideWidth}px)`,
          }}
        >
          {Array(totalGroups)
            .fill()
            .map((_, groupIndex) => (
              <div key={groupIndex} className="slide-groupV1">
                {slides
                  .slice(groupIndex * rowCount * columnCount, groupIndex * rowCount * columnCount + rowCount * columnCount)
                  .map((slide, index) => (
                    <div
                      key={slide.id}
                      className="grid-slideV1"
                      style={{ width: `${100 / columnCount}%` }}
                    >
                      <img src={slide.imageUrl} alt={`Slide ${groupIndex * rowCount * columnCount + index + 1}`} />
                    </div>
                  ))}
              </div>
            ))}
        </div>
        <div className="slider-controlsV1">
          <button onClick={this.goToPrevSlide} disabled={activeIndex === 0}>Left</button>
          <button onClick={this.goToNextSlide} disabled={activeIndex === totalGroups - 1}>Right</button>
        </div>
        <div className="current-groupV1">Current Group: {activeIndex + 1}</div>
      </div>
    );
  }
}

export default ShopByCategoriesV2 ;