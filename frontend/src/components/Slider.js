import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';

const Slider = (props) => (
  <AwesomeSlider
  animation="openAnimation"
  cssModule={AwesomeSliderStyles}
  play={true}
  cancelOnInteraction={false}
  interval={6000}>
  {props.children}
  </AwesomeSlider>
);

export default Slider;
