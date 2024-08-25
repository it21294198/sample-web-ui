import React, { Component } from 'react';
import './slider.scss'; // Import the SCSS file

class SliderAnimation2 extends Component {
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
    const { slides, showcount } = this.props;
    const totalGroups = Math.ceil(slides.length / showcount);

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
    const { slides, showcount } = this.props;
    const totalGroups = Math.ceil(slides.length / showcount);
    if (this.state.activeIndex < totalGroups - 1) {
      this.setState((prevState) => ({
        activeIndex: prevState.activeIndex + 1,
      }));
    }
  };

  render() {
    const { activeIndex, slideWidth } = this.state;
    const { slides, showcount } = this.props;
    const totalGroups = Math.ceil(slides.length / showcount);

    return (
      <div className="slider-container">
        <div
          className="slider-wrapper"
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
              <div key={groupIndex} className="slide-group">
                {slides
                  .slice(groupIndex * showcount, groupIndex * showcount + showcount)
                  .map((slide, index) => (
                    <div
                      key={slide.id}
                      className="slide"
                      style={{ width: `${100 / showcount}%` }}
                    >
                      <img src={slide.imageUrl} alt={`Slide ${groupIndex * showcount + index + 1}`} />
                    </div>
                  ))}
              </div>
            ))}
        </div>
        <div className="slider-controls">
          <button onClick={this.goToPrevSlide} disabled={activeIndex === 0}>Left</button>
          <button onClick={this.goToNextSlide} disabled={activeIndex === totalGroups - 1}>Right</button>
        </div>
        <div className="current-group">Current Group: {activeIndex + 1}</div>
      </div>
    );
  }
}

export default SliderAnimation2;
