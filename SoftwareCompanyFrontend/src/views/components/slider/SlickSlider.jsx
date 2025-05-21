
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrowleft from "../../../assets/icons/arrow-left.svg"
import arrowright from "../../../assets/icons/arrow-right.svg"
import "./SlickSlider.css"

const PrevArrows = (props) => {
  const { onClick } = props;
  return (
    <img
      src={arrowleft}
      className="custom-arrows left-arrows"
      onClick={onClick}
      alt="Prev"
    />
  );
};

const NextArrows = (props) => {
  const { onClick } = props;
  return (
    <img
      src={arrowright}
      className="custom-arrows right-arrows"
      onClick={onClick}
      alt="Next"
    />
  );
};


const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <img
      src={arrowleft}
      className="custom-arrow left-arrow"
      onClick={onClick}
      alt="Prev"
    />
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <img
      src={arrowright}
      className="custom-arrow right-arrow"
      onClick={onClick}
      alt="Next"
    />
  );
};

const CustomSlider = ({ settings, children }) => {
  return (
    <Slider {...settings}>
      {children}
    </Slider>
  );
};

export { CustomSlider, PrevArrows, NextArrows,PrevArrow,NextArrow };
