import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Components/carousel/simple-slider.css";
import Marvelwp from "../../assets/mwpmarvel.webp";
import LogoDisney from "../../assets/disneyedit.png";

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
        <div>
          <div className="bg-new-color-tree text-center h-10 flex justify-center items-center text-white  text-xs">
            <div className="max-lg:hidden">
              STREAM THE GOTG: HOLIDAY SPECIAL EXCLUSIVELY ON
            </div>
            <div className="xl:hidden lg:hidden">
              STREAM THE GOTG: HOLIDAY SPECIAL ON
            </div>
            <img className="w-16 h-8 ml-3" src={LogoDisney} alt="" />
          </div>
        </div>
        <Slider {...settings}>
          <div className="box-sli-two">
            {/* <div className="box-sli-tree"> */}
            <img src={Marvelwp} alt="Image" />
            {/* </div> */}
          </div>

          <div className="box-sli-two">
            {/* <h3>2</h3> */}
            <img src={Marvelwp} alt="Image" />
          </div>

          <div className="box-sli-two">
            <img src={Marvelwp} alt="Image" />
          </div>

          <div className="box-sli-two">
            <img src={Marvelwp} alt="Image" />
          </div>

          <div className="box-sli-two">
            <img src={Marvelwp} alt="Image" />
          </div>
        </Slider>
        <div className="box-slider-card">
          <div className="box-int-card-slider">
            <div className="box-sli-cd">
              <div className="box-sli-fl">
                <div>Hola</div>
                <div>Hola</div>
                <div>Hola</div>
                <div>Hola</div>
                <div>Hola</div>
              </div>
            </div>
            <div className="box-sli-cd-two">
              <div className="box-cd-two">jjk</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
