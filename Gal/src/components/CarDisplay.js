import React from 'react';
import './CarDisplay.css';
import Slider from 'react-slick';

function CarDisplay() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="car-display">
      <div className="car-info">
        <h1 className="car-title">500 HYBRID</h1>
        <p className="car-description">Une voiture hybride et iconique</p>
        <div className="car-price">2,380,000 DA TTC*</div>
        <button className="car-select-btn">Sélectionner</button>
      </div>
      <Slider {...settings} className="car-slider">
      </Slider>
      <div className="car-miniatures">
      </div>
    </div>
  );
}

export default CarDisplay;
