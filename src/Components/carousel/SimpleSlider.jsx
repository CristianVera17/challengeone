import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../../Components/carousel/simple-slider.css";
import Marvelwp from "../../assets/marvelwp.jpg";


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      // dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      // speed:100,
    };
    return (
      <div className="box-sli-one">
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div className="box-sli-two">
           <div className="box-sli-tree">
            <img src={Marvelwp} alt="Image"/>
           </div>
          </div>

          <div className="box-sli-two">
            <h3>2</h3>
          </div>

          <div className="box-sli-two">
            <h3>3</h3>
          </div>

          <div className="box-sli-two">
            <h3>4</h3>
          </div>

          <div className="box-sli-two">
            <h3>5</h3>
          </div>
        </Slider>

       
      </div>
    );
  }
}